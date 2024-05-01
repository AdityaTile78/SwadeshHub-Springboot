import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CardComponent.css';

export default function App() {
  const [state, setState] = useState([]);

  const getAllStates = async () => {
    try {
      const { data } = await axios.get("http://localhost:8065/api/States");
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStates();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {state?.map((s) => (
       
        <Link
          to={`/state/${s.stateName}`}
          key={s.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          
          <div
            className="card m-3"
            style={{ width: '21rem', cursor: 'pointer' }}
          >
            <div style={{ height: '200px', overflow: 'hidden' }}>
              {s.image && (
            
                <img
                  src={`data:image/png;base64,${s.image}`}
                  className="card-img-top"
                  alt={s.stateName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
      
              )}
            </div>
            <div style={{ padding: '1rem' }}>
        
              <h5 className="card-title">{s.stateName}</h5>
         
              <p className="card-text">{s.stateDesc.substring(0, 200)}</p>
              </div>
        
          </div>
        </Link>
      ))}
    </div>
  );
}
