import { Navbar } from "../Gral/Navbar/Navbar.jsx"
import { Product } from "../Gral/Product/Product.jsx"
import { Filters } from "../Gral/Filter/Filters.jsx";
import { useFilters } from "../../hooks/useFilters.js";
import './home.css'
import { Footer } from "../Gral/Footer/Footer.jsx";
import { BannerHome } from "../Gral/Banners/Banners.jsx";
import { Breadcrumbs } from "../Gral/Breadcrumbs/Breadcrumbs.jsx";
import { usePagination } from "../../hooks/usePagination.js";
import { useState, useEffect, useRef } from "react"
import { SortSelect } from "../Gral/Sort/SortSelect.jsx"
import { useSort } from "../../hooks/useSort.js"
import { useSearch } from "../../hooks/useSearch.js"
import { QuantityProducts } from "../Gral/QuantityProducts/QuantityProducts";
import { IconClose, IconFilters, IconOrderBy } from "../Icons/Icons.jsx";

export function Home(){
  const { loading, error, products, setCurrentPage } = usePagination();
  const innerWidth = window.innerWidth;
  const [newProducts, setNewProducts] = useState({
    filteredProducts: loading ? [] : products
  })
  const { filters, filterProducts } = useFilters()
  const { search, searchProducts } = useSearch();
  const [orderBy, setOrderBy] = useState('');
  const [openOrderBy, setOpenOrderBy] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const handleSortChange = (event) => {
    const orderBy = event.target;
    setOrderBy(orderBy.getAttribute('value'));
  }
  const handleOrderBy = () => {
    if(openFilters)
      setOpenFilters(!openFilters)
    setOpenOrderBy(!openOrderBy);
  }
  const handleFilters = () => {
    if(openOrderBy)
      setOpenOrderBy(!openOrderBy)
    setOpenFilters(!openFilters);
  }
  useEffect(() => {
    const filterPrueba = searchProducts.length > 0 ? filterProducts(searchProducts) : filterProducts(products)
    // Si la variable filterPrueba es falsa o vacía(!filterPrueba):
    // Significa que no hay resultados de búsqueda o que se produjo un error al filtrar.
    // En este caso, se mantienen los productos originales filtrados (esta linea + 12)

    // Si la variable filterPrueba es verdadera (filterPrueba):
    // Significa que hay resultados de búsqueda o filtrado.
    // Se ordenan los productos de la variable filterPrueba usando useSort(filterPrueba, orderBy).
    // Luego, se realiza un filtrado adicional sobre los productos ordenados (filterProducts(useSort(filterPrueba, orderBy))).
    // Esto permite aplicar filtros a los productos después de la ordenación.
    setNewProducts((prevState) => ({
      ...prevState,      
      filteredProducts: !filterPrueba ? filterProducts(products) : filterProducts(useSort(filterPrueba, orderBy)),
    }))
    setCurrentPage(1);
  }, [loading, filters, search, orderBy])
  return (
    <>
    <Navbar />
    <BannerHome />
    <Breadcrumbs text="Inicio" />
    <main className="container-home">
      {/*products.length > 0 &&
      <>
        <section>
          <section className="orderby-filters-mobile">
            <article onClick={handleOrderBy} className="article-orderby-mobile">
              <button className="btn-order-by-mobile">
                <IconOrderBy />
                ORDENAR {openOrderBy ? <IconClose /> : '' }
              </button>
            </article>
            <article onClick={handleFilters} className="article-filters-mobile">
              <button className="btn-filters-mobile">
                <IconFilters />
                FILTRAR {openFilters ? <IconClose /> : '' }
              </button>
            </article>
          </section>
          {openOrderBy && (
            <section className="list-order-by-mobile">
              <SortSelect handleSortChange={handleSortChange} itemSelected={orderBy}/>
            </section>
          )}
          {openFilters && (
            <section className="filters-mobile">
              <Filters />
            </section>
          )}
        </section>
        <section className="products-home">
          <section className="header-products-home">
            <QuantityProducts array={newProducts.filteredProducts} text="productos" /> 
          </section>
          <Product products={newProducts}/>
        </section>*/}
        {/*<section className="filters-home">
          <Filters />
          <article className="publicity-home">
            <figure>
              <img src="../src/img/gral/publicity-home.jpg" alt="" />
            </figure>
            <figure>
              <img src="../src/img/gral/publicity-home-2.webp" alt="" />
            </figure>
          </article>
        </section>
        <section className="products-home">
          <section className="header-products-home">
            <QuantityProducts array={newProducts.filteredProducts} text="productos" /> 
            <SortSelect handleSortChange={handleSortChange} />
          </section>
          <Product products={newProducts}/>
        </section>*/}
      {products.length > 0 && innerWidth < 1023 ?
      <>
      <section>
          <section className="orderby-filters-mobile">
            <article onClick={handleOrderBy} className="article-orderby-mobile">
              <button className="btn-order-by-mobile">
                <IconOrderBy />
                ORDENAR {openOrderBy ? <IconClose /> : '' }
              </button>
            </article>
            <article onClick={handleFilters} className="article-filters-mobile">
              <button className="btn-filters-mobile">
                <IconFilters />
                FILTRAR {openFilters ? <IconClose /> : '' }
              </button>
            </article>
          </section>
          {openOrderBy && (
            <section className="list-order-by-mobile">
              <SortSelect handleSortChange={handleSortChange} itemSelected={orderBy}/>
            </section>
          )}
          {openFilters && (
            <section className="filters-mobile">
              <Filters />
            </section>
          )}
        </section>
        <section className="products-home">
          <section className="header-products-home">
            <QuantityProducts array={newProducts.filteredProducts} text="productos" /> 
          </section>
          <Product products={newProducts}/>
        </section>
      </>
      :
      <>
      <section className="filters-home">
        <Filters />
        <article className="publicity-home">
          <figure>
            <img src="../src/img/gral/publicity-home.jpg" alt="" />
          </figure>
          <figure>
            <img src="../src/img/gral/publicity-home-2.webp" alt="" />
          </figure>
        </article>
      </section>
      <section className="products-home">
        <section className="header-products-home">
          <QuantityProducts array={newProducts.filteredProducts} text="productos" /> 
          <SortSelect handleSortChange={handleSortChange} itemSelected={orderBy}/>
        </section>
        <Product products={newProducts}/>
      </section>
      </>}
      {loading && <p className="loading-text">Cargando...</p>}

      { error && <p className="loading-text">¡Ha habido un error, por favor intente más tarde!</p>}

      {!loading && !error && products.length === 0 && <p className="loading-text">No hay productos que mostrar</p>}
    </main>
    <Footer />
    </>
  )
}
//

//
//////


































/////
/////////
/////






























































///


//
//
/////

//

//
///
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 



const [newProducts, setNewProducts] = useState({
    searchProducts: [],
    filteredProducts: loading ? [] : products,
    sortedProducts: []
  })
  const { filters, filterProducts } = useFilters()
  const { search, searchProducts } = useSearch();
  const [orderBy, setOrderBy] = useState('');
  const handleSortChange = (event) => {
    const orderBy = event.target.value;
    setOrderBy(orderBy);
  }
  useEffect(() => {
    const filterPrueba = searchProducts.length > 0 ? filterProducts(searchProducts) : filterProducts(products)
    // Si la variable filterPrueba es falsa o vacía(!filterPrueba):
    // Significa que no hay resultados de búsqueda o que se produjo un error al filtrar.
    // En este caso, se mantienen los productos originales filtrados (esta linea + 12)

    // Si la variable filterPrueba es verdadera (filterPrueba):
    // Significa que hay resultados de búsqueda o filtrado.
    // Se ordenan los productos de la variable filterPrueba usando useSort(filterPrueba, orderBy).
    // Luego, se realiza un filtrado adicional sobre los productos ordenados (filterProducts(useSort(filterPrueba, orderBy))).
    // Esto permite aplicar filtros a los productos después de la ordenación.
    setNewProducts((prevState) => ({
      ...prevState,
      searchProducts: searchProducts,
      sortedProducts: useSort(filterPrueba, orderBy),
      
      filteredProducts: !filterPrueba ? filterProducts(products) : filterProducts(useSort(filterPrueba, orderBy)),
    }))







 */