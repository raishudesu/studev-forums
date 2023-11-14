import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "./SigninForm";

const SigninCard = () => {
  return (
    <Card className="mt-6 max-w-md">
      <CardHeader>
        <CardTitle className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Sign in
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default SigninCard;
