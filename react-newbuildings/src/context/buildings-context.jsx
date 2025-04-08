import { createContext, useState, useContext, useEffect } from "react";
import { fakeFetchBuildings } from '../api'

const BuildingsContext = createContext({
    assets: [],
    buildings: [],
    loading: false,
  })

export function BuildingsContextProvider({children}) {
    const [loading, setLoading] = useState(false)
    const [buildings,setBuildings] = useState([])
    const [assets, setAssets] = useState([])

    function mapResult(assets, result) {
        return assets.map((asset) => {
          const buildings = result.find((c) => c.id === asset.id)
          return {
            name: buildings.name,
            ...asset,
          }
        })
      }

    useEffect(() => {
        async function preload() {
          setLoading(true)
          const { result } = await fakeFetchBuildings()
          
          setAssets(mapResult(assets, result))
          setBuildings(result)
          setLoading(false)
        }
        preload()
      }, [])

    return <BuildingsContext.Provider value={{loading, buildings}}>
        {children}
    </BuildingsContext.Provider>
}

export default BuildingsContext

export function useBuildings() {
    return useContext(BuildingsContext)
  }