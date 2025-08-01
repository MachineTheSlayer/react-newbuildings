import { Layout, Spin } from 'antd'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import { useContext } from 'react'
import BuildingsContext from '../../context/buildings-context'
import AppContent from './AppContent'

const contentStyle = {
    textAlign: 'center',
    minHeight: '100vh',
    color: '#fff',
    backgroundColor: '#001529',
  };

export default function AppLayout() {
    const { loading } = useContext(BuildingsContext)
  
    if (loading) {
      return <Spin fullscreen  />
    }
  
    return (
        <Layout>
            <AppHeader />
            <Layout>
          
                <AppContent />
                
            </Layout>
            <AppFooter />
        </Layout>
    )
  }