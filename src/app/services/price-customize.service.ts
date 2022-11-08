import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceCustomizeService {

  price = (price:string) =>{
    let newPrice = price.split('')
    for (let i = 0; i < newPrice.length; i++){
      if (newPrice[i] === "k") newPrice[i] = " 000"
      if (newPrice[i] === "-") newPrice[i] = " - "
    }
    const correctPrice = newPrice.join('')
    return correctPrice
  }

  constructor() { }
}
