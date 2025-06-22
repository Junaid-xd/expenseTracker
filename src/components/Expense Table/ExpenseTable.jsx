import React, { useState } from 'react'
import ViewComponent from '../View Component/ViewComponent';
import './ExpenseTable.css'
import EditComponent from '../Edit Component/EditComponent';


function ExpenseTable({myArr, setMyArr, categories, setShowExpenseInput, filterCategory }) {

  const [showViewComponent, setShowViewComponent] = useState(false)
  const [showEditComponent, setShowEditComponent] = useState(false)
  
  const [expenseToView, setExpenseToView] = useState(null)

  const deleteExpense = (id)=>{
    const updatedArr = myArr.filter(ex => ex.id !== id); 
    setMyArr(updatedArr);
    localStorage.setItem('expenseData', JSON.stringify(updatedArr));
  }

  const viewExpense = (id)=>{
    const expenseToView = myArr.find(ex=>ex.id === id);

    setExpenseToView(expenseToView);
    setShowViewComponent(true);
  }

  const editExpense = (id)=>{
    const expenseToView = myArr.find(ex=>ex.id === id);

    setExpenseToView(expenseToView);
    setShowEditComponent(true);
  }


  return (
    <>
     <div className="table-wrapper">
      {
        myArr.length?

        <table >

          <thead>
            <tr> 
              <th>Title</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              myArr.map((ex, index) => {
                if(filterCategory == '' || filterCategory=='showAll'){
                  return(
                      <tr key={index} className='each-row'>
                      <td className='theTitleCol'>{ex.title}</td>
                      <td><button onClick={() => viewExpense(ex.id)} className='viewBtn thebtn'>View</button></td>
                      <td><button onClick={()=> editExpense(ex.id)} className='editBtn thebtn'>Edit</button></td>
                      <td><button onClick={() => deleteExpense(ex.id)} className='deleteBtn thebtn'>Delete</button></td>
                    </tr>
                  )
                }
                else {
                  if(ex.category==filterCategory){
                    return (
                      <tr key={index} className='each-row'>
                        <td className='theTitleCol'>{ex.title}</td>
                        <td><button onClick={() => viewExpense(ex.id)} className='viewBtn thebtn'>View</button></td>
                        <td><button onClick={()=> editExpense(ex.id)} className='editBtn thebtn'>Edit</button></td>
                        <td><button onClick={() => deleteExpense(ex.id)} className='deleteBtn thebtn'>Delete</button></td>
                      </tr>
                    )
                  }
                }
              })
            }

            
          </tbody>

        </table>:

        <p className='empty-p'>No Expense Added Yet.</p>
      }
     </div>

     {showViewComponent && <ViewComponent setShowViewComponent={setShowViewComponent} expenseToView={expenseToView}/>}

     {showEditComponent && <EditComponent setShowEditComponent={setShowEditComponent} expenseToView={expenseToView} myArr={myArr} setMyArr={setMyArr} categories={categories} />}

     
    </>
  )
}

export default ExpenseTable