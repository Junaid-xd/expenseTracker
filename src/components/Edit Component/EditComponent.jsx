import React, { useState } from 'react'
import './EditComponent.css'


function EditComponent({setShowEditComponent, expenseToView, myArr, setMyArr, categories }) {

  const [newTitle, setNewTitle] = useState(expenseToView.title);
  const [newAmount, setNewAmount] = useState(expenseToView.amount);
  const [newCategory, setNewCategory] = useState(expenseToView.category);
  const [newDate, setNewDate] = useState(expenseToView.date);
  const [newNote, setNewNote] = useState(expenseToView.note?expenseToView.note:"no note entered");
  const [errorMsg, setErrorMsg] = useState('')
  const errMsgTimeoutMiliseconds = 4000;




  const validateTitleField = ()=>{
    if(newTitle === ''){
      setErrorMsg("Title field can't be empty*");
      setInterval(()=>{
        setErrorMsg('')
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }

  const validateAmountField = ()=>{
    if(newAmount===''){
       setErrorMsg("Amount can't be empty*")
        setInterval(()=>{
          setErrorMsg("")
        }, errMsgTimeoutMiliseconds)
        return false
    }
    else if(newAmount<0){
      setErrorMsg("Amount can't be negative*")
      setInterval(()=>{
        setErrorMsg("")
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }

  const validateCategoryField = ()=>{
    if(newCategory === ''){
      setErrorMsg("Category field can't be empty*");
      setInterval(()=>{
        setErrorMsg('')
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }


  const validateDateField = ()=>{
    if(newDate === ''){
      setErrorMsg("Please choose a date*");
      setInterval(()=>{
        setErrorMsg('')
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }






  const updateExpense = (id)=>{

    if(validateTitleField() && validateAmountField() && validateCategoryField() && validateDateField()){

      const updatedArr = myArr.map((ex) =>
        ex.id === id
          ? {
              ...ex,
              title: newTitle,
              amount: newAmount,
              date: newDate,
              category: newCategory,
              note: newNote,
            }
          : ex
      );
      setMyArr(updatedArr);
      localStorage.setItem('expenseData', JSON.stringify(updatedArr));
      setShowEditComponent(false)
    }
   
  }


  return (
    <>
      <div className='main-wrapper'>

        <div className='content-edit-div'>

          <div className='closeBtn-div' >
            <button onClick={()=>setShowEditComponent(false)} className='close-btn'>X</button>
          </div>

         <div className="info-group">

            <div className='info-div'>
              <p className='view-label'>Title: </p>
              <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} className='in-ele'/>
              {/* <p>{expenseToView.title}</p> */}
            </div>

            <div className='info-div'>
              <p className='view-label'>Amount: </p>
              <input type="number" value={newAmount} onChange={(e)=>setNewAmount(e.target.value)} className='in-ele'/>
              {/* <p>{expenseToView.amount}</p> */}
            </div>

            <div className='info-div'>
              <p className='view-label'>Category: </p>
               <select onChange={(e)=>setNewCategory(e.target.value)} className='cate-in in-ele' value={newCategory}>
                <option value={''}>---Choose Category---</option>
                {
                  categories.map((cate, index) => {
                    return <option key={index} value={cate}>{cate}</option>;
                  })
                }
              </select>
            </div>


            <div className='info-div'>
              <p className='view-label'>Date: </p>
              <input type="date" value={newDate} onChange={(e)=>setNewDate(e.target.value)} className='in-ele'/>
              {/* <p>{expenseToView.date}</p> */}
            </div>

            <div className='info-div'>
              <p className='view-label'>Note: </p>
              <input type="text" value={newNote} onChange={(e)=>setNewNote(e.target.value)} className='in-ele'/>
              {/* <p>{expenseToView.note?expenseToView.note:"no note entered"}</p> */}
            </div>

            <div className='err-div'>
              <p className='err-p'>{errorMsg}</p>
            </div>

            <div className="editBtn-div">
              <button onClick={()=>updateExpense(expenseToView.id)} className='update-btn'>Update</button>
            </div>

         </div>

        </div>

        
      </div>
    </>
  )
}

export default EditComponent