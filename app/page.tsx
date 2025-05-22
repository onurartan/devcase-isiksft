import { DashboardLayout } from "@/components/dashboard-layout";
import { ProductDashboard } from "@/components/product-dashboard";

export default function Home() {
  return (
    <DashboardLayout>
      <ProductDashboard />
    </DashboardLayout>
  );
}
