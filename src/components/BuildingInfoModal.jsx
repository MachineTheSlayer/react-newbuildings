
import { Flex, Tag, Typography, Divider } from 'antd';
import BuildingInfo from './BuildingInfo';
import NewBuildingPage from "../containers/NewBuildingPage/NewBuildingPage";

export default function BuildingIInfoModal({ building }) {
  return (
    <>
      <BuildingInfo building={building} withSymbol />
      
      <Divider />
       <Typography.Paragraph>
         {building.price}руб за 1кв. метр
        </Typography.Paragraph>
    </>
  )
}