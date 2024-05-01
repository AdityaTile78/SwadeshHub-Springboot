import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from "react-router-dom";


const StateProductsComponent = (props) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const params = useParams();
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:8065/api/category");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getAllSubCategories = async (cat_name) => {
    try {
      const { data } = await axios.get(`http://localhost:8065/api/subcategory/by/${cat_name}`);
      setSubcategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCategorySelect = (cat_name) => {
    setSelectedCategory(cat_name);
    getAllSubCategories(cat_name);
  }

  useEffect(() => {
    getAllCategories();
  }, []);
  console.log(props.state)
  return (
    <div className="bg-color:grey">
      <MDBDropdown group className='shadow-0'>
        <div className="dropdown-image-container">
          {/* <img src="" alt="Fashion" className="dropdown-image" /> */}
        </div>
        {categories?.map((cat) => (
          <div key={cat.cat_name} className="dropdown-content">
            <MDBDropdownToggle color="pink" link="" onClick={() => handleCategorySelect(cat.catName)}>
              {cat.catName}
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem divider />
              {subcategories?.map((subCat) => (
                <MDBDropdownItem key={subCat.sctr_name} link="/" >{subCat.sctr_name}</MDBDropdownItem>
              ))}
            </MDBDropdownMenu>
          </div>
        ))}
      </MDBDropdown>
    </div>
  );
}

export default StateProductsComponent;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function StateProductsComponent() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:8065/api/category');
//         setCategories(data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="flex items-center justify-between">
//         <div className="flex space-x-4">
//           {categories.map((category) => (
//             <div key={category.catName} className="group">
//               <button className="text-sm font-semibold leading-6 text-white hover:text-gray-300 focus:outline-none">
//                 {category.catName}
//               </button>

//               {category.subcategories && (
//                 <div className="hidden group-hover:block absolute z-10 mt-2 bg-gray-800 text-white">
//                   {category.subcategories.map((subcategory) => (
//                     <div key={subcategory.sctr_name} className="p-2 hover:bg-gray-700">
//                       <a href={subcategory.href} className="font-semibold">
//                         {subcategory.sctr_name}
//                         <span className="absolute inset-0" />
//                       </a>
//                       <p className="text-gray-300">{subcategory.sctr_description}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }




