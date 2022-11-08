import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HowLongService {

  getTime = (first: string, second: string ) => {
    let time!: string
    let lastAction!: string
    if (first === second){
      time = first
      lastAction = 'Created'
    }
    if (first !== second){
      time = second
      lastAction = 'Updated'
    }
    let now: number | Date = new Date()
    let then: number | Date = new Date(time)
    now = now.getTime()
    then = then.getTime()
    const differ: Date | number = new Date(Math.abs(then - now))
    const years: Date | number = +differ.toISOString().slice(0, 4) - 1970
    const months: Date | number = differ.getMonth()
    const days: Date | number = differ.getDate() - 1
    const hours: Date | number = differ.getHours()
    const minutes: Date | number = differ.getMinutes()

    return lastAction + " " + ((years) ? years + ' y ago'
              : (months) ? months + ' mon ago'
              : (days) ? days + ' d ago'
              : (hours) ? hours + ' h ago'
              : minutes + ' min ago')
  }

  constructor() { }
}
