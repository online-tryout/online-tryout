import { Tryout } from "@/models/tryout";
import { serverAxios } from "@/utils/axios";
import { cookies } from "next/headers";

export async function getListTryout(): Promise<{
  tryouts: Tryout[];
  message: string;
}> {
  "use server";
  try {
    const { data } = await serverAxios.get<{
      tryouts: Tryout[];
      message: string;
    }>("/api/tryout/data", {
      headers: {
        Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMyTransactions(userId: string): Promise<{
  transactions: any[];
  message: string;
}> {
  "use server";
  try {
    console.log(`/api/payment/transactions/user/${userId}`)
    const { data } = await serverAxios.get<{
      transactions: any[];
      message: string;
    }>(`/api/payment/transactions/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
