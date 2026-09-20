import type { Metadata } from "next";
import { Editor } from "@/components/Editor";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <Editor />;
}
