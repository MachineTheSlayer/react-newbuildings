import { Flex, Typography } from 'antd'

export default function BuildingInfo({ building }) {
  return (
    <Flex align="center">
      <img
        src={building.icon}
        alt={building.name}
        style={{ width: 60, marginRight: 10 }}
      />
      <Typography.Title level={2} style={{ margin: 0 }}>
        {building.name}
      </Typography.Title>
    </Flex>
  )
}