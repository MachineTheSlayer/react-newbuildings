export function FinishYear(moneyNow,moneyPerMonth,squareMeter) {
    if ((moneyNow+(moneyPerMonth*12)) < squareMeter * 165000) {
        console.log('ne hvatit')
        console.log(moneyNow+(moneyPerMonth*12))
    } else console.log('успех')
}
  
  