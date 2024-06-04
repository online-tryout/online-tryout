"use client";

import { FC, useEffect, useState } from "react";
import PaymentInput from "./payment-input";
import PaymentSubmitted from "./payment-submitted";
import { getTransactionIntent } from "@/app/payment/[tid]/action";
import { TransactionIntent } from "@/models/payment";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";


const Payment: FC<{tryoutId: string}> = ({ tryoutId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [transactionIntent, setTransactionIntent] = useState<TransactionIntent | null>(null);

  useEffect(() => {
    const fetchIntent = async () => {
      try {
        const data = await getTransactionIntent(tryoutId);
        setTransactionIntent(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchIntent();
  }, []);

  return (
    <div className="flex sm:h-[calc(100vh-65px)] w-full items-center justify-center px-4 my-4 sm:m-0">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) :
      (
        transactionIntent ? (
          submitSuccess ? (
            <PaymentSubmitted data={transactionIntent} />
          ) : (
            <PaymentInput
              data={transactionIntent}
              setSubmitSuccess={setSubmitSuccess}
            />
          )
        ) : (
          notFound()
        )
      )
      }
    </div>
  );
};

Payment.displayName = "Payment";
export default Payment;
