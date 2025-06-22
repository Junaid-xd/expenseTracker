import React, {useState} from 'react'
import './AddNewCategory.css'


function AddNewCategory({setShowAddNewCategoryComponent, categories, setCategories}) {

  const [newCategory, setNewCategory] = useState('');
  const [message,setMessage] = useState(null);

  const handelAdd = ()=>{

    if(newCategory !== ''){
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      localStorage.setItem('allCategories', JSON.stringify(updatedCategories));
      setNewCategory('')
      setMessage('Category added successfully')
      setInterval(()=>{
        setMessage('')
      },3000)
    }
    else{
      setMessage('Please enter something*')
      setInterval(()=>{
        setMessage('')
      },3000)
    }

  }

  return (
    <>
      <div className='main-wrapper'>

        <div className='content-div-add'>

          <div className='closeBtn-div'>
            <button onClick={()=>setShowAddNewCategoryComponent(false)} className='close-btn'>X</button>
          </div>

         <div className="info-group">

            <div className='info-div-add'>
              <p className='view-label'>Enter Category: </p>
              <input type="text" value={newCategory} onChange={(e)=>setNewCategory(e.target.value)}/>
            </div>

            <div className="msg-div">
              {message && (
                <p className={message.includes('successfully') ? 'success' : 'error'}>
                  {message}
                </p>
              )}
            </div>

            <div className="btn-div">
              <button onClick={handelAdd} className='add-btn-cate'>Add Category</button>
            </div>

            

         </div>

        </div>

        
      </div>
    </>
  )
}

export default AddNewCategory