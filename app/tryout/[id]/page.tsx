import TryoutList from "@/components/tryout/to-list";
import { getListTryout, getMyTransactions } from "../action";
import { cookies } from "next/headers";

export default async function TryoutDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const tryouts = await getListTryout();

  const userId = cookies().get("userId")?.value ?? "";
  const transactions = await getMyTransactions(userId);
  return <TryoutList tryouts={tryouts} transactions={transactions} />;
}
