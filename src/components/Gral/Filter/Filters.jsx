import { useId, useState } from "react"
import './filters.css'
import { useFilters } from "../../../hooks/useFilters"
import { products } from "../../../mocks/products.json"
import iconArrowDown from '/src/icons/arrow-down.svg'
import { IconArrowDown } from "../../Icons/Icons"
export function Filters(){
  const minPriceFilterId = useId()
  const { filters, setFilters, resetFilters } = useFilters()
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isFilteredBy, setIsFilteredBy] = useState(false);
  
  const toggleBrandMenu = () => {
    setIsOpenBrand(!isOpenBrand);
  };
  const toggleCategoryMenu = () => {
    setIsOpenCategory(!isOpenCategory);
  };
  const toggleFilteredBy = () => {
    setIsFilteredBy(!isFilteredBy);
  };

  const productsBrand = products
    .filter((product, index) => {
      // Comparar solo la propiedad "brand" con el índice
      return products.findIndex(p => p.brand === product.brand) === index;
    })
    // ordenamos los resultados
    .sort((a, b) => a.brand.localeCompare(b.brand));
  
  // Obtener categorías únicas
  const productsCategory = products
    .filter((product, index) => {
      // Comparar solo la propiedad "subcategory" con el índice
      return products.findIndex(p => p.subcategory === product.subcategory) === index;
    })
    // ordenamos los resultados
    .sort((a, b) => a.subcategory.localeCompare(b.subcategory));

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleChangeBrand = (event) => {
    const selectedBrand = event.target.value;
    const isChecked = event.target.checked;
    setFilters(prevState => {
      let updatedBrands = [...prevState.brand]; // Copiamos el arreglo de marcas seleccionadas
      if (isChecked)
        updatedBrands.push(selectedBrand); // Agregamos la marca seleccionada al arreglo
      else 
        updatedBrands = updatedBrands.filter(brand => brand !== selectedBrand); // Quitamos la marca si ya estaba seleccionada
      
      return {
        ...prevState,
        brand: updatedBrands
      };
    });
  };
  
  const handleChangeSubcategory = (event) => {
    const selectedSubcategory = event.target.value;
    const isChecked = event.target.checked;
    
    setFilters(prevState => {
      let updatedSubcategories = [...prevState.subcategory]; // Copiamos el arreglo de subcategorías seleccionadas
      if (isChecked) 
        updatedSubcategories.push(selectedSubcategory); // Agregamos la subcategoría seleccionada al arreglo
      else 
        updatedSubcategories = updatedSubcategories.filter(subcategory => subcategory !== selectedSubcategory); // Quitamos la subcategoría si ya estaba seleccionada
      
      return {
        ...prevState,
        subcategory: updatedSubcategories
      };
    });
  };
  const filteredBy = (type) => {
    const filteredBy = type;
    return (
    <>
    {filteredBy.map(item => (
      <li className="filtered-by">{item}</li>
    ))}
    </>
    )
  }
  return (
    <section className="filters-section">
      <section className="filters-header">
        <h2 className="filters-title">Filtrar por <span className="icon-filters"><IconArrowDown /></span></h2>
      </section>
      <section className="filters-content">
        <div className="filters-types">
          <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
          <input
            type="range"
            id={minPriceFilterId}
            min='0'
            max='10000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
        <div className="filters-types">
          <button 
            onClick={() => toggleBrandMenu()}
            className="filters-btn"
          >
            Marca
            <img src={iconArrowDown} alt="" />
          </button>
            {isOpenBrand && (
              <ul className="list-filters">
                {productsBrand.map(p => (
                  <li key={p.id} className="brand-list">
                    <input
                      type="checkbox"
                      id={p.brand}
                      name={p.brand}
                      value={p.brand}
                      checked={filters.brand.includes(p.brand)}
                      onChange={handleChangeBrand}
                    />
                    <label htmlFor={p.brand}>
                      {p.brand}  
                    </label>
                  </li>
                ))}
              </ul>
            )}
        </div>
        <div className="filters-types">
          <button
            onClick={() => toggleCategoryMenu()}
            className="filters-btn"
          >
            Categoría
            <img src={iconArrowDown} alt="" />
          </button>
          {isOpenCategory && (
            <ul className="list-filters">
              {productsCategory.map(p => (
                <li key={p.id} className="subcategory-list">
                  <input
                    type="checkbox"
                    id={p.subcategory}
                    name={p.subcategory}
                    value={p.subcategory}
                    checked={filters.subcategory.includes(p.subcategory)}
                    onChange={handleChangeSubcategory}
                  />
                  <label htmlFor={p.subcategory}>
                  {p.subcategory}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
        {filters.minPrice > 0 ||
        filters.brand.length > 0 ||
        filters.subcategory.length > 0 ? (
          <>
          <div className="filters-types">
          <button
            onClick={() => toggleFilteredBy()}
            className="filters-btn btn-filtered-by"
          >
            <article className="filters-btn">
              Filtrado por:
              <img src={iconArrowDown} alt="" />
            </article>
            {isFilteredBy && (
              <>
              {filters.minPrice > 0 ? 
              <aside className="filtered-by-type">
                <h3> Precio: </h3>
                <span className="filtered-by">
                  $ {filters.minPrice}
                </span>
              </aside> : '' }
              {filters.brand.length > 0 ?
              <aside className="filtered-by-type">
                <h3> Marca: </h3>
                <ul className="list-filtered-by">
                  {filteredBy(filters.brand)}
                </ul>
              </aside> : '' }
              
              {filters.subcategory.length > 0 ?
              <aside className="filtered-by-type">
                <h3> Categoría: </h3>
                <ul className="list-filtered-by">
                  {filteredBy(filters.subcategory)}
                </ul>
              </aside> : '' }
              </>
            )}
          </button>
          <section className="filters-footer">
          <button
            className="filters-btn-delete"
            onClick={() => setFilters(resetFilters)}
          >Borrar</button>
          </section>
        </div>
          </>
        ) : ''}
      </section>
    </section>
  )
}