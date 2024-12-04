import { FC } from "react";
import { signOut } from "@/auth";

const SignOut: FC = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default SignOut;
