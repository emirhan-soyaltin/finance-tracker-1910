
import React from 'react'



const Sidebar = ({
  setShowEntranceModal,
  setEntranceType,
  setSelectedCurrency,
  validCurrency,
  currencyAmount,
  incomesTotal,
  currencyName,
  expensesTotal,
  selectedCurrency
}) => {
  
  return (
    
    <div className=''>
  <div className='flex flex-col justify-between m-0  md:h-auto  px-4 ml-3 bg-myblack text-white mt-3 rounded-lg max-md:w-4/5 max-md:ml-8 md:min-h-[89vh]'   >
    <div className=''>
      <div className='flex justify-around my-4 '>
        <button className=' w-auto bg-mygreen px-3 py-2 rounded-lg text-sm '
         onClick={() => {
          setShowEntranceModal(true);
          setEntranceType("Income");
        }}
        >
          Add Income
          </button>
        <button className='w-auto bg-myred  px-3 py-2 rounded-lg text-sm '
         onClick={() => {
          setShowEntranceModal(true);
          setEntranceType("Expense");
        }}
        > 
        Add Expense
        </button>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <h4>Base Currency: 
          <span className='ml-2' >
          <input
                  onClick={() => {
                    setSelectedCurrency("");
                  }}
                  list="currencies"
                  name="currency"
                  id="currency"
                  className={`text-center bg-space
                  } text-white w-16 cursor-pointer select-all`}
                  value={selectedCurrency}
                  onChange={(e) => {
                    setSelectedCurrency(e.target.value.toUpperCase());
                  }} />
                  
          </span>
        </h4>
      </div>
      <div className="flex flex-wrap justify-around items-center my-4">
        <div>
          <p className="text-center text-gray-100 ">
            Total Incomes: {incomesTotal} {selectedCurrency}
          </p>
        </div>
        <div>
          <p className="text-center text-gray-100">
            Total Expenses: {expensesTotal} {selectedCurrency}
          </p>
        </div>
      </div>
    </div>
    <div className='text-center p-2 max-md:hidden'> <p>&copy; Finance Tracker</p></div>
  </div>
</div>

  )
}

export default Sidebar