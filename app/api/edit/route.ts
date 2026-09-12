import { NextResponse } from "next/server";

type EditRequest = { prompt?: unknown; image?: unknown };

export async function POST(request: Request) {
  const body = (await request.json()) as EditRequest;
  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  const image = typeof body.image === "string" ? body.image : "";

  if (!prompt || !image) {
    return NextResponse.json({ error: "An image and edit instruction are required." }, { status: 400 });
  }

  if (!process.env.BFL_API_KEY) {
    return NextResponse.json({ error: "Image editing is not configured yet." }, { status: 503 });
  }

  // Add a verified BFL Kontext provider adapter here after configuring BFL_API_KEY.
  // Keeping the vendor request contract server-side prevents exposing API keys in the browser.
  return NextResponse.json({ error: "The image provider adapter has not been configured." }, { status: 501 });
}
