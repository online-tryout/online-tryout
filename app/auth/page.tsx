import Auth from "@/components/auth/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AuthPage() {
  const accessToken = cookies().get("accessToken");
  if (accessToken) {
    redirect("/tryout");
  }

  return <Auth />;
}
