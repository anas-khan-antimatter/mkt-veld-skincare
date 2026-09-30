import { NextRequest } from "next/server";
import { routineStacks, skinConcerns } from "@/data/routine";
import { products } from "@/data/products";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const concerns: string[] = body.concerns || [];

    if (concerns.length === 0) {
      return Response.json(
        { error: "Provide at least one skin concern id." },
        { status: 400 }
      );
    }

    // Find matching stacks
    const matched = routineStacks
      .map((stack) => ({
        stack: {
          id: stack.id,
          name: stack.name,
          description: stack.description,
        },
        matchCount: stack.concerns.filter((c) => concerns.includes(c)).length,
        steps: stack.steps,
      }))
      .filter((m) => m.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);

    if (matched.length === 0) {
      return Response.json({
        routines: [],
        message: "No routines match these concerns. Try different concerns.",
      });
    }

    // Return top 3
    const top = matched.slice(0, 3).map((m) => ({
      ...m.stack,
      steps: m.steps.map((step) => {
        const product = products.find((p) => p.id === step.productId);
        return {
          step: step.step,
          time: step.time,
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
      }),
    }));

    return Response.json({ routines: top });
  } catch (error) {
    return Response.json(
      { error: "Invalid request body. Expected JSON with 'concerns' array." },
      { status: 400 }
    );
  }
}

export async function GET() {
  // Return available concerns for reference
  return Response.json({
    concerns: skinConcerns.map((c) => ({ id: c.id, label: c.label })),
  });
}