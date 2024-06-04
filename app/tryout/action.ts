"use server"

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
    }>("/api/db/tryout/data", {
      headers: {
        Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    });

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
