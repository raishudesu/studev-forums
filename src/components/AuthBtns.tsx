import { Button } from "./ui/button";

const AuthBtns = () => {
  return (
    <>
      <Button size={"sm"}>Sign in</Button>
      <Button size={"sm"} variant={"secondary"}>
        Register
      </Button>
    </>
  );
};

export default AuthBtns;
