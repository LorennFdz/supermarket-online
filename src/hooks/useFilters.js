import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters () {
  const { filters, setFilters, resetFilters} = useContext(FiltersContext)
  const filterProducts = (products) => {
    return products.filter(product => {
      const brandFilter = filters.brand;
      const subcategoryFilter = filters.subcategory;
  
      // Verificar si no se ha seleccionado ninguna marca o subcategoría
      if (brandFilter.length === 0 && subcategoryFilter.length === 0 && filters.minPrice === 0) {
        return true; // Mostrar todos los productos si no se ha seleccionado ninguna marca ni subcategoría
      } else {
        return product.price >= filters.minPrice &&
          ((brandFilter.length === 0 || brandFilter.includes('all') || brandFilter.includes(product.brand)) &&
          (subcategoryFilter.length === 0 || subcategoryFilter.includes('all') || subcategoryFilter.includes(product.subcategory)));
      }
    });
  };

  return { filters, filterProducts, setFilters, resetFilters }
}