"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function signInWithGoogle() {
  try {
    await signIn("google");
  } catch (error) {
    throw error;
  }
}

export async function signInWithGitHub() {
  try {
    await signIn("github");
  } catch (error) {
    throw error;
  }
}
