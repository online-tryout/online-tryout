import { Transaction } from "@/models/payment";
import { Tryout } from "@/models/tryout";
import { serverAxios } from "@/utils/axios";
import { cookies } from "next/headers";

export async function getListTryout(): Promise<Tryout[]> {
  "use server";
  try {
    const { data } = await serverAxios.get<Tryout[]>("/api/db/tryout", {
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

export async function getMyTransactions(userId: string): Promise<Transaction[]> {
  "use server";
  try {
    console.log(`/api/payment/transactions/user/${userId}`)
    const { data } = await serverAxios.get<Transaction[]>(`/api/payment/transactions/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getToDetail(id: string): Promise<{
  tryout: Tryout;
  message: string;
}> {
  "use server";
  try {
    const url = "/api/tryout/data/" + id;
    const { data } = await serverAxios.get<{
      tryout: Tryout;
      message: string;
    }>(url, {
      headers: {
        Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
