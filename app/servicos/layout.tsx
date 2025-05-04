import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function ServicosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 