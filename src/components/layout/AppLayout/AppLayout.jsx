import { useContext } from 'react';
import { Layout, Spin } from 'antd';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppContent from '../AppContent';
import BuildingsContext from '../../../context/buildings-context';

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