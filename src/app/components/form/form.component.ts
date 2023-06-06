import { Component } from '@angular/core';

import { CepService } from 'src/app/services/cep.service';

import { IAdress, IAdressFromAPI } from 'src/app/Adress';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  cep: string = ''
  invalidCep: boolean = false
  isLoading: boolean = false
  Adress!: IAdress


  constructor( private cepService : CepService){}

  adapter(adress: IAdressFromAPI): IAdress {
    return {
      city: adress.localidade,
      complement: adress.complemento,
      neighborhood: adress.bairro,
      state: adress.uf,
      road: adress.logradouro
    }
  }

  onInputCep(): void {
    this.invalidCep = false

    if(this.cep.length === 8){
      this.isLoading = true

      setTimeout(() => {

        this.cepService.getItem(this.cep)
        .subscribe({
          next: (address) => {
            if(address.logradouro){
              this.isLoading = false
              this.invalidCep = false
              this.Adress = this.adapter(address)

            }else {
              this.isLoading = false
              this.invalidCep = true
              this.Adress = {
                city: '',
                complement: '',
                neighborhood: '',
                state: '',
                road: ''
              }
            }
          }
          , error: (err) => {
              this.isLoading = false
              this.invalidCep = true
              this.Adress = {
                city: '',
                complement: '',
                neighborhood: '',
                state: '',
                road: ''
              }
          }})
      },1000)
    }
  }
}
