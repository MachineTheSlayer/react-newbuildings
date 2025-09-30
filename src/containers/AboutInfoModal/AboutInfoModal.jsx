import { Typography, Divider } from 'antd';
import { ClockCircleOutlined, CheckCircleTwoTone }  from '@ant-design/icons';

import styles from "./AboutInfoModal.module.css";

export default function AboutInfoModal() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} >Цель проекта</h2>
        <Typography.Text strong style={{margin:'auto',fontSize:"16px"}}>
         <p className={styles.text}>Создать веб-приложение, где пользователь может рассчитывать время необходимое для покупки недвижимости, видеть географическое местоположение новостроек на карте, осуществлять быстрый переход на официальные сайты застройщиков.</p>
        </Typography.Text>
        <Divider style={{margin:'auto'}} />
      <h2 className={styles.title}>Основной функционал</h2>
      <Typography.Text strong >  
        <ul className={styles.list__container}>  
          <CheckCircleTwoTone twoToneColor="#52c41a" /> Калькулятор покупки недвижимости <br />
          <CheckCircleTwoTone twoToneColor="#52c41a" /> База новостроек с переходом на официальные сайты <br />
          <CheckCircleTwoTone twoToneColor="#52c41a" /> Yandex карта с отмеченными новостройками
        </ul>
      </Typography.Text>
      <Divider style={{margin:'auto'}} />
      <h2 className={styles.title}>В разработке</h2>
      <Typography.Text strong >
        <ul className={styles.list__container}>
          <ClockCircleOutlined /> Регистрация и авторизация<Typography.Text code>(Back-end)<br /></Typography.Text>
          <ClockCircleOutlined /> Адаптивный дизайн<Typography.Text code>(Mobile)<br /></Typography.Text>
          <ClockCircleOutlined /> Маршрутизация<Typography.Text code>(React Router)<br /></Typography.Text>
          <ClockCircleOutlined /> Добавление новостроек в избранное<Typography.Text code>(Redux/Zustand)</Typography.Text>
        </ul> 
      </Typography.Text>
    </div>
  )
}