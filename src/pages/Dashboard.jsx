import React from 'react'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/DashNav'
import Page from '../components/Page'
const Dashboard = () => {
  return (
    <>
      <Sidebar/>
      <Page>
        <Navigation/>
      </Page>
    </>
  )
}

export default Dashboard