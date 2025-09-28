export function showTrueYear(yearsToBuy) {
    let count = Math.ceil(yearsToBuy) % 100;
    
    if (count >= 11 && count <= 19) {
      return "лет! 😲";
    } else {
      count =  count % 10;
      if (count === 1) {
        return "год! 🤩";
      } else if (count >= 2 && count <= 4) {
        return "года! 😮";
      } else {
        return "лет! 🤯";
      }
    }
}
  
export function showTrueMonths(yearsToBuy) {
    let count = Math.ceil(yearsToBuy*10) % 10;

    if (count === 1) {
      return "месяц! Вы близки к цели!🤑";
    } else if (count >= 2 && count <= 4) {
      return "месяца!🤠";
    } else {
      return "месяцев!😼";
    }
} 