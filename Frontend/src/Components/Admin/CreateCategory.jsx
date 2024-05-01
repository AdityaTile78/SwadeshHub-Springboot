
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminMenu from '../Admin/AdminMenu.jsx';
import { Modal } from 'antd';
import CategoryForm from './CategoryForm.jsx';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [catName, setCatName] = useState('');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState('');

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8065/api/category', {
        catName,
      });
      // Reload categories after successful submission
      getAllCategory();
      setCatName(''); // Clear the input field
    } catch (error) {
      console.log(error);
    }
  };

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('http://localhost:8065/api/category');
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Handle category update - open modal for editing
  const handleUpdate = (cat) => {
    setUpdatedName(cat.catName);
    setSelected(cat);
    setVisible(true);
  };

  // Handle category edit within the modal
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8065/api/category/${selected.cat_id}`,
        {
          cat_id: selected.cat_id, // Ensure cat_id is sent in the request
          catName: updatedName,
        }
      );
      console.log('Server response:', response.data);

      // Reload categories after successful update
      getAllCategory();
      setVisible(false); // Close the modal
    } catch (error) {
      console.log(error);
    }
  };

  // Handle category delete
  const handleDelete = async (catId) => {
    try {
      await axios.delete(`http://localhost:8065/api/category/${catId}`);
      // Reload categories after successful deletion
      getAllCategory();
    } catch (error) {
      console.log(error);
    }
  };

  // return (
  //   <div className="container-fluid m-3 p-3">
  //     <div className="row">
  //       <div className="col-md-3">
  //         <AdminMenu />
  //       </div>
  //       <div className="col-md-9">
  //         <h1>Manage Category</h1>
  //         <div className="p-3 w-50">
  //           <CategoryForm
  //             handleSubmit={handleSubmit}
  //             value={catName}
  //             setValue={setCatName}
  //           />
  //         </div>
  //         <div className="w-75">
  //           <table className="table">
  //             <thead>
  //               <tr>
  //                 <th scope="col">Name</th>
  //                 <th scope="col">Actions</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {categories.map((c) => (
  //                 <tr key={c.cat_id}>
  //                   <td>{c.catName}</td>
  //                   <td>
  //                     <button
  //                       className="btn btn-primary ms-2"
  //                       onClick={() => handleUpdate(c)}
  //                     >
  //                       Edit
  //                     </button>
  //                     <button
  //                       className="btn btn-danger ms-2"
  //                       onClick={() => handleDelete(c.cat_id)}
  //                     >
  //                       Delete
  //                     </button>
  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //         <Modal
  //           onCancel={() => setVisible(false)}
  //           footer={null}
  //           visible={visible}
  //         >
  //           <CategoryForm
  //             value={updatedName}
  //             setValue={setUpdatedName}
  //             handleSubmit={handleEdit}
  //           />
  //         </Modal>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container-fluid m-3 p-3" style={{ background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Manage Category</h1>
          <div className="p-3 w-50">
            <CategoryForm
              handleSubmit={handleSubmit}
              value={catName}
              setValue={setCatName}
            />
          </div>
          <div className="w-75">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c.cat_id}>
                    <td>{c.catName}</td>
                    <td>
                      <button className="btn btn-primary ms-2" onClick={() => handleUpdate(c)}>
                        Edit
                      </button>
                      <button className="btn btn-danger ms-2" onClick={() => handleDelete(c.cat_id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
            <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleEdit} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;

