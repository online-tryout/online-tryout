"use client";

import { TryoutCard } from "./tryout-card";
import { TryoutQuestions } from "./tryout-questions"

const Tryout = () => {
    // const mockData = {
    //     ""
    // };
    return (
        <div className="flex flex-row w-screen sm:h-[calc(100vh-65px)] justify-center items-center p-20">
            <div className="flex justify-center basis-1/5 p-5">
                <TryoutQuestions />
            </div>
            <div className="flex justify-center basis-4/5 p-5">
                <TryoutCard />
            </div>
        </div>
    );
}

export default Tryout;