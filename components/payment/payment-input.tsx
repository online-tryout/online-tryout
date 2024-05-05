"use client";

import { FC, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@radix-ui/react-dropdown-menu";
import PicturePreview from "./components/picture-preview";
import { Label } from "@/components/ui/label";


interface PaymentInputProps {
  setSubmitSuccess: (value: boolean) => void;
  data: {
      userId: string;
      tryout_name: string;
      tryout_id: string;
      transaction_id: string;
      price: string;
      bank: string;
      account_number: string;
  };
}


const PaymentInput: FC<PaymentInputProps> = ({ setSubmitSuccess, data }) => {
  const { toast } = useToast();
  const [proofPreview, setProofPreview] = useState<string | null>(null);

  const validationSchema = Yup.object().shape({
    picture: Yup.mixed().required("please upload your proof of payment"),
  });

  const submitHandler = async (values: any) => {
    console.log(values);
    const data = new FormData();
    data.append("transaction_id", values.transactionId);
    data.append("tryout_id", values.tryoutId);
    data.append("user_id", values.userId);
    data.append("picture", values.picture);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setSubmitSuccess(true);
    toast({
      title: "Payment Proof Submitted",
      duration: 2000,
    });
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      variant: "default",
      duration: 2000,
    });
  }


  return (
      <div className="flex flex-col sm:flex-row gap-4">
        {proofPreview && (
          <PicturePreview picture={proofPreview} className="hidden sm:block" />
        )}

        <Card className="flex flex-col justify-center max-w-[600px]">
          <CardHeader>
            <div className="mt-5 flex flex-col space-y-2 text-center">
              <CardTitle className="text-2xl font-semibold tracking-tight">
                {data.tryout_name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {data.transaction_id}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between gap-2">
                <p>Price</p>
                <p>Rp. {data.price}</p>
              </div>
              <div className="flex justify-between gap-2">
                <p>Bank</p>
                <p>{data.bank}</p>
              </div>
              <div className="flex justify-between gap-2">
                <p>Account Number</p>
                <button onClick={() => {copyToClipboard(data.account_number)}}>
                  {data.account_number}
                </button>
              </div>

              <Separator className="my-2" />

              <Formik
                initialValues={{
                  transactionId: data.transaction_id,
                  tryoutId: data.tryout_id,
                  userId: "1",
                  picture: null,
                }}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
              >
                {(formik) => (
                  <Form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="picture">Upload Proof of Payment</Label>
                      <div className="text-xs text-red-500 italic">
                        <ErrorMessage name="picture" />
                      </div>

                      <Input
                        type="file"
                        id="picture"
                        name="picture"
                        accept="image/*"
                        className="cursor-pointer"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setProofPreview(reader.result as string);
                              formik.setFieldValue("picture", file)
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </div>
                    
                    {proofPreview && (
                      <PicturePreview picture={proofPreview} className="sm:hidden mx-auto" />
                    )}

                    <Button
                      disabled={formik.isSubmitting}
                      type="submit"
                    >
                      {formik.isSubmitting ? (
                        <>
                          <output
                            className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                          />
                          <span>Loading...</span>
                        </>
                      ) : (
                        "I've Paid!"
                      )}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

PaymentInput.displayName = "PaymentInput";
export default PaymentInput;
