import React from 'react';
import Dashboard from 'components/Dashboard/Dashboard'
import Panel from 'components/Panel/Panel'
import Navbar from 'components/Navbar/Navbar'
import CardModal from 'components/Modals/CardModal/CardModal'

const App = () => (
  <>
    <Navbar />
    <Dashboard title='Mi tablero' />
    <Panel />
    {/* <CardModal /> */}
  </>    
)

export default App
