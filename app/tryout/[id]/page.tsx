import TryoutList from "@/components/tryout/to-list";
import { getListTryout } from "../action";

export default async function TryoutDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { tryouts } = await getListTryout();
  return <TryoutList tryouts={tryouts} />;
}
