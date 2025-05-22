import { getProducts, IGetProductsResponse } from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";

export const useProducts = ({ page = 1 }: { page?: number }) => {
  return useQuery<IGetProductsResponse, Error>({
    queryKey: ["products", page],
    queryFn: () => {
      return getProducts(page);
    },
  });
};
