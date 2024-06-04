"use server"

import { cookies } from "next/headers";
import { serverAxios } from "@/utils/axios";
import { TransactionIntent } from "@/models/payment";


export async function getTransactionIntent(
  tryoutId: string
): Promise<TransactionIntent> {
  const accessToken = cookies().get("accessToken");
  const { data } = await serverAxios.get<TransactionIntent>(
    `/api/payment/intent/${tryoutId}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  data.user_id = cookies().get("userId")?.value ?? null;
  return data;
}

export async function submitTransaction(tryout_id: string, user_id: string, amount: string, status: string) {
  const accessToken = cookies().get("accessToken");
  const { data } = await serverAxios.post(
    `/api/payment/transaction`,
    { tryout_id, user_id, amount, status },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return data;
}

export async function submitPaymentProof(formData: FormData, transactionId: string) {
  const accessToken = cookies().get("accessToken");
  const { data } = await serverAxios.post(
    `/api/payment/proof/${transactionId}`,
    formData,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return data;
}
