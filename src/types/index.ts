// Secciones disponibles en la barra lateral
export type Seccion = 'Personal' | 'Inventario' | 'Incidencias'

// https://jsonplaceholder.typicode.com/users
export interface Usuario {
  id: number
  name: string
  username: string
  email: string
  phone: string
  address: {
    city: string
  }
  company: {
    name: string
  }
}

// https://fakestoreapi.com/products
export interface Producto {
  id: number
  title: string
  price: number
  category: string
  image: string
}

// https://jsonplaceholder.typicode.com/todos
export interface Tarea {
  id: number
  userId: number
  title: string
  completed: boolean
}
