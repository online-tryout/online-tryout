"use client";

import { Module } from "@/models/module";
import { Option } from "@/models/option";
import { Question } from "@/models/question";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Item } from "@radix-ui/react-dropdown-menu";

const Tryout = () => {
    const mockOption1q1: Option = {
        id: "o1q1",
        content: "Layanan dan Aplikasi Web",
        question_id: "q1",
        is_true: true,
        option_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
    }
    const mockOption2q1: Option = {
        id: "o2q1",
        content: "Layanan dan Animasi Web",
        question_id: "q1",
        is_true: false,
        option_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
    }
    const mockOption3q1: Option = {
        id: "o3q1",
        content: "Lingkaran dan Aplikasi Web",
        question_id: "q1",
        is_true: true,
        option_order: 3,
        created_at: new Date(),
        updated_at: new Date(),
    }
    const mockOption4q1: Option = {
        id: "o4q1",
        content: "Layanan dan Aplikasi Waspada",
        question_id: "q1",
        is_true: true,
        option_order: 4,
        created_at: new Date(),
        updated_at: new Date(),
    }

    const mockOption1q2: Option = {
        id: "o1q2",
        content: "Tanda Akhir",
        question_id: "q2",
        is_true: true,
        option_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
    }
    const mockOption2q2: Option = {
        id: "o2q2",
        content: "Tugas Akhir",
        question_id: "q2",
        is_true: true,
        option_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
    }
    const mockOption3q2: Option = {
        id: "o3q2",
        content: "Tulisan Akhir",
        question_id: "q2",
        is_true: true,
        option_order: 3,
        created_at: new Date(),
        updated_at: new Date(),
    }
    const mockOption4q2: Option = {
        id: "o4q2",
        content: "Tanpa Akhir",
        question_id: "q2",
        is_true: true,
        option_order: 4,
        created_at: new Date(),
        updated_at: new Date(),
    }

    const mockQuestion1: Question = {
        id: "q1",
        content: "Apa kepanjangan dari LAW?",
        module_id: "m1",
        question_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
        options: [mockOption1q1, mockOption2q1, mockOption3q1, mockOption4q1],
    }

    const mockQuestion2: Question = {
        id: "q2",
        content: "Apa kepanjangan dari TA?",
        module_id: "m1",
        question_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
        options: [mockOption1q2, mockOption2q2, mockOption3q2, mockOption4q2],
    }

    const mockModule: Module = {
        id: 'm1',
        title: 'Sample Title',
        tryout_id: 't1',
        module_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
        questions: [mockQuestion1, mockQuestion2]
    };

    const tryoutModule = mockModule;

    const [selectedQuestion, setSelectedQuestion] = useState<number>(1);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleOptionSelection = (option: string) => {
        setSelectedOption(option);
        tryoutModule.questions[selectedQuestion-1].answered = true;
    }

    const handleQuestionSelection = (question: number) => {
        setSelectedQuestion(question);
    }

    const getOptionLetter = (order: number): string => {
        const optionLetters = ["A", "B", "C", "D"];
        return optionLetters[order];
    };

    return (
        <div className="flex flex-row w-screen sm:h-[calc(100vh-65px)] justify-center items-center p-20">
            <div className="flex justify-center basis-1/5 p-5">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-5 gap-4">
                            {
                                tryoutModule.questions.map((item) => (
                                    <Button 
                                    key={item.question_order}
                                    variant={selectedQuestion == item.question_order? "secondary" : item.answered ? "default" : "outline"}
                                    onClick={() => (handleQuestionSelection(item.question_order))}
                                    >
                                        {item.question_order}
                                    </Button>
                                ))
                            }
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Submit</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex justify-center basis-4/5 p-5">
                <Card className="flex flex-col justify-center w-full">
                <CardHeader>
                    <CardTitle>TryOut</CardTitle>
                    <CardDescription>{tryoutModule.questions[selectedQuestion - 1].content}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="w-full">
                        {
                            tryoutModule.questions[selectedQuestion - 1].options.map((item) => {
                                const optionLetter = getOptionLetter(item.option_order - 1);
                                const optionContent = item.content;
                                const buttonText = `${optionLetter}. ${optionContent}`;

                                return (
                                <Button 
                                className="w-full" size="lg"
                                variant={selectedOption == optionLetter ? "default" : "outline"}
                                onClick={() => handleOptionSelection(optionLetter)}
                                key={optionLetter}
                                >
                                    {buttonText}
                                </Button>
                                )
                            })
                        }
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
            </div>
        </div>
    );
}

export default Tryout;