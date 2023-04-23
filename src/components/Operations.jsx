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
    deleteOperation
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
                <h4 className="text-2xl">No match...</h4>
              </>
            ) : (
              <></>
            )}
            {showOperation
              .slice(0)
              .reverse()
              .map((item) => {
                return (
                  <div
                    key={item[0]}
                    className={`${
                      item[1] === "Income" ? "bg-green-200" : "bg-red-200"
                    } text-gray-900 p-4 rounded-xl my-4 flex justify-between`}
                    style={{ maxWidth: "80vw", width: "500px", color: 'white'}}
                  >
                    <div>
                      <div>
                        Type: {item[1]}, Amount: {item[2]}
                        {item[3]}, Explanation: {item[4]}
                      </div>
                      <div className="opacity-50">{`${new Date(item[0])}`}</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div
                        className="m-1 text-lg cursor-pointer"
                        onClick={() => {
                          setShowEditModal(true);
                          setEditId(item[0]);
                          setEnterType(item[1]);
                          setEnterAmount(item[2]);
                          setCurrencyAmount(item[3]);
                          setEnterExplanation(item[4]);
                        }}
                      >
                        <Edit/>
                      </div>
                      <div
                        className="m-1 text-lg cursor-pointer"
                        onClick={() => {
                          deleteOperation(item[0]);
                        }}
                      >
                        <DeleteForever/>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
              </div>
        </section>
    </div>
    </div>
  )
}

export default Operations