import React, { useContext,useLayoutEffect } from 'react';
import { useBuildings } from '../../context/buildings-context';
import { Layout, Select, Space, Modal, Form, Input, Checkbox  } from 'antd';
import MapYandex from '../configmap/MapYandex';
import { EnvironmentOutlined}  from '@ant-design/icons';
import{ Button } from "antd";
import { useEffect, useState } from 'react';
import BuildingInfoModal from '../BuildingInfoModal'
import NewBuildingPage from "../../containers/NewBuildingPage/NewBuildingPage";


const headerStyle = {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    height: 60,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalMap, setModalMap] = useState(false)
  const [selectModal, setSelectModal] = useState(false)
  const [newbuildingsModal, setNewbuildingsModal] = useState(false)
  const [building , setBuilding] = useState(null)
  const {buildings} = useBuildings()
  
  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/') {
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])

  function handleSelect(value) {
      console.log(value)
      setBuilding(buildings.find((building) => building.id === value))
      setSelectModal(true)
    }

    return (
      <>
    <Layout.Header style={headerStyle}>
      <Select
    style={{
      width: 250
    }}
    open={select}
    onChange={handleSelect}
    onClick={() => setSelect((prev) => !prev)}
    value="press / to open"
    options={buildings.map((buildings) => ({
          label: buildings.name,
          value: buildings.id,
          icon: buildings.icon,
    }))}
    optionRender={(option) => (
      <Space> 
        <img
          style={{ width: 60 }}
          src={option.data.icon}
          atl={option.data.label} /> {' '}  {option.data.label}  
      </Space>
    )}
  />

  <Button style={{marginLeft: '20px'}} onClick={() => setNewbuildingsModal(true)}>
    Новостройки
  </Button>
  <Modal
    closable={{ 'aria-label': 'Custom Close Button' }}
    open={newbuildingsModal}
    onOk={() => setNewbuildingsModal(false)}
    onCancel={() => setNewbuildingsModal(false)} 
    footer={null}
  >
    <NewBuildingPage  />
  </Modal>
  
      <Button style={{marginLeft: 'auto'}} onClick={() => setModalMap(true)}>
        <EnvironmentOutlined />
        Map 
      </Button>
      <Modal
          closable={{ 'aria-label': 'Custom Close Button' }}
          open={modalMap}
          onOk={() => setModalMap(false)}
          onCancel={() => setModalMap(false)} 
          footer={null}
        >     
          <MapYandex />
         
        </Modal>

   
      <Button style={{marginLeft: '20px'}} onClick={() => setModal((prev) => !prev)}>
        
        Login
      </Button>
      
      <Modal
        open={modal} 
        onCancel={() => setModal(false)}
        footer={null}
   >
            <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 400,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" onClick={() => setModal(false)}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        
      </Modal>
      
    </Layout.Header>
    </>
  )
}