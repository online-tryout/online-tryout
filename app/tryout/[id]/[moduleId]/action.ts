"use server"

import { Module } from "@/models/module";
import { serverAxios } from "@/utils/axios";

export async function fetchModule( id: string, moduleId: string ) {
    "use server"
    try{
        const { data } = await serverAxios.get("/api/db/tryout/" + id + "/" + moduleId)
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}