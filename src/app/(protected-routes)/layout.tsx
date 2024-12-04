import Header from "@/components/layout/header";

export default function PageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
}
