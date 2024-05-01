import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src="https://www.uniekart.com/images/inner_banner1.jpeg" className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://www.uniekart.com/images/inner_banner2.jpeg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://swadeshi-dukan.com/cdn/shop/files/Banner_2_1800x.jpg?v=1614726309' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}