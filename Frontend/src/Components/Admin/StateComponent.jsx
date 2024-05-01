import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Layout/Layout';



const StateComponent = () => {
  const initialState = {
    id: null,
    stateName: '',
    image: null,
    stateDesc: '',
  };

  const [state, setState] = useState(initialState);
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editStateId, setEditStateId] = useState(null);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8065/api/States');
      setStates(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleImageChange = (e) => {
    setState({ ...state, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', state.image);
    formData.append('stateName', state.stateName);
    formData.append('stateDesc', state.stateDesc);

    try {
      await axios.post('http://localhost:8065/api/addstate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setState(initialState);
      fetchStates();
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteState = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const headers = {
        'Authorization': `Bearer ${token.jwtToken}`,
        'Content-Type': 'application/json'
      };
      const res = await axios.delete(`http://localhost:8065/delete/${id}`);
      fetchStates();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (id) => {
    setEditStateId(id);
    const stateToEdit = states.find(state => state.id === id);
    setState(stateToEdit);
  };

  const handleUpdate = async () => {
    try {
      await axios.post('http://localhost:8065/api/updatestate', state);
      setState(initialState);
      setEditStateId(null);
      fetchStates();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
    <div className="container">
      <h2 className="mt-4">Manage States</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="stateName" className="form-label">State Name:</label>
          <input type="text" name="stateName" value={state.stateName} onChange={handleChange} className="form-control" id="stateName" />
        </div>
        <div className="mb-3">
          <label htmlFor="stateDesc" className="form-label">State Description:</label>
          <textarea name="stateDesc" value={state.stateDesc} onChange={handleChange} className="form-control" id="stateDesc" />
        </div>
        <div className="mb-3">
          <label htmlFor="stateImage" className="form-label">State Image:</label>
          <input type="file" onChange={handleImageChange} className="form-control" id="stateImage" />
        </div>
        <button type="submit" className="btn btn-primary">Add State</button>
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>State Name</th>
              <th>State Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {states.map((state) => (
              <tr key={state.id}>
                <td>{state.stateName}</td>
                <td>{state.stateDesc}</td>
                <td>
                  {editStateId === state.id ? (
                    <>
                      <button onClick={handleUpdate} className="btn btn-success">Save</button>
                      <button onClick={() => setEditStateId(null)} className="btn btn-secondary">Cancel</button>
                    </>
                  ) : (
                    <>
                      
                      <button onClick={() => deleteState(state.id)} className="btn btn-danger">Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </Layout>
  );
};

export default StateComponent;