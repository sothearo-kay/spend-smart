import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spend Smart",
  description: "Budgeting made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="container py-12">{children}</main>
      </body>
    </html>
  );
}
