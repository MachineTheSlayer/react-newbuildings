import React, {useState} from 'react';
import { Layout, Input, Card, Button } from 'antd';
import { FinishYear } from '../../utils';

const contentStyle = {
    //margin: 'auto',
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem',
  }

export default function AppContent() {
    const [squareMeter, setSquareMeter] = useState('');
    const [moneyNow, setMoneyNow] = useState('');
    const [moneyPerMonth, setMoneyPerMonth] = useState('');
    const [yearsToBuy, setYearsToBuy] = useState(0)

    // Предположим, что цена за квадратный метр фиксирована
  const pricePerSquareMeter = 115000; // например, 115000 рублей за квадратный метр

  const calculateYearsToBuy = () => {
    const totalPrice = squareMeter * pricePerSquareMeter;
    const remainingAmount = totalPrice - moneyNow;

    if (remainingAmount <= 0) {
      setYearsToBuy(0);
    } else {
      const monthsNeeded = Math.ceil(remainingAmount / moneyPerMonth);
      setYearsToBuy(Math.ceil(monthsNeeded / 12));
    }
  };

    /* function yearRas(moneyNow,moneyPerMonth,squareMeter) {
        if (moneyNow+moneyPerMonth*12 < squareMeter * 165000) {
            return <p>Hello</p>
        }
    } */
    
return (
    <Layout.Content style={contentStyle}>
        Content Калькулятор покупки недвижимости
        <Card style={{ width: 300, margin: 'auto',marginBottom:'1rem' }}>
            <Input style={{marginBottom:'10px'}} value={squareMeter} onChange={event => setSquareMeter(event.target.value) } placeholder="Квадратные метры" />
            <Input style={{marginBottom:'10px'}} value={moneyNow} onChange={event => setMoneyNow(event.target.value) } placeholder="Есть сейчас денег" />
            <Input  value={moneyPerMonth} onChange={event => setMoneyPerMonth(event.target.value) } placeholder="Готов откладывать в месяц" />
        </Card>
        <Card style={{ width: 300, margin: 'auto' }} value={yearsToBuy}>
            <Button type="primary" onClick={calculateYearsToBuy}>Рассчитать</Button>
            <p>Стоимость недвижимости</p>
            <p>{squareMeter * pricePerSquareMeter} р</p>
            Цель будет достигнута за
            <p>{yearsToBuy} {yearsToBuy < 5 ? 'года' : 'лет'}</p>
        </Card>
        
    </Layout.Content>   
)}