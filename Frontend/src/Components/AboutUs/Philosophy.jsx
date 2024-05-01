// Philosophy.js

import React from 'react';
import './Philosophy.css'; // Import the styling file

const Philosophy = () => {
    const philosophyData = [
        {
            title: '--With Love--',
            description: 'All products are personally sourced with care and respect, for the artisan, craftform and you. Pyaar se dekho and pyaar se khareedo..',
            imageUrl: './images/WithLove.webp', //  image
        },
        {
            title: '--Earth-Friendly--',
            description: 'Crafts are hand-made and by nature organic, environmentally friendly. By supporting local, you are creating a sustainable future..',
            imageUrl: './images/EarthFriendly.webp', //  image
        },
        {
            title: '--Inclusive--',
            description: 'We prioritise bridging the gap, 70% of our workforce is local Gwalior women, who ensure itokri stays grounded..',
            imageUrl: './images/Inclusive.webp', //  image
        },
        {
            title: '--Artisan-First--',
            description: 'We partner with and support 500+ artisan families and their legacy in craft. They give us the confidence to bring these products to you..',
            imageUrl: './images/Artisan.webp', //  image
        },
    ];

    return (
        <div className="philosophy-container">
       
            {philosophyData.map((card, index) => (
                <div key={index} className="philosophy-card">
                    <img src={card.imageUrl} alt={`Card ${index + 1}`} className="card-image" />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Philosophy;
