export const useSort = (products, orderBy) => {
  // copiamos el arreglo para no modificar el original
  const sortedProducts = [...products];
  // y luego ordenamos el arreglo copiado
  switch(orderBy) {
    case 'more-recent':
      return sortedProducts.sort((a, b) => a.id - b.id);
    case 'brand':
      return sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand));
    case 'subcategory':
      return sortedProducts.sort((a, b) => a.subcategory.localeCompare(b.subcategory))
    case 'down-price':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'up-price':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'a-z':
      return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    case 'z-a':
      return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));      
    default:
      // Si el tipo de orden no es reconocido, retornamos el arreglo original sin ordenar
      return products;
  }
}