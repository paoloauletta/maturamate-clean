"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInButton() {
  return (
    <div className="flex flex-col gap-4">
      <Button
        type="submit"
        onClick={() => signIn("google", { redirectTo: "/dashboard" })}
      >
        <span className="text-white">Signin with Google</span>
      </Button>

      <Button
        type="submit"
        onClick={() => signIn("github", { redirectTo: "/dashboard" })}
      >
        <span className="text-white">Signin with Github</span>
      </Button>
    </div>
  );
}
