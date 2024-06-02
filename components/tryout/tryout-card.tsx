"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button'
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Module } from "@/models/module";

interface TryoutQuestionsProps {
    data: Module;
}

export const TryoutCard: React.FC<TryoutQuestionsProps>= ({ data }) => {
    console.log(data)
    const [selectedOption, setSelectedOption] = useState<string>("");

    const selectHandler = (option: string) => {
        setSelectedOption(option);
    }

    return (
        <Card className="flex flex-col justify-center w-full">
          <CardHeader>
            <CardTitle>TryOut</CardTitle>
            <CardDescription>1. Apa kepanjangan dari LAW?</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="w-full">
              <Button 
              className="w-full" size="lg"
              variant={selectedOption === "a" ? "default" : "outline"}
              onClick={() => selectHandler("a")}
              >
                A. Layanan dan Aplikasi Web
              </Button>
            </div>
            <div className="w-full">
              <Button 
              className="w-full" size="lg"
              variant={selectedOption === "b" ? "default" : "outline"}
              onClick={() => selectHandler("b")}
              >
                B. Lancar dan Aman Web
              </Button>
            </div>
            <div className="w-full">
              <Button 
              className="w-full" size="lg"
              variant={selectedOption === "c" ? "default" : "outline"}
              onClick={() => selectHandler("c")}
              >
                C. Layanan dan Asimilasi Web
              </Button>
            </div>
            <div className="w-full">
              <Button 
              className="w-full" size="lg"
              variant={selectedOption === "d" ? "default" : "outline"}
              onClick={() => selectHandler("d")}
              >
                D. Lingkaran dan Analisis Web
              </Button>
            </div>
          </CardContent>
          <CardFooter className="grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-3">
              <Button 
              className="w-full" size="lg"
              >
                Previous
              </Button>
            </div>
            <div className="col-end-7 col-span-2">
              <Button 
              className="w-full" size="lg"
              >
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      )
}