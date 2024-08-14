import { useContext } from "react";
import { SearchContext } from "../context/search";

export function useSearch() {
  const context = useContext(SearchContext)

  if(context === undefined)
    throw new Error('Estás utilizando este custom Hook en una parte de la aplicación que no está envuelta con el provider.')
  
  return context
}


// esta es la mejor forma ya que obtenemos todos los inputs del formulario
    // podría llamar solo a search y me traería todos los resultados de los inputs (que tuviese)
    // ó llamarlo entre llaves para que reconozca directamente el name del input en particular
    
    /*        const { search } = Object.fromEntries(new window.FormData(event.target))
              setSearch(search);              */


    /* otra forma similar sería:
    const form = new FormData(event.target)
    const search = form.get('search')
    console.log(search); */
    // ó también se puede realizar utilizando el hook useRef() pero si tuviese muchos inputs
    // sería un costo barbaro y además sería lento, por cada useRef a cada input.


    /**
     * 
     * searchProducts = products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      const productDescription = product.description.toLowerCase();
      return productTitle.includes(search.toLowerCase()) || productDescription.includes(search.toLowerCase());
    });
     */