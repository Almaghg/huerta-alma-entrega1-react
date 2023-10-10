const products = [
  {
        nombre:'Tinga de pollo',
        tipo: 'Guiso',
        precio: '75',
        img: '',
        id: '1',
      },
      {
        nombre:'Arroz a la jardinera',
        tipo: 'Guarnición',
        precio: '55',
        img: '',
        id: '2',
      },
      {
        nombre:'Guisado de garbanzo',
        tipo: 'Vegetariano',
        precio: '75',
        img: '',
        id: '3',
      }
    ]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  }) 

}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}