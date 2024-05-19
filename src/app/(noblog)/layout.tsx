import { Layout } from "@/components/layouts/Layout";
import { ThemeProvider } from "@/libs/next-themes/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "noblog",
  description: "Notion と Next.js の Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}
