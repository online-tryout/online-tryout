"use client";

import { useTheme } from "next-themes";
import { FC, useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Home: FC = () => {
  const { setTheme } = useTheme();
  const routes = useRouter();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div className="flex w-full h-[calc(100vh-66px)]">
      <div className="h-full w-full border-r">
        <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
          <div className="text-5xl font-bold">Welcome to Online Tryout</div>
          <div className="text-lg font-medium text-center">
            Prepare for Success, Excel in Every Test!
          </div>
          <div className="flex gap-4">
            <Button onClick={() => routes.push("/auth")}>
              Get Started
            </Button> 
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center w-full h-full p-8 gap-16 text-center">
        <p>
          Join thousands of high school students across Indonesia in our comprehensive online tryouts. Elevate your academic performance, master key subjects, and achieve your goals with our expertly crafted practice exams.
        </p>
        <p className="font-semibold">
          Start your journey to academic excellence today!
        </p>
      </div>
    </div>
  );
};

Home.displayName = "Home";
export default Home;
