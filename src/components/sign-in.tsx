"use client";

import Image from "next/image";
import { useActionState, FC } from "react";
import { signInWithGitHub, signInWithGoogle } from "@/actions/auth-action";

import GoogleIcon from "@/public/logos/google.svg";
import GitHubIcon from "@/public/logos/github.svg";

const SignIn: FC = () => {
  const [googleError, googleAction, googlePending] = useActionState(
    signInWithGoogle,
    undefined,
  );
  const [githubError, githubAction, githubPending] = useActionState(
    signInWithGitHub,
    undefined,
  );

  return (
    <div className="w-full max-w-sm space-y-4 rounded-lg bg-gray-100 px-8 py-6">
      <form action={googleAction}>
        <button className="w-full rounded-md px-4 py-3 transition-colors flex-between hover:bg-gray-200">
          <span>
            {googlePending ? "Signing in with Google" : "Sign in with Google"}
          </span>
          <Image src={GoogleIcon} alt="Google" width={20} height={20} />
        </button>
      </form>

      <form action={githubAction}>
        <button className="w-full rounded-md px-4 py-3 transition-colors flex-between hover:bg-gray-200">
          <span>
            {githubPending ? "Signing in with GitHub" : "Sign in with GitHub"}
          </span>
          <Image src={GitHubIcon} alt="GitHub" width={20} height={20} />
        </button>
      </form>
    </div>
  );
};

export default SignIn;
