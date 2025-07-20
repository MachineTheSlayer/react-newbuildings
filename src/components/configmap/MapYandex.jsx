import React from 'react';
import { YMaps, Map } from '@iminside/react-yandex-maps';

import config from './config.json';

export default function MapYandex() {
  const defaultState = {
      center: [55.751574, 37.573856],
      zoom: 5,
    };

return (
  <YMaps query={{apikey: config.YANDEX_API_KEY}}>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} style={{height:200}} />
    </div>
  </YMaps>
  ); 
}