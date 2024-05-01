import React from 'react'
import AdminMenu from './Admin/AdminMenu'
import Layout from '../Layout/Layout'

const AdminDashboard = () => {
  return (
    <Layout>
      <div className='container-fluid '>
        <div className='row'>

          <div className='col-md-3'><AdminMenu /></div>
          <div className='col-md-9'>

          </div>
        </div>
      </div>
      </Layout>
  )
}

export default AdminDashboard