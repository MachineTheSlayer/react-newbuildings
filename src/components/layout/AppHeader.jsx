import { Layout, Space, Modal, Form, Input, Checkbox, Button } from 'antd';
import MapYandex from '../configmap/MapYandex';
import { EnvironmentOutlined, HomeOutlined, LoginOutlined, QuestionCircleOutlined }  from '@ant-design/icons';
import { useState } from 'react';
import AboutInfoModal from '../AboutInfoModal';
import NewBuildingPage from "../../containers/NewBuildingPage/NewBuildingPage";


const headerStyle = {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    height: 60,
    lineHeight: '64px',
    backgroundColor: '#5784e6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

export default function AppHeader() {
  const [about, setAbout] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalMap, setModalMap] = useState(false)
  const [newbuildingsModal, setNewbuildingsModal] = useState(false)

return (
  <>
    <Layout.Header style={headerStyle}>
      <Button  onClick={() => setAbout(true)}>
        <QuestionCircleOutlined />
        О проекте 
      </Button>
     
    <Modal
          open={about}
          onCancel={() => setAbout(false)} 
          footer={null}
    >
      <AboutInfoModal />
    </Modal> 
   

  <Button style={{marginLeft: '20px'}} onClick={() => setNewbuildingsModal(true)}>
    <Space>
      <HomeOutlined />
    </Space>
    Новостройки
  </Button>
  <Modal
    closable={{ 'aria-label': 'Custom Close Button' }}
    open={newbuildingsModal}
    onOk={() => setNewbuildingsModal(false)}
    onCancel={() => setNewbuildingsModal(false)} 
    footer={null}
  >
    <NewBuildingPage />
  </Modal>
  
      <Button style={{marginLeft: 'auto'}} onClick={() => setModalMap(true)}>
        <EnvironmentOutlined />
        Карта 
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
        <LoginOutlined /> 
        Войти
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