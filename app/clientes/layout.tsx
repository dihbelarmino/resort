import { DashboardLayout as DashboardLayoutComponent } from "@/components/layout/DashboardLayout";

export default function ClientesLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
} 