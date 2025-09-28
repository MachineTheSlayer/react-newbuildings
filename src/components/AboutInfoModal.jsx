import { Flex, Tag, Typography, Divider } from 'antd';

export default function AboutInfoModal() {
  return (
    <>
      <h2 >Цель проекта</h2>
        <Typography.Paragraph style={{margin:'auto'}}>
         Создать веб-приложение, где пользователь может рассчитывать время необходимое для покупки недвижимости <br/>видеть географическое местоположение новостроек на карте <br/>осуществлять быстрый переход на официальные сайты застройщиков
          </Typography.Paragraph>
        <Divider style={{margin:'auto'}} />
      <h2>Основной функционал</h2>
      <Typography.Title >Основной функционал</Typography.Title>
      <Typography.Title level={4}>Основной функционал</Typography.Title>
      <Typography.Title level={3}>Основной функционал</Typography.Title>
      <Typography.Title level={2}>Основной функционал</Typography.Title>
      <Divider style={{margin:'auto'}} />
      <h2>В разработке</h2>
      <Typography.Text strong >
        Регистрация и авторизация<Typography.Text code>(Back-end)</Typography.Text>
        <br />Адаптивный дизайн<Typography.Text code>(Mobile)<br /></Typography.Text>
        Маршрутизация<Typography.Text code>(React Router)<br /></Typography.Text>
        Добавление новостроек в избранное<Typography.Text code>(Redux/Zustand)</Typography.Text>
      </Typography.Text>
    </>
  )
}