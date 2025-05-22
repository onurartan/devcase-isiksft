"use client";

import { createContext, useContext, ReactNode } from "react";
import { useProducts } from "@/hooks/data/useProducts";

import { UseQueryResult } from "@tanstack/react-query";
import { IGetProductsResponse } from "@/services/getProducts";
import { parseAsInteger, useQueryState } from "nuqs";

type IProductQueryType = UseQueryResult<IGetProductsResponse, Error>;
type IProductContextProps = {
  page: number;
  setPage: (page: number) => void;
} & IProductQueryType;

const ProductContext = createContext<IProductContextProps | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const query = useProducts({
    page: page,
  });

  return (
    <ProductContext.Provider
      value={{
        page: page,
        setPage: setPage,
        ...query,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
