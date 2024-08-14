import { createContext, useState } from "react";

// 1. Crear el Contexto
export const FiltersContext = createContext();

// 2. Crear el Provider, para proveer el contexto
export function FiltersProvider({ children }){
  const resetFilters = () => {
    return ({
      minPrice: 0,
      brand: [],
      subcategory: []
    })
  }

  const [filters, setFilters] = useState(resetFilters())
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      resetFilters
    }}
    >
      { children }
    </FiltersContext.Provider>
  )
}