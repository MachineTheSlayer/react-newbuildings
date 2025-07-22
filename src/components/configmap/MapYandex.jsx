import React from 'react';
import { YMaps, Map } from '@iminside/react-yandex-maps';

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
      <Map defaultState={{ center: [53.22, 50.16], zoom: 13 }} style={{height:400}} />
    </div>
  </YMaps>
  ); 
}