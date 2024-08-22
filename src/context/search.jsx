import { createContext, useState } from "react";
import { products } from '/src/mocks/products.json'

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const { search } = Object.fromEntries(new window.FormData(event.target))
    setSearch(search);
  }
  const handleResetSearch = () => {
    setSearch('');
  };
  const handleInputChange = (event) => {
    setSearch(event.target.value.toLowerCase()); // Convierte a minúsculas para búsqueda insensible a mayúsculas-minúsculas
  }; 
  const searchProducts = !search ? [] : products.filter((prod) => {
    return prod.title.toLowerCase().includes(search.toLowerCase())
  })

  return <SearchContext.Provider value={{
      search,
      handleSubmit,
      setSearch,
      handleInputChange,
      handleResetSearch,
      searchProducts
    }}
  >
  { children }

  </SearchContext.Provider>
}