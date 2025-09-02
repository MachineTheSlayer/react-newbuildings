import React, {useState} from 'react';
import { Layout, Input, Card, Button } from 'antd';
import {ShowTrueYear} from '../../utils';

const contentStyle = {
    //margin: 'auto',
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#191265',
    padding: '1rem',
  }

export default function AppContent() {
    const [squareMeter, setSquareMeter] = useState('');
    const [moneyNow, setMoneyNow] = useState('');
    const [moneyPerMonth, setMoneyPerMonth] = useState('');
    const [yearsToBuy, setYearsToBuy] = useState(null);
    const [isVisible, setIsVisible] = useState(false)

    // Предположим, что цена за квадратный метр фиксирована
    // Если площадь<40 то price = ...<50...
  let pricePerSquareMeter = 115000; // например, 115000 рублей за квадратный метр

  if (squareMeter<40) {
    pricePerSquareMeter = 185000;
  } else if (squareMeter>40 && squareMeter<65) {
    pricePerSquareMeter = 146000;
  } else pricePerSquareMeter = 135000;

  const calculateYearsToBuy = () => {
    const totalPrice = squareMeter * pricePerSquareMeter;
    const remainingAmount = totalPrice - moneyNow;

    setIsVisible(!isVisible)

    if (remainingAmount <= 0) {
      setYearsToBuy(0);
    } else {
      const monthsNeeded = Math.ceil(remainingAmount / moneyPerMonth);
      setYearsToBuy(Math.ceil(monthsNeeded / 12));
    }
  };

  const getAgeString = (yearsToBuy) => {
    let count = yearsToBuy % 100
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

return (
    <Layout.Content style={contentStyle}>
        <h2>Калькулятор покупки недвижимости</h2>
        <Card style={{ width: 300, margin: 'auto',marginBottom:'1rem',marginTop:'1rem' }}>
            <Input style={{marginBottom:'10px'}} value={squareMeter} onChange={event => setSquareMeter(event.target.value) } placeholder="Квадратные метры" />
            <Input style={{marginBottom:'10px'}} value={moneyNow} onChange={event => setMoneyNow(event.target.value) } placeholder="Есть сейчас денег" />
            <Input value={moneyPerMonth} onChange={event => setMoneyPerMonth(event.target.value) } placeholder="Готов откладывать в месяц" />
        </Card>
        <Card style={{ width: 300, margin: 'auto' }} value={yearsToBuy}>
            <Button type="primary" onClick={calculateYearsToBuy}>Рассчитать</Button>
            { squareMeter && moneyNow && moneyPerMonth && isVisible && 
              <div>
                <p>Стоимость недвижимости</p> 
                <p>{(squareMeter * pricePerSquareMeter).toFixed(0)} р</p> 
                <p>Цель будет достигнута за </p> 
                <p>{yearsToBuy} {yearsToBuy >= 10 && yearsToBuy<=20 ? "лет" : yearsToBuy === 1 ? "год" : yearsToBuy >= 2 && yearsToBuy<= 4 ? "года" : "лет"} </p>
              </div> 
            } 
            
  {/*           {yearsToBuy !== null && (
        <div>
          {yearsToBuy === 0
            ? 'Вы уже можете купить квартиру!'
            : `Вам потребуется ${yearsToBuy} ${yearsToBuy >= 10 && yearsToBuy<=20 ? "лет" : yearsToBuy === 1 ? "год" : yearsToBuy >= 2 && yearsToBuy<= 4 ? "года" : "лет"} для покупки квартиры.`}
        </div> 
      )}  */}
        </Card>
        
    </Layout.Content>   

    
)}