export interface Producto{
  idProducto:      number;
  idMarca:         number;
  idCategoria:     number;
  idTalla:         number;
  idColor:         number;
  idGenero:        number;
  precioUnitario:  number;
  stock:           number;
  numeroBusquedas: number;
  imagen:          string;
  description:     string;
  marca:           Marca;
  categoria:       Categoria;
  talla:           Talla;
  color:           Color;
  genero:          Genero;
}

export interface Categoria {
  idCategoria: number;
  categoria:   string;
}

export interface Color {
  idColor: number;
  color:   string;
}

export interface Genero {
  idGenero: number;
  genero:   string;
}

export interface Marca {
  idMarca: number;
  marca:   string;
}

export interface Talla {
  idTalla: number;
  talla:   string;
}

