"use client";

import { FC, useState } from "react";
import PaymentInput from "./payment-input";
import PaymentSubmitted from "./payment-submitted";


const Payment: FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const mockedJson = {
    "userId": "1",
    "tryout_name": "Try Out SIMAK UI 2025 A LONG NAME FOR TESTING PURPOSES",
    "tryout_id": "1",
    "transaction_id": "23E4F5G6H7J8K9L0",
    "price": "100.123",
    "bank": "BCA",
    "account_number": "1234567890",
  };

  return (
    <div className="flex sm:h-[calc(100vh-65px)] w-full items-center justify-center px-4 my-4 sm:m-0">
      {submitSuccess ? 
          <PaymentSubmitted data={mockedJson} />
          : 
          <PaymentInput data={mockedJson} setSubmitSuccess={setSubmitSuccess} />
        }
    </div>
  );
};

Payment.displayName = "Payment";
export default Payment;
