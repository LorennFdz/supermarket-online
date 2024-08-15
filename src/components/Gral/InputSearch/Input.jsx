import './input.css'
import { useId } from "react"
import { useSearch } from '../../../hooks/useSearch'
import iconSearch from '/src/icons/search.svg'
export function Input({type = 'text', placeholder = '¡Hola!, ¿Qué estás buscando?'}){
  const inputId = useId();
  const { handleSubmit } = useSearch(); 
  return (
    <form action="" className="form input-search" onSubmit={handleSubmit}> 
      <input name="search" type={type} placeholder={placeholder} id={inputId} />
      <button className="icon-search">
        <figure>
          <img src={iconSearch} alt="icon-search" />
        </figure>
      </button>
    </form>
  )
}