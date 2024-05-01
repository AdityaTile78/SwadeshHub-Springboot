import React from 'react'
import UserMenu from './User/UserMenu'
import Layout from '../Layout/Layout';

const UserDashboard = () => {
    return (
        <Layout>
            <div className='container-fluid '>
                <div className='row'>

                    <div className='col-md-3'><UserMenu /></div>
                    <div className='col-md-9'>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserDashboard