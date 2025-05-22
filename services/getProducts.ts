import { Product, ProductResponse } from "@/types";
import { apiClient } from "@/utils/axiosClients";

export interface IGetProductsResponse {
  success: boolean;
  totalPages?: number;
  totalItems?: number;
  currentPage?: number;
  products: Product[];
  errorCode?: string;
  errorMessage?: string;
}

export const getProducts = async (
  page: number = 1
): Promise<IGetProductsResponse> => {
  try {
    const response = await apiClient.get(`/products?page=${page}`);

    const data: ProductResponse = response.data;

    return {
      success: true,
      totalPages: data.totalPages ?? 0,
      totalItems: data.totalItems ?? 0,
      currentPage: data.currentPage ?? page,
      products: data.data ?? [],
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      products: [],
      errorCode: "unknown_error",
      errorMessage: "an unknown error occurred while fetching products",

      totalPages: 0,
      totalItems: 0,
      currentPage: page,
    };
  }
};
