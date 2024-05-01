import React from 'react'
import CardComponent from './CardComponent';
import CarouselComponent from './CarouselComponent';
import Layout from "../Layout/Layout"


const Home = () => {
  return (
    <Layout>
      <div>
        <CarouselComponent />
        <br></br>
        <br></br>
        <CardComponent />
        <br></br>
        <br></br>

      </div>
    </Layout>
  )
}

export default Home