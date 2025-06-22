import React, { useState } from 'react'
import './ExpenseInput.css'
import AddNewCategory from '../Add New Category Component/AddNewCategory'


function ExpenseInput({myArr, setMyArr, categories, setCategories}) {

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [note, setNote] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)
  const errMsgTimeoutMiliseconds = 4000;
  
  const [showAddNewCategoryComponent, setShowAddNewCategoryComponent] = useState(false)
  
  const validateTitleField = ()=>{
    if(title === ''){
      setErrorMsg("Title field can't be empty*");
      setInterval(()=>{
        setErrorMsg(null)
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }

  const validateAmountField = ()=>{
    if(amount===''){
       setErrorMsg("Amount can't be empty*")
        setInterval(()=>{
          setErrorMsg(null)
        }, errMsgTimeoutMiliseconds)
        return false
    }
    else if(amount<0){
      setErrorMsg("Amount can't be negative*")
      setInterval(()=>{
        setErrorMsg("")
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }

  const validateCategoryField = ()=>{
    if(category === ''){
      setErrorMsg("Category field can't be empty*");
      setInterval(()=>{
        setErrorMsg(null)
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }


  const validateDateField = ()=>{
    if(date === ''){
      setErrorMsg("Please choose a date*");
      setInterval(()=>{
        setErrorMsg(null)
      }, errMsgTimeoutMiliseconds)
      return false
    }
    return true
  }

  const generateRandomId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  };


  const handelAddBtn = ()=>{


    if(validateTitleField() && validateAmountField() && validateCategoryField() && validateDateField()){

      const newExpense = {
        id: generateRandomId(),
        title,
        amount,
        category,
        date,
        note
      }


      if (newExpense) {
        
        const updatedArr = [...myArr, newExpense];
        setMyArr(updatedArr);
        localStorage.setItem('expenseData', JSON.stringify(updatedArr));
        
      }

      setSuccessMsg("Expense Added Successfully")
        setInterval(()=>{
        setSuccessMsg(null)
      }, errMsgTimeoutMiliseconds)
      setTitle('');
      setCategory('');
      setAmount(0);
      setDate('');
      setNote('');

    }
    
    //console.log(JSON.parse(localStorage.getItem('expenseData')))
  }

  const handelOptions = (e)=>{
    const selected = e.target.value;

    if (selected === 'addNew') {
      setShowAddNewCategoryComponent(true);
      setCategory('');
    } else {
      setCategory(selected);
    }
  }


  return (
    <>
      <div className='input-wrapper'>
        <div className='in-div'>
          <p className='in-label'>Title</p>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='in-ele'/>
        </div>

        <div className='in-div'>
          <p className='in-label'>Amount</p>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className='in-ele'/>
        </div>

        <div className='in-div'>
          <p className='in-label'>Category</p>
          <select onChange={(e)=>handelOptions(e)} className='cate-in in-ele' value={category}>

            <option value={''}>---Choose Category---</option>
            {
              categories.map((cate, index) => {
                return <option key={index} value={cate}>{cate}</option>;
              })
            }
            <option value={'addNew'}>+ Add new Category </option>

          </select>

        </div>

        <div className='in-div'>
          <p className='in-label'>Date</p>
          <input type="date" className='date-in in-ele' value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>

        <div className='in-div'>
          <p className='in-label'>Note</p>
          <input type="text" placeholder='optional' value={note} onChange={(e)=>setNote(e.target.value)} className='in-ele'/>
        </div>


        {
          errorMsg && 
          <div className='err-div'>
            <p className='err-p'>{errorMsg}</p>
          </div>
        }


        {
          successMsg &&
          <div className='succ-div'>
            <p className='succ-p'>{successMsg}</p>
          </div>
        }


        <div className='btn-div'>
          <button className='add-btn' onClick={handelAddBtn}>Add</button>
        </div>
      </div>


      {showAddNewCategoryComponent && <AddNewCategory setShowAddNewCategoryComponent={setShowAddNewCategoryComponent} categories={categories} setCategories={setCategories}/>}
    </>
  )
}

export default ExpenseInput