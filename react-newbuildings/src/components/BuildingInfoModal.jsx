
import { Flex, Tag, Typography, Divider } from 'antd'
import BuildingInfo from './BuildingInfo'

export default function BuildingIInfoModal({ building }) {
  return (
    <>
      <BuildingInfo building={building} withSymbol />
      
    </>
  )
}