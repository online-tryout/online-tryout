"use client";

import { Module } from "@/models/module";
import { Option } from "@/models/option";
import { Question } from "@/models/question";
import { useEffect, useState } from "react";
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
import { fetchModule } from "@/app/tryout/[id]/[moduleId]/action";
import LoadingState from "@/components/common/loading-state";
import { useParams } from 'next/navigation'

interface moduleDataProps {
    data: {
        id: string,
        moduleId: string
    }
}

const Tryout= () => {
    const emptyModule: Module = {
        id: '',
        title: '',
        tryout_id: '',
        module_order: 0,
        created_at: new Date(),
        updated_at: new Date(),
        questions: [], // or just questions: []
    };

    const [tryoutModule, setTryoutModule] = useState<Module>(emptyModule);
    const [selectedQuestion, setSelectedQuestion] = useState<number>(1);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const params = useParams<{ id: string, moduleId: string }>();

    useEffect(() => {
        const handleFetchModule = async() => {
            const fetchedModule = await fetchModule(params.id, params.moduleId);
            setTryoutModule(fetchedModule);
            setIsLoading(false);
        }
        handleFetchModule();
    }, []);

    const handleOptionSelection = (option: string) => {
        setSelectedOption(option);
        tryoutModule.questions[selectedQuestion-1].answer = option;
    }

    const handleQuestionSelection = (question: number) => {
        setSelectedQuestion(question);
        setSelectedOption(tryoutModule.questions[question-1].answer ?? "");
    }

    const handlePreviousQuestion = () => {
        setSelectedQuestion(selectedQuestion - 1);
        setSelectedOption(tryoutModule.questions[selectedQuestion - 2].answer ?? "")
    }
    
    const handleNextQuestion = () => {
        setSelectedQuestion(selectedQuestion + 1);
        setSelectedOption(tryoutModule.questions[selectedQuestion].answer ?? "")
    }

    const handleSubmission = () => {
        console.log(tryoutModule)
    }

    const getOptionLetter = (order: number): string => {
        const optionLetters = ["A", "B", "C", "D", "E"];
        return optionLetters[order];
    };

    if (isLoading) {
        return <LoadingState/>;
    }

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
                                    variant={selectedQuestion == item.question_order? "secondary" : item.answer ? "default" : "outline"}
                                    onClick={() => (handleQuestionSelection(item.question_order))}
                                    >
                                        {item.question_order}
                                    </Button>
                                ))
                            }
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                        onClick={() => handleSubmission()}
                        >Submit</Button>
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
                    {
                        selectedQuestion == 1? (
                            <div className="col-start-1 col-end-3">
                            </div>
                        ) : (
                            <div className="col-start-1 col-end-3">
                                <Button 
                                className="w-full" size="lg"
                                onClick={() => handlePreviousQuestion()}
                                >
                                    Previous
                                </Button>
                            </div>
                        )
                    }
                    
                    {
                        selectedQuestion == tryoutModule.questions.length? (
                            <div className="col-end-7 col-span-2">
                            </div>
                        ) : (
                            <div className="col-end-7 col-span-2">
                                <Button 
                                className="w-full" size="lg"
                                onClick={() => handleNextQuestion()}
                                >
                                    Next
                                </Button>
                            </div>
                        )
                    }
                </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Tryout;