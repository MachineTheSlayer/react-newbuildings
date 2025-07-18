import AppLayout from './components/layout/AppLayout'
import { BuildingsContextProvider } from './context/buildings-context';

function App() {

  return (
    <BuildingsContextProvider>
      <AppLayout />
    </BuildingsContextProvider>
  )
}

export default App
