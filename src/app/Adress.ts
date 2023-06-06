export interface IAdress {
  road: string,
  complement: string,
  state: string,
  city: string,
  neighborhood: string
}

export interface IAdressFromAPI {
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
}
