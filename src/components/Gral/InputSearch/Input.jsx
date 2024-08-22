import './input.css'
import { useContext, useId } from "react"
import { useSearch } from '../../../hooks/useSearch'
import iconSearch from '/icons/search.svg'
export function Input({type = 'text', placeholder = '¡Hola!, ¿Qué estás buscando?'}){
  const inputId = useId();
  // Si no escucho el onSubmit del formulario ( como está ahora ) puedo borrar la función
  // handleSubmit del context, sino tengo que poner el onSubmit al form y listo
  const { handleSubmit, handleInputChange } = useSearch();
  
  {/* <form action="" className="form input-search" onSubmit={handleSubmit}>  */}
  return (
    <form action="" className="form input-search"> 
      <input
        name="search"
        type={type}
        placeholder={placeholder}
        id={inputId}
        onChange={handleInputChange}
      />
      <button className="icon-search">
        <figure>
          <img src={iconSearch} alt="icon-search" />
        </figure>
      </button>
    </form>
  )
}