import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function ReservasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 