import { DATA } from "@/data/chinese";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: `${DATA.name}｜中文履歷` },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}｜中文履歷`,
    description: DATA.description,
    url: `${DATA.url}/chinese`,
    siteName: DATA.name,
    locale: "zh_TW",
    type: "profile",
  },
};

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
