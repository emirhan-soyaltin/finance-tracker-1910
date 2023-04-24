import React from 'react'

const Operations = ({
    showOperation,
    setShowEditModal,
    setEditId,
    setEnterType,
    setEnterAmount,
    setCurrencyAmount,
    setEnterExplanation,
    DeleteForever,
    Edit,
    deleteOperation,
    enterType,
    enterExplanation,
    enterAmount,
    selectedCurrency,
    operate
}) => {
  
  return (
    <div >
    <div className='m-0 bg-myblack mx-8 rounded-lg md:bg-cover ' style={{minHeight:'89vh'}} >
        <section className='flex items-center justify-end mt-3 md:pr-2 pt-3' >
            <h4 className='mr-4 py-2 text-white'>Filters:</h4>
            <div className='mr-4'>
                <select name="" id="">
                    <option value="">None</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>
            <div className='mr-4'>
            <input list="currencies" name="currency" id="currency" class="text-center bg-green-600 text-white w-16 cursor-pointer select-all" value="BDT" />
            </div>
            <div className='mr-4'>
            <button className='bg-myred rounded-lg px-4 py-2 text-white'>Clear</button>
            </div>
        </section>
        <section>
        <div className="flex justify-center items-center w-full mt-4">
          <div>
          {showOperation.length === 0 ? (
              <>
                <h4 className="text-2xl text-white">No match...</h4>
              </>
            ) : (
              <>
              <div>
      {showOperation.map((operation, index) => (
        <div key={index}>
          <p>Type: {operation.enterType}</p>
          <p>Amount: {operation.enterAmount}</p>
          <p>Explanation: {operation.enterExplanation}</p>
          <p>Currency: {operation.selectedCurrency}</p>
        </div>
      ))}
    </div>
              </>
            )}
            
               
              </div>
              </div>
        </section>
    </div>
    </div>
  )
}

export default Operations