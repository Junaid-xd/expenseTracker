import { useState } from 'react'
import ExpenseTable from './components/Expense Table/ExpenseTable'
import ExpenseInput from './components/Expense Input/ExpenseInput'
import './App.css'

const temp = [
    {
      id:'1',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
    {
      id:'2',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
    {
      id:'3',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
    {
      id:'4',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
    {
      id:'5',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
     {
      id:'6',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
     {
      id:'7',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
     {
      id:'8',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
     {
      id:'9',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
     {
      id:'10',
      title:'demo',
      category:'option1',
      amount:123,
      date:'06/08/2025',
      note:'demo note'
    },
    
  ]

  // JSON.parse(localStorage.getItem('expenseData')) || 

function App() {
  const [myArr, setMyArr] = useState(() => {
    return JSON.parse(localStorage.getItem('expenseData') || '[]');
  });


  const [categories, setCategories] = useState(() => {
    return JSON.parse(localStorage.getItem('allCategories') || '["Food", "Utilities", "Entertainment"]');
  });

  

  const[showExpenseTable, setShowExpenseTable]=useState(true);
  const[showExpenseInput, setShowExpenseInput]=useState(false);

  const [filterCategory, setFilterCategory] = useState('')

  const handelAddClick = ()=>{
    setShowExpenseTable(false)
    setShowExpenseInput(true)
  }

  const handelExpensesClick = ()=>{
    setShowExpenseTable(true)
    setShowExpenseInput(false)
  }

  return (
    <>
      <div className='main-app-div'>

        <div className='name-div'>
          <h1>Expense Tracker</h1>
        </div>
        

        <div className="upper-div">

          {
            showExpenseTable &&
            <div className="input-div">
              <p className='add-new-text' onClick={handelAddClick}>Add New Expense</p>
            </div>
          }

          {
            showExpenseInput && 
            <div className="input-div">
              <p className='add-new-text' onClick={handelExpensesClick}>Show Expenses</p>
            </div>
          }

          <div className="filters-div">
            <select value={filterCategory} onChange={(e)=>setFilterCategory(e.target.value)}>

              <option value={''}>---Choose Filter---</option>
              {
                categories.map((cate, index) => {
                  return <option key={index} value={cate}>{cate}</option>;
                })
              }
              <option value="showAll">Show All</option>

            </select>
          </div>
        </div>

        <div className='components-div'>

         {
          showExpenseInput &&
          <div className='expenseInput-div'>
              <ExpenseInput myArr = {myArr} setMyArr={setMyArr} categories={categories} setCategories={setCategories}/>
          </div>
         }


         {
          showExpenseTable &&
           <div className="expenseTable-div">
              <ExpenseTable myArr = {myArr} setMyArr={setMyArr} categories={categories} filterCategory={filterCategory}/>
           </div>
         }
        

        </div>

      </div>
    </>
  )
}

export default App


















