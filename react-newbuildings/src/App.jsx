import AppLayout from './components/layout/AppLayout'
import { BuildingsContextProvider } from './context/buildings-context';
import { YMaps, Map, Button, Placemark} from '@pbe/react-yandex-maps';
import MapYandex from './components/configmap/MapYandex';

function App() {

  return (
    <BuildingsContextProvider>
      <AppLayout />
    </BuildingsContextProvider>
  )
}

export default App
