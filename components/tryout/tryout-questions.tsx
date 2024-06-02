"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Module } from "@/models/module";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

interface TryoutQuestionsProps {
    data: Module;
}

export const TryoutQuestions: React.FC<TryoutQuestionsProps> = ({ data }) => {
    console.log(data)
    const [selectedQuestion, setSelectedQuestion] = useState<number>(1);

    const handleQuestionSelection = (question: number) => {
        setSelectedQuestion(question);
    }
    
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Questions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-5 gap-4">
                    {/* {
                        data.questions.map((item) => (
                            <Button 
                            key={item.question_order}
                            variant={selectedQuestion == item.question_order? "secondary" : "outline"}
                            onClick={() => (handleQuestionSelection(item.question_order))}
                            >
                                {item.question_order}
                            </Button>
                        ))
                    } */}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Submit</Button>
            </CardFooter>
        </Card>
    )
}