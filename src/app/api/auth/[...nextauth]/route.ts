import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt, { compare } from "bcrypt";
import { userSchema } from "@/lib/zodSchemas";
import prisma from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!existingUser) return null;

        const passwordMatched = await compare(
          credentials?.password,
          existingUser?.password
        );

        if (!passwordMatched) return null;

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        // token.isAdmin = user.isAdmin;
      }
      return token;
    },
    session: async ({ session, token }) => {
      //   if (session?.user) {
      //     session.user.id = token.uid as string;
      //     // session.user.isAdmin = token.isAdmin;
      //   }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  //   pages: {
  //     signIn: "/signin", // PAGE TO REDIRECT FOR PROTECTED ROUTES
  //   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
