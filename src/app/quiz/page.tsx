"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = quizQuestions[current];
  const isLast = current === quizQuestions.length - 1;
  const progress = ((current + 1) / quizQuestions.length) * 100;

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));

    if (isLast) {
      handleSubmit({ ...answers, [question.id]: value });
    } else {
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
      }, 250);
    }
  };

  const handleSubmit = (finalAnswers: Record<string, string>) => {
    setIsSubmitting(true);
    const params = new URLSearchParams(finalAnswers).toString();
    router.push(`/quiz/results?${params}`);
  };

  const handleBack = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Header */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
            Skin Quiz
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-5xl">
            Find your
            <span className="block text-primary">perfect routine.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Six quick questions. We&apos;ll match you with a clinically sequenced
            stack based on your answers.
          </p>
        </div>
      </section>

      {/* Progress bar */}
      <div className="mx-auto w-full max-w-xl px-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">
            Question {current + 1} of {quizQuestions.length}
          </span>
          <span className="text-xs text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground lg:text-3xl">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left rounded-2xl border p-4 transition-all ${
                  answers[question.id] === option.value
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border/40 bg-card hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <span className="text-sm font-medium text-foreground">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={current === 0}
              className="text-sm"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back
            </Button>
            {answers[question.id] && !isLast && (
              <Button
                variant="ghost"
                onClick={() => setCurrent((prev) => prev + 1)}
                className="text-sm"
              >
                Skip
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Trust footer */}
      <div className="px-6 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          <Sparkles className="inline h-3 w-3 mr-1" />
          Your answers are not stored. This quiz is for educational
          recommendations only.
        </p>
      </div>
    </div>
  );
}