import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    mobile: '',
  });
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [nameError, setNameError] = useState('');
  const [genderError, setGenderError] = useState('');

  const params = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8065/api/user/${params.id}`);
      setUserData(response.data);
      setUpdatedData(response.data); // Set initial values for the form
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedData(userData); // Reset form data to current user data
    setEmailError(''); // Clear email validation error on cancel
    setMobileError(''); // Clear mobile validation error on cancel
    setNameError(''); // Clear name validation error on cancel
    setGenderError(''); // Clear gender validation error on cancel
  };

  const handleUpdate = async () => {
    try {
      // Validate email on the client side
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(updatedData.email)) {
        setEmailError('Please enter a valid email address');
        return;
      }

      // Validate mobile number on the client side
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!mobileRegex.test(updatedData.mobile)) {
        setMobileError('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9');
        return;
      }

      // Validate name to contain only alphabets
      const nameRegex = /^[A-Za-z]+$/;
      if (!nameRegex.test(updatedData.firstName) && !nameRegex.test(updatedData.lastName)) {
        setNameError('Please enter a valid name with only alphabets');
        return;
      }

      // Validate gender to be 'male' or 'female'
      if (updatedData.gender !== 'male' && updatedData.gender !== 'female') {
        setGenderError('Please select either "male" or "female" as gender');
        return;
      }

      // Format the data as per your server's expectations
      const formattedData = {
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
        gender: updatedData.gender,
        mobile: updatedData.mobile,
      };

      const response = await axios.put(`http://localhost:8065/api/user/${params.id}`, formattedData);
      setUserData(response.data);
      setIsEditing(false);
      setEmailError(''); // Clear email validation error on successful update
      setMobileError(''); // Clear mobile validation error on successful update
      setNameError(''); // Clear name validation error on successful update
      setGenderError(''); // Clear gender validation error on successful update
    } catch (error) {
      console.error('Error updating user data', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setEmailError(''); // Clear email validation error on input change
    setMobileError(''); // Clear mobile validation error on input change
    setNameError(''); // Clear name validation error on input change
    setGenderError(''); // Clear gender validation error on input change
  };

  return (
    <layout>
    <div className="container mt-4">
      <h1 className="mb-4">User Profile</h1>
      {loading && <p className="text-info">Loading user data...</p>}
      {error && <p className="text-danger">{error}</p>}
      {userData && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">User Details</h5>
            {isEditing ? (
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={updatedData.firstName}
                    onChange={handleInputChange}
                  />
                  {nameError && <p className="text-danger">{nameError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={updatedData.lastName}
                    onChange={handleInputChange}
                  />
                  {nameError && <p className="text-danger">{nameError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={updatedData.email}
                    onChange={handleInputChange}
                  />
                  {emailError && <p className="text-danger">{emailError}</p>}
                </div>
                <div className="form-group">
                  <label>Gender:</label><br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={updatedData.gender === 'male'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={updatedData.gender === 'female'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                  {genderError && <p className="text-danger">{genderError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile No:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={updatedData.mobile}
                    onChange={handleInputChange}
                  />
                  {mobileError && <p className="text-danger">{mobileError}</p>}
                </div>
                <button type="button" className="btn btn-primary mr-2" onClick={handleUpdate}>
                  Update
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </form>
            ) : (
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>First Name:</strong> {userData.firstName}</li>
                <li className="list-group-item"><strong>Last Name:</strong> {userData.lastName}</li>
                <li className="list-group-item"><strong>Email:</strong> {userData.email}</li>
                <li className="list-group-item"><strong>Gender:</strong> {userData.gender}</li>
                <li className="list-group-item"><strong>Mobile No:</strong> {userData.mobile}</li>
              </ul>
            )}
            {!isEditing && (
              <button type="button" className="btn btn-primary mt-3" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
    </layout>
  );
};

export default UserProfile;