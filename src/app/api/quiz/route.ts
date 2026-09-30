import { NextRequest } from "next/server";
import { quizQuestions, getRoutineIdFromAnswers } from "@/data/quiz";
import { routineStacks } from "@/data/routine";
import { products } from "@/data/products";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const answers: Record<string, string> = body.answers || {};

    // Validate that all quiz question ids are present
    const questionIds = quizQuestions.map((q) => q.id);
    for (const id of questionIds) {
      if (!answers[id]) {
        return Response.json(
          { error: `Missing answer for question: ${id}` },
          { status: 400 }
        );
      }
    }

    const routineId = getRoutineIdFromAnswers(answers);
    const stack = routineStacks.find((s) => s.id === routineId) || routineStacks[0];

    // Build routine with product details
    const amSteps = stack.steps
      .filter((s) => s.time === "AM" || s.time === "AM+PM")
      .sort((a, b) => a.order - b.order)
      .map((step) => {
        const product = products.find((p) => p.id === step.productId);
        return {
          step: step.step,
          order: step.order,
          note: step.note,
          product: product
            ? {
                id: product.id,
                name: product.name,
                price: product.sizes[0].price,
                category: product.category,
              }
            : null,
        };
      });

    const pmSteps = stack.steps
      .filter((s) => s.time === "PM" || s.time === "AM+PM")
      .sort((a, b) => a.order - b.order)
      .map((step) => {
        const product = products.find((p) => p.id === step.productId);
        return {
          step: step.step,
          order: step.order,
          note: step.note,
          product: product
            ? {
                id: product.id,
                name: product.name,
                price: product.sizes[0].price,
                category: product.category,
              }
            : null,
        };
      });

    return Response.json({
      routine: {
        id: stack.id,
        name: stack.name,
        description: stack.description,
        am: amSteps,
        pm: pmSteps,
      },
    });
  } catch (error) {
    return Response.json(
      { error: "Invalid request body. Expected JSON with 'answers' object." },
      { status: 400 }
    );
  }
}