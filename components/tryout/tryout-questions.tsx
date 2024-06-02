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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const TryoutQuestions = () => {

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Questions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-5 gap-4">
                    <Button variant="outline">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">4</Button>
                    <Button variant="outline">5</Button>
                    <Button variant="outline">6</Button>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Submit</Button>
            </CardFooter>
        </Card>
    )
}