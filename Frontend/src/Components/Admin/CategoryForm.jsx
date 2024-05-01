import React from 'react'
import Layout from '../../Layout/Layout'

export const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
      
        <>
        
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Enter New Category' value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
      
    )
}

export default CategoryForm