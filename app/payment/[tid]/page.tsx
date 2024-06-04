import Payment from "@/components/payment/payment";

export const dynamic = "force-dynamic";

export default function PaymentPage({ params }: { params: { tid: string }}) {
  const tryoutId = params.tid;
  return <Payment tryoutId={tryoutId} />;
}
