import { useEffect, useState } from "react";

export function usePagination() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch('/src/mocks/products.json')
    .then(async res => {
      if(!res.ok) throw new Error("Error en la carga de productos")
      return await res.json()
    })
    .then(res => {
      setProducts(res.products)
    })
    .catch(err => {
      setError(err)
      console.error(err)
    })
    .finally(() =>{
      setLoading(false)
    })
  }, [currentPage])

  return { loading, error, products, currentPage, setCurrentPage}
}