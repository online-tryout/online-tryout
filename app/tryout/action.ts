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
