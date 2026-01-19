import "./ExpenseItem.css"

const ExpenseItem = () => {
   return (
       <div className="expense-item">
           <div>Oct 20th 2021</div>
           <div className="expense-item__description">
               <h2>Paid Carpenter</h2>
               <p className="expense-item__price">Rs 75000</p>
           </div>
       </div>
   )
}
export default ExpenseItem;
