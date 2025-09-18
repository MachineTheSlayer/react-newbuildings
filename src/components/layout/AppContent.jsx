import React, {useState,useRef} from 'react';
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
    const [apartmentCost, setApartmentCost] = useState('');
    const [moneyNow, setMoneyNow] = useState('');
    const [moneyPerMonth, setMoneyPerMonth] = useState('');
    const [yearsToBuy, setYearsToBuy] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasErrorApartmentCost, setHasErrorApartmentCost] = useState(false);
    const [hasErrorMoneyNow, setHasErrorMoneyNow] = useState(false);
    const [hasErrorMoneyPerMonth, setHasErrorMoneyPerMonth] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleInputChangeApartmentCost = (e) => {
      const inputValueApartmentCost = e.target.value;
      setApartmentCost(inputValueApartmentCost);
    
      // Проверяем, является ли число отрицательным
      if (inputValueApartmentCost !== '' && parseFloat(inputValueApartmentCost) <= 0 ) {
        setHasErrorApartmentCost(true);
      } else {
        setHasErrorApartmentCost(false);
      }
  };
    const handleInputChangeMoneyNow = (e) => {
      const inputValueMoneyNow = e.target.value;
      setMoneyNow(inputValueMoneyNow);
      
      // Проверяем, является ли число отрицательным
      if (inputValueMoneyNow !== '' && parseFloat(inputValueMoneyNow) <= 0 ) {
        setHasErrorMoneyNow(true);
      } else {
        setHasErrorMoneyNow(false);
      }
  };
    const handleInputChangeMoneyPerMonth = (e) => {
      const inputValueMoneyPerMonth = e.target.value;
      setMoneyPerMonth(inputValueMoneyPerMonth);

      // Проверяем, является ли число отрицательным
      if (inputValueMoneyPerMonth !== '' && parseFloat(inputValueMoneyPerMonth) <= 0 ) {
        setHasErrorMoneyPerMonth(true);
      } else {
        setHasErrorMoneyPerMonth(false);
      }
  };

    // Предположим, что цена за квадратный метр фиксирована
    // Если площадь<40 то price = ...<50...
  /* let pricePerSquareMeter = 115000; // например, 115000 рублей за квадратный метр

  if (squareMeter<40) {
    pricePerSquareMeter = 185000;
  } else if (squareMeter>40 && squareMeter<65) {
    pricePerSquareMeter = 146000;
  } else pricePerSquareMeter = 135000; */

  const calculateYearsToBuy = () => {
    const totalPrice = apartmentCost;
    const remainingAmount = totalPrice - moneyNow;

    setIsVisible(!isVisible)
    
    if (apartmentCost !== '' & moneyNow !== '' & moneyPerMonth !== '') {
      setIsClicked(!isClicked);
    };

    if (remainingAmount <= 0) {
      setYearsToBuy(0);
    } else {
      const monthsNeeded = Math.ceil(remainingAmount / moneyPerMonth);
      setYearsToBuy(Math.ceil(monthsNeeded / 12));
    }
  };

  /* const getAgeString = (yearsToBuy) => {
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
  } */

return (
    <Layout.Content style={contentStyle}>
        <h2>Калькулятор покупки недвижимости</h2>
        <Card style={{ width: 300, margin: 'auto',marginBottom:'1rem',marginTop:'1rem' }}>
            <Input type="number" style={{marginBottom:'10px'}} value={apartmentCost} onChange={handleInputChangeApartmentCost} className={hasErrorApartmentCost ? 'input-error' : ''} status={hasErrorApartmentCost ? 'error' : undefined} placeholder="Стоимость квартиры" /> 
            <Input type='number' style={{marginBottom:'10px'}} value={moneyNow} onChange={handleInputChangeMoneyNow} className={hasErrorMoneyNow ? 'input-error' : ''} status={hasErrorMoneyNow ? 'error' : undefined} placeholder="Есть сейчас денег" />
            <Input type='number' value={moneyPerMonth} onChange={handleInputChangeMoneyPerMonth} className={hasErrorMoneyPerMonth ? 'input-error' : ''} status={hasErrorMoneyPerMonth ? 'error' : undefined} placeholder="Готов откладывать в месяц" />
        </Card>
        <Card style={{ width: 300, margin: 'auto' }} value={yearsToBuy}>
            <Button type="primary" onClick={calculateYearsToBuy}>{isClicked ? 'Очистить' : 'Рассчитать'}</Button>
            { apartmentCost > 0 && moneyNow > 0 && moneyPerMonth > 0 && isVisible && 
              <div>
                <p>Стоимость недвижимости</p> 
                <p>{Number(apartmentCost).toFixed(0)} р</p> 
                {yearsToBuy !== null && (
                <div>
                  {yearsToBuy === 0
                    ? 'Вы уже можете купить квартиру!😎'
                    : `Цель будет достигнута за ${yearsToBuy} ${yearsToBuy >= 10 && yearsToBuy<=20 ? "лет" : yearsToBuy === 1 ? "год" : yearsToBuy >= 2 && yearsToBuy<= 4 ? "года" : "лет"}😲`}
                </div> 
                )} 
              </div> 
            } 
        </Card>
        
    </Layout.Content>   

    
)}