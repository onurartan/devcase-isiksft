import {
  BarChart3,
  Calendar,
  LayoutGrid,
  LogOut,
  Mail,
  MessageSquare,
  Package,
  Percent,
  RefreshCw,
  Settings,
  ShoppingBag,
  ShoppingCart,
  PlusCircle,
  Tag,
  Verified,
  ScanBarcodeIcon,
  FileUp,
} from "lucide-react";

const mainMenuItems = [
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    label: "Dashboard",
    href: "#/dashboard",
  },
  {
    icon: <Package className="w-5 h-5" />,
    label: "Products",
    href: "/",
    active: true,
    subItems: [
      {
        icon: <Package className="w-4 h-4 mr-2" />,
        label: "All Products",
        href: "/",
      },
      {
        icon: <PlusCircle className="w-4 h-4 mr-2" />,
        label: "Add New Product",
        href: "#/add-product",
      },
      {
        icon: <Tag className="w-4 h-4 mr-2" />,
        label: "Tags",
        href: "#/tags",
      },
    ],
  },
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    label: "Categories",
    href: "#/categories",
  },
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    label: "Sub Category",
    href: "#/sub-category",
  },
  {
    icon: <Verified className="w-5 h-5" />,
    label: "Brands",
    href: "#/brands",
  },
  {
    icon: <ScanBarcodeIcon className="w-5 h-5" />,
    label: "Scan Barcode",
    href: "#/scan-barcode",
  },
  {
    icon: <FileUp className="w-5 h-5" />,
    label: "Import Products",
    href: "#/import-products",
  },
];

const analyticsItems = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    label: "Sales",
    href: "#/sales",
    badge: "49",
  },
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    label: "Point of Sales",
    href: "/point-of-sales",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    label: "Leaderboards",
    href: "#/leaderboards",
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    label: "Orders",
    href: "#/orders",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    label: "Refund",
    href: "#/refund",
  },
  {
    icon: <Percent className="w-5 h-5" />,
    label: "Taxes",
    href: "#/taxes",
  },
  {
    icon: <Package className="w-5 h-5" />,
    label: "Stock",
    href: "#/stock",
  },
];

const appsItems = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Chat",
    href: "#/chat",
    badge: "80",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    label: "Calendar",
    href: "#/calendar",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "#/email",
  },
];

const settingsItems = [
  {
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
    href: "#/settings",
  },
  {
    icon: <LogOut className="w-5 h-5" />,
    label: "Log Out",
    href: "#/logout",
  },
];

const statsCards = [
  {
    title: "Active Products",
    value: "247,384",
    change: "+15%",
    isPositive: true,
  },
  {
    title: "New Products",
    value: "+2,368",
    change: "+2%",
    isPositive: true,
  },
  {
    title: "Completed Order",
    value: "33,847",
    change: "-4.5%",
    isPositive: false,
  },
  {
    title: "Pending Payment",
    value: "1,284",
    change: "+5%",
    isPositive: true,
  },
  {
    title: "Canceled Order",
    value: "836",
    change: "-2%",
    isPositive: false,
  },
];

export { mainMenuItems, analyticsItems, appsItems, settingsItems, statsCards };
