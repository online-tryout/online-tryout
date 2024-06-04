import TryoutList from "@/components/tryout/to-list";
import { getListTryout } from "./action";

export default async function TryoutListPage() {
  const { tryouts } = await getListTryout();
  return <TryoutList tryouts={tryouts} />;
}
