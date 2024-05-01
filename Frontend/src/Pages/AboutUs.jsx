// AboutUs.js

import React from 'react';
import TeamMemberCard from '../Components/AboutUs/TeamMemberCard';
import './AboutUs.css';
import Philosophy from '../Components/AboutUs/Philosophy';
import Layout from '../Layout/Layout';

const AboutUs = () => {
  return (
    <Layout>
    <div className="about-us-container">
      <div className="header-section">
        <img
          src="./images/AboutUsMain.webp"
          alt="Full Page"
          className="fullpage-image"
        />
        <div className="header-text">

          <h2> Hello Ji!</h2>
          <p>
            <h3> We are SwadeshiHub & this is Humari Kahani</h3>

            A handwritten note on a piece of recycled paper and a handmade trinket is what one receives with every order, neatly wrapped in eco-friendly packaging from Gwalior based iTokri, making it one of the most loved e-commerce portals to a discerning domestic and global audience who are enthusiastic about Indian handicraft and handloom products. The online store for handicraft, handlooms, fabrics, jewelry, paintings, and other artworks is India’s only crafts and loom retailer with a hundred percent inventory of handmade artisanal products ranging from Punjab’s phulkari dupattas and Gujarat’s bandhani sarees to Andhra’s ikkat handloom fabrics, and Odisha’s pattachitra paintings. It sources products, including jewelry, dress materials, and household items from nearly 10,000 artisansacross India, making it the largest curated portal for art and handicraft products with over 100,000 listings. The portal adds 500 plus new products on a daily basis too.
          </p>
        </div>
      </div>
      <h2>Meet Our Team</h2>
      <div className="team-section">

        <TeamMemberCard
          name=" -- Ajinkya --"
          image="./images/AjinkyaPic.jpg"
          description="Email: mdhumal68@gmail.com"
        />
        <TeamMemberCard
          name="-- Aditya --"
          image="./images/AdityaPic.jpg"
          description="Email: aditile10@gmail.com"
        />
        <TeamMemberCard
          name="-- Kiran --"
          image="./images/KiranPic.jpeg"
          description="Email: kiranw8@gmail.com"
        />
        <TeamMemberCard
          name="-- Ketan --"
          image="./images/KetanPic.png"
          description="Email: ketand15@gmail.com"
        />
      </div>

      <section className="philosophy-section">
        <h1 className="philosophy-heading">Humari PhiloSophy</h1>
        <Philosophy />

      </section>


    </div>
    </Layout>
  );
};

export default AboutUs;
