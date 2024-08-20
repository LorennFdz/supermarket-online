import { IconArrowDown } from '../../Icons/Icons';
import './sortSelect.css'
import { useState } from 'react';
export function SortSelect({ handleSortChange, itemSelected }) {
  const [openSort, setOpenSort] = useState(false);
  const innerWidth = window.innerWidth;
  const handleSort = () => {
    setOpenSort(!openSort);
  }

  return (
    <section className="order-by">
      <strong className="text-order-by" onClick={handleSort}>Ordenar por <span className='icon-sort'><IconArrowDown/></span></strong>
        {openSort || innerWidth < 1023 ?
        <>
        <ul className="ul-order-by" name="sort" id="sort">
            <li onClick={(event) => {handleSortChange(event);handleSort}} className={`order-by-item ${itemSelected === 'more-recent' ? 'active' : ''}`} value="more-recent">Más recientes</li>
            <li onClick={(event) => {handleSortChange(event);handleSort}} className={`order-by-item ${itemSelected === 'brand' ? 'active' : ''}`} value="brand">Marca</li>
            <li onClick={(event) => {handleSortChange(event);handleSort}} className={`order-by-item ${itemSelected === 'subcategory' ? 'active' : ''}`} value="subcategory">Categoría</li>
            <li onClick={(event) => {handleSortChange(event);handleSort}} className={`order-by-item ${itemSelected === 'down-price' ? 'active' : ''}`} value="down-price">Precio más bajo</li>
            <li onClick={(event) => {handleSortChange(event);handleSort}} className={`order-by-item ${itemSelected === 'up-price' ? 'active' : ''}`} value="up-price">Precio más alto</li>
            <li onClick={(event) => {handleSortChange(event);handleSort}} className={`order-by-item ${itemSelected === 'a-z' ? 'active' : ''}`} value="a-z">A - Z</li>
            <li onClick={(event) => {handleSortChange(event);handleSort}} className={`order-by-item ${itemSelected === 'z-a' ? 'active' : ''}`} value="z-a">Z - A</li>
        </ul>
        </>
        :
        null
        }
    </section>
  )
}
/*<section className="order-by">
    <strong className="text-order-by">Ordenar por </strong>
    <select
      className="select-order-by"
      name="sort"
      id="sort"
      onChange={handleSortChange}
    >
      <option value="more-recent">Más recientes</option>
      <option value="brand">Marca</option>
      <option value="subcategory">Categoría</option>
      <option value="down-price">Precio más bajo</option>
      <option value="up-price">Precio más alto</option>
      <option value="a-z">A - Z</option>
      <option value="z-a">Z - A</option>
    </select>
  </section>
*/