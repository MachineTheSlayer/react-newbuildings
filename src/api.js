import { buildingsData } from './data'

export function fakeFetchBuildings() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(buildingsData)
      }, 500)
    })
  }

  