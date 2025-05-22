import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export interface Product {
  id: number;
  name: string;
  price: number;
  productCode: string;
  barcode: string;
  stock: number;
  status: boolean;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ProductResponse {
  message: string;
  status: "success" | "error";
  currentPage: number;
  totalPages: number;
  totalItems: number;
  data: Product[];
}
