import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import config from './config.json';

export default function MapYandex() {
    const defaultState = {
      center: [55.751574, 37.573856],
      zoom: 5,
    };
  
    return (
      <YMaps query={{ apikey: config.YANDEX_API_KEY }}>
        <Map defaultState={defaultState}>
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    );
  }