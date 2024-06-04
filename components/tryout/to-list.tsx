"use client";

import { Tryout } from "@/models/tryout";
import useAuthStore from "@/store/useAuthStore";
import { FC, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Transaction } from "@/models/payment";

interface TryOutListProps {
  tryouts: Tryout[];
  transactions: Transaction[];
}

const TryoutList: FC<TryOutListProps> = ({ tryouts, transactions }) => {
  const { user } = useAuthStore();

  const myTryouts = transactions.map((t) => {
    return tryouts.find((to) => to.id === t.tryout_id);
  });

  return (
    <div className="w-full min-h-screen px-8 flex flex-col gap-8">
      <section className="border-b py-8">
        <div className="text-3xl">{user?.name}</div>
        <div>{user?.email}</div>
      </section>
      <section className="border-b pb-8">
        <div className="pb-4">
          <div className="text-2xl">Tryout yang tersedia</div>
          <div>Berikut adalah tryout yang tersedia dan bisa kamu beli ^^</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {tryouts.map((to) => {
            return (
              <Card key={to.id}>
                <CardHeader>
                  <CardTitle>{to.title}</CardTitle>
                  <CardDescription>Rp{to.price.toLocaleString()}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  {myTryouts.includes(to) ? (
                    <Button disabled>Bought</Button>
                  ) : (
                    <Button asChild size={"sm"} variant={"default"}>
                      <Link href={`/payment/${to.id}`}>Buy</Link>
                    </Button>  
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      <section>
        <div className="pb-4">
          <div className="text-2xl">Tryout saya</div>
          <div>Berikut adalah daftar tryout kamu!</div>
          <div className="grid grid-cols-4 gap-4">
          {myTryouts.map((to) => {
            return (
              <Card key={to?.id + "-mine"}>
                <CardHeader>
                  <CardTitle>{to?.title}</CardTitle>
                  <CardDescription>Rp{to?.price.toLocaleString()}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        </div>
        <div className="grid grid-rows-2"></div>
      </section>
    </div>
  );
};

export default TryoutList;
