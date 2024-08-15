import { useEffect, useState } from "react";
import productsData from '/src/mocks/products.json'

export function usePagination() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  console.log(productsData);
  useEffect(() => {
    setLoading(true);
    setError(null);
    setProducts([...productsData.products]);
  }, [currentPage])

  return { loading, error, products, currentPage, setCurrentPage}
}

/*

const API = helpHttp();
  const url = 'http://localhost:5000/products';
  useEffect(() => {
    setLoading(true)
    setError(null)
    API.get(url)
    .then((res) => {
      if(!res.err){
      setProducts(res);
    }
    else {
      setProducts(null);
    }
    })
  }, [currentPage])

*/