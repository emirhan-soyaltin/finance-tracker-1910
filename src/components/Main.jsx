import React from 'react'
import Sidebar from './Sidebar'
import Operations from './Operations'
import Navbar from './Navbar'
import EnterModal from './EnterModal'
import EditModal from './EditModal'
import { useState, useEffect } from 'react'
import { DeleteForever, Edit } from '@mui/icons-material'




const Main = ({currencyName, currencyValue, operations, }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyName)
  const [total, setTotal] = useState("")
  const [showEnterModal, setShowEnterModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [incomesTotal, setIncomesTotal] = useState(0)
  const [expensesTotal, setExpensesTotal] = useState(0)
  const [enterType, setEnterType] = useState("")
  const [enterAmount, setEnterAmount] = useState('')
  const [enterExplanation, setEnterExplanation] = useState("")
  const [editId, setEditId] = useState(0)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [validCurrency, setValidCurrency] = useState(true)
  const [totalOperations, setTotalOperations] = useState([])
  const [currencyAmount, setCurrencyAmount] = useState(currencyValue)
  const [showOperation, setShowOperation] = useState([])
  

 
  useEffect(() => {
    let ops = [...operations];
    
    setShowOperation(ops);
    
  }, [operations]);



  useEffect(() => {
    
 
    let totalIncome = operations.reduce((total, item) => {
      if (item.type === "Income") {
        let itemRate = currencyValue.find(value => value[0] === String(item.rate));
        let baseRate = currencyValue.find(value => value[0] === String(currencyName));
        if (!itemRate || !baseRate) {
          
          return total;
        }
        total += (item.amount * Number(baseRate[1])) / Number(itemRate[1]);
      }
      return total;
    }, 0);

    
    let totalExpense = operations.reduce((total, item) => {
      if (item.type === "Expense") {
        let itemRate = currencyValue.find(value => value[0] === String(item.rate));
        let baseRate = currencyValue.find(value => value[0] === String(currencyName));
        if (!itemRate || !baseRate) {
          return total;
        }
        total += (item.amount * Number(baseRate[1])) / Number(itemRate[1]);
      }
      return total;
    }, 0);

   
    setIncomesTotal(totalIncome);
    setExpensesTotal(totalExpense);
    setTotal(totalIncome - totalExpense);
  }, [currencyName, currencyValue, operations]);

  useEffect(() => {
    let valid = true;

    if (enterAmount > 100000 || enterAmount <= 0) {
      valid = false;
    }
    if (!validCurrency) {
      valid = false;
    }
    if (enterExplanation.length < 1 || enterExplanation.length > 20) {
      valid = false;
    }
    setSubmitDisabled(!valid);
  }, [enterAmount, validCurrency, enterExplanation]);

  
    
const setNewOperation = (type, amount, rate, explanation) => {
  const newOperation = { type, amount, rate, explanation };
  setTotalOperations(prevOperations => [...prevOperations, newOperation]);
};

const submitHandler = () => {
  const newOperation = {
    type: enterType,
    amount: Number(enterAmount),
    rate: currencyValue,
    explanation: enterExplanation
  };
    
  setNewOperation(enterType, Number(enterAmount), currencyValue, enterExplanation);
    
  setEnterAmount("");
  setEnterExplanation("");
  setShowEnterModal(false);
};
const editOperation = (id, type, amount, rate, explanation) => {
  const newOperations = totalOperations.map((operation) => {
    if (operation.id === id) {
      return {
        id: id,
        type: type,
        amount: amount,
        rate: rate,
        explanation: explanation,
      };
    } else {
      return operation;
    }
  });
  setTotalOperations(newOperations);
};

const editHandler = () => {
  editOperation(
    editId,
    enterType,
    enterAmount,
    currencyValue,
    enterExplanation
  );
  setEnterAmount("")
  setEnterExplanation("")
  setShowEditModal(false)
}

const deleteOperation = (id) => {
  const newOperations = totalOperations.filter((operation) => operation.id !== id);
  setTotalOperations(newOperations)
}
const handleDelete = (id) => {
  deleteOperation(id)
}

  return (
    <>
      <Navbar 
      total={total}
      selectedCurrency={selectedCurrency}
      />
    <div  className="flex flex-col md:flex-row  m-0 p-0 items-scretch justify-stretch"
         >
        <div style={{flex: '1/3', minWidth: '20%' }}>
        <Sidebar
        setShowEntranceModal={setShowEnterModal}
        setEntranceType={setEnterType}
        setSelectedCurrency={setSelectedCurrency}
        validCurrency={validCurrency}
        currencyAmount={currencyAmount}
        incomesTotal={incomesTotal}
        currencyName={currencyName}
        expensesTotal={expensesTotal}
        selectedCurrency={selectedCurrency}
        />
        
        </div>
    <div style={{flex:'2/3', minWidth: '80%', }}>
    <Operations 
    showOperation={showOperation}
    deleteOperation={deleteOperation}
     setShowEditModal={setShowEditModal}
     setEditId={setEditId}
     setEnterType={setEnterType}
     setEnterAmount={setEnterAmount}
     setCurrencyAmount={setCurrencyAmount}
     setEnterExplanation={setEnterExplanation}
     DeleteForever={DeleteForever}
     Edit={Edit}

    />
    </div>
    
    </div>
    <EnterModal 
    showEnterModal={showEnterModal}
    setShowEnterModal={setShowEnterModal}
    submitHandler={submitHandler}
    submitDisabled={submitDisabled}
    enterType={enterType}
    enterAmount={enterAmount}
    setEnterAmount={setEnterAmount}
    enterExplanation={enterExplanation}
    setEnterExplanation={setEnterExplanation}
    validCurrency={validCurrency}
    setCurrencyAmount={setCurrencyAmount}
    currencyAmount={currencyAmount}
    handleDelete={handleDelete}
    setSelectedCurrency={setSelectedCurrency}
    />
    <EditModal
     showEditModal={showEditModal}
     setShowEditModal={setShowEditModal}
     editHandler={editHandler}
     submitDisabled={submitDisabled}
     enterType={enterType}
     enterAmount={enterAmount}
     setEnterAmount={enterAmount}
     enterExplanation={enterExplanation}
     setEnterExplanation={setEnterExplanation}
     validCurrency={validCurrency}
     setCurrencyAmount={setCurrencyAmount}
     currencyAmount={currencyAmount}
     handleDelete={handleDelete}
    />
    </>
  )
}

export default Main