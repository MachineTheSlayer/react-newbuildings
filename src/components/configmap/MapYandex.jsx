import React from 'react';
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from '@iminside/react-yandex-maps';

import config from './config.json';

export default function MapYandex() {
  const defaultState = {
      center: [53, 50],
      zoom: 5,
    };

return (
  <YMaps query={{apikey: config.YANDEX_API_KEY}}>
    <div>
      <h2>Карта новостроек</h2>
      <Map defaultState={{ center: [53.22, 50.16], zoom: 13 }} style={{height:400, border:'2px solid'}}>
        <Placemark modules={["geoObject.addon.balloon"]} geometry={[53.202963,50.152674]} properties={{balloonContentBody:"ЖК Король Лев"}} options={{iconLayout: 'default#image',iconImageHref: 'https://bereg-as.ru/upload/s2/images/logo1.png',iconImageSize: [45, 45]}}  />
        <Placemark modules={["geoObject.addon.balloon"]} geometry={[53.203135,50.180623]} properties={{balloonContentBody:"ЖК Развитие"}} options={{iconLayout: 'default#image',iconImageHref: 'https://sktransgruz.ru/assets/img/logo.svg',iconImageSize: [96, 96]}} />
        <FullscreenControl />
        <ZoomControl options={{ float: "right" }} />
        
      </Map> 
    </div>
  </YMaps>
  ); 
}