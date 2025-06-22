import React from 'react'
import './ViewComponent.css'

function ViewComponent({setShowViewComponent, expenseToView}) {
  return (
    <>
      <div className='main-wrapper'>

        <div className='content-Div'>

          <div className='closeBtn-div'>
            <button onClick={()=>setShowViewComponent(false)} className='close-btn'>X</button>
          </div>

         <div className="info-group">

            <div className='info-div-view'>
              <p className='view-label'>Title: </p>
              <p>{expenseToView.title}</p>
            </div>

            <div className='info-div-view'>
              <p className='view-label'>Amount: </p>
              <p>{expenseToView.amount}</p>
            </div>

            <div className='info-div-view'>
              <p className='view-label'>Category: </p>
              <p>{expenseToView.category}</p>
            </div>


            <div className='info-div-view'>
              <p className='view-label'>Date: </p>
              <p>{expenseToView.date}</p>
            </div>

            <div className='info-div-view'>
              <p className='view-label'>Note: </p>
              <p>{expenseToView.note?expenseToView.note:"no note entered"}</p>
            </div>

         </div>

        </div>

        
      </div>
    </>
  )
}

export default ViewComponent