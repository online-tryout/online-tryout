"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FC } from "react";


interface PaymentSuccessProps {
  data: {
    tryout_name: string;
    transaction_id: string;
  };
}

const PaymentSubmitted: FC<PaymentSuccessProps> = ({ data }) => {

  return (
    <Card className="flex flex-col justify-center max-w-[600px]">
      <CardHeader>
        <div className="mt-5 flex flex-col space-y-2 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Payment Submitted
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {data.transaction_id}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="text-center">
        <p>
          Thank you for submitting your proof of payment
        </p>
        <p>
          We are now verifying your payment for <span className="font-semibold">{data.tryout_name}</span>
        </p>
      </CardContent>

      <CardFooter>
        <Link href="/" className="flex justify-center w-full">
          <Button className="w-fit px-8">Back to ???</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

PaymentSubmitted.displayName = "PaymentSuccess";
export default PaymentSubmitted;
