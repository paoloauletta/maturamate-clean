import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOut from "../components/auth/sing-out";
export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/?callbackUrl=/dashboard");
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
