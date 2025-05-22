import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ProductProvider } from "@/context/ProductContext";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const cario_font = Cairo({
  style: "normal",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Master POS",
  description: "Master POS ile ödemelerinizi yonetmek artık daha kolay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cario_font.className} antialiased`}>
        <ReactQueryProvider>
          <NuqsAdapter>
            <ProductProvider>{children}</ProductProvider>
          </NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
