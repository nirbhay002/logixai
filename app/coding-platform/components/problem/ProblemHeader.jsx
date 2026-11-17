"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/app/coding-platform/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/coding-platform/components/ui/select";
import ThemeToggle from "@/app/coding-platform/components/ThemeToggle";
import { setLanguage } from "@/app/coding-platform/store/problemSlice";
import {
  runCode,
  submitCode,
} from "@/app/coding-platform/store/runOutputSlice";
import toast from "react-hot-toast";
import { Home } from "lucide-react";
import Link from "next/link";

export default function ProblemHeader({ problemId }) {
  const dispatch = useDispatch();
  const problem = useSelector((state) => state.problem.data);
  const language = useSelector((state) => state.problem.language);
  const userCode = useSelector((state) => state.problem.userCode);
  const isRunning = useSelector((state) => state.runOutput.isRunning);
  const isSubmitting = useSelector((state) => state.runOutput.isSubmitting);
  const runOutput = useSelector((state) => state.runOutput.data);

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  const handleRun = () => {
    console.log("Running code with language:", language, userCode);
    dispatch(runCode({ id: problemId, userCode, language }));
  };

  // const handleSubmit = () => {
  //   dispatch(submitCode({ id: problemId, userCode, language }));
  // };

  const handleSubmit = async () => {
    try {
      const result = await dispatch(
        submitCode({ id: problemId, userCode, language }),
      ).unwrap();

      console.log("Submission result:", runOutput);

      // Assume runOutput.response is an array of test case results
      if (runOutput?.response) {
        const allPassed = runOutput.response.every(
          (tc) => tc.status === "SUCCESS",
        );
        const anyError = runOutput.response.some((tc) => tc.status === "ERROR");

        if (anyError) {
          toast.error("There is an error in your code.", {
            position: "bottom-right",
          });
        } else if (allPassed) {
          toast.success("Code submitted successfully! All test cases passed.", {
            position: "bottom-right",
          });
        } else {
          toast("Some test cases are not passed.", {
            position: "bottom-right",
          });
        }
      } else {
        toast.error("Unexpected response from server.", {
          position: "bottom-right",
        });
      }
    } catch (err) {
      toast.error("Submission failed. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <header className="h-14 border-b border-border flex items-center px-4 gap-4 bg-background/80 backdrop-blur sticky top-0 z-20">
      <Link
        href="/problems"
        className="flex items-center justify-center h-8 w-8 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
        title="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      <h1 className="font-medium text-sm truncate flex-1">
        {problem?.title || "Problem"}
      </h1>
      <div className="flex items-center gap-2 mx-auto">
        <Button
          size="sm"
          variant="secondary"
          disabled={isRunning}
          onClick={handleRun}
        >
          {isRunning ? "Running..." : "Run"}
        </Button>
        <Button
          size="sm"
          variant="default"
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Select value={language} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-28 h-8 text-xs">
            <SelectValue placeholder="Lang" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="JAVA">JAVA</SelectItem>
            <SelectItem value="CPP">CPP</SelectItem>
            <SelectItem value="PYTHON">PYTHON</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ThemeToggle />
    </header>
  );
}
