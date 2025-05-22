"use client"

import { useState, useEffect, useRef } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useProductContext } from "@/context/ProductContext";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Product } from "./product";
import isEqual from "lodash.isequal";

export function ProductTable() {
  const { data, isLoading, isFetching, isError } = useProductContext();
  const products = data?.products || [];

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  function handleSelect(id: number, selected: CheckedState) {
    setSelectedIds((prev) =>
      selected ? [...prev, id] : prev.filter((item) => item !== id)
    );
  }

  function handleSelectAll(checked: CheckedState) {
    if (checked) {
      setSelectedIds(products.map((p) => p.id));
    } else {
      setSelectedIds([]);
    }
  }

  const allSelected =
    products.length > 0 && selectedIds.length === products.length;

  const prevProductsRef = useRef<typeof products>([]);

  useEffect(() => {
    if (!isEqual(prevProductsRef.current, products)) {
      setSelectedIds([]);
      prevProductsRef.current = products;
    }
  }, [products]);

  return (
    <div className=" overflow-auto w-full" style={{ maxHeight: 900 }}>
      <table className="w-full  ">
        <thead>
          <tr className="text-left w-full text-sm text-[var(--gray-3)] bg-white  sticky top-0 z-10">
            <th className="p-3 font-semibold  w-[30%]">
              <div className="flex items-center">
                <Checkbox
                  id="select-all"
                  checked={allSelected}
                  onCheckedChange={(e) => handleSelectAll(e)}
                />
                <label htmlFor="select-all" className="ml-2 cursor-pointer">
                  Product
                </label>
              </div>
            </th>
            <th className="p-3 font-semibold w-[15%] whitespace-nowrap">
              Transaction ID
            </th>
            <th className="p-3 font-semibold  lg:table-cell w-[20%] whitespace-nowrap">
              Date
            </th>
            <th className="p-3 font-semibold  lg:table-cell w-[15%] whitespace-nowrap">
              Amount
            </th>
            <th className="p-3 font-semibold bg-conic-270 lg:table-cell w-[10%] whitespace-nowrap">
              Status
            </th>
            <th className="p-3 font-semibold  w-[10%]"></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {isLoading && (
            <tr>
              <td
                colSpan={6}
                className="p-6 text-center h-[600px] text-gray-500"
              >
                Loading data, please wait...
              </td>
            </tr>
          )}

          {!isLoading && isError && (
            <tr>
              <td
                colSpan={6}
                className="p-6 text-center h-[600px] text-red-600 font-semibold"
              >
                Error loading products. Please try again later.
              </td>
            </tr>
          )}

          {!isLoading && data?.success == false && (
            <tr>
              <td
                colSpan={6}
                className="p-6 text-center h-[600px] text-red-600 font-semibold"
              >
                Error loading products. Please try again later.
              </td>
            </tr>
          )}

          {!isLoading && data?.success != false && products.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="p-6 text-center h-[600px] text-gray-500"
              >
                No products found.
              </td>
            </tr>
          )}

          {!isLoading &&
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                isSelected={selectedIds.includes(product.id)}
                onSelect={handleSelect}
              />
            ))}

          {isFetching && !isLoading && (
            <tr>
              <td
                colSpan={6}
                className="p-4 text-center text-sm text-gray-500 italic"
              >
                Loading more products...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
