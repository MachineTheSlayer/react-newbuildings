export function ShowTrueYear({yearsToBuy}) {
    let count = yearsToBuy % 100
    console.log(yearsToBuy)
    if (count >= 10 && count<= 20) {
      return "лет"
    } else {
      count =  yearsToBuy % 10
      if (count === 1) {
        return "год"
      } else if (count >= 2 && count <= 4) {
        return "года"
      } else {
        return "лет"
      }
    }
}
  
  