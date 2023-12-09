class Car {
   constructor(name, model, prodaction, price, run, status){
      this.name = name
      this.model = model
      this.prodaction = prodaction
      this.price = price
      this.run = run
      this.status = status
   }
   toLog(obj){
      const objKey = Object.keys(obj).length
      const entries = Object.entries(obj)
      for(let i = 0; i <= objKey - 1; i++){
         const ent = Object.values(entries[i])
         ent[0] === 'status' ? ent[1] === true ? console.log(`${ent[0]} : У гаражі`) : console.log(`${ent[0]} : Десь поїхала`) : ent[1] === null ? console.log(`${ent[0]} : Немає значення`) : console.log(`${ent[0]} : ${ent[1]}`);
      }
   }
   changeRun(newRun){
      this.run += newRun
   }
   changePrice(newPrice){
      this.price = newPrice
   }
   changeStatus(newStaus){
      this.status = newStaus
   }
   logStatus(){
      this.status !== undefined ? (this.status === true ? console.log(`Статус : У гаражі`) : console.log(`Статус : Десь поїхала`)) : console.log(`Статус : Немає значення`)
   }
} 

const car1 = new Car('Bmw','x5',2020, 2000,230000,true)
car1.changeRun(689900)
car1.changePrice(1)
car1.changeStatus()
car1.logStatus()
car1.toLog(car1)
