import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VOX AI - All In One AI Tool",
  description: "Vox all in one AI platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#6666D4",
          colorBackground: "#252433",
          colorText: "white",
          colorInputBackground: "#3D3C54",
          colorInputText: "white",
          fontSize: "18px",
        },
      }}
    >
      <html lang="en">
      <body className={cn("bg-[#14131C]", dmSans.className)}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
