import './App.css';
import { Route } from "react-router-dom"
import { useState, useEffect } from "react"

import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import SaldoList from "./components/SaldoList"
import Settings from "./components/Settings"
import AddModal from "./components/AddModal"
import Modal from "./components/Modal"

function App() {
  //moneyflow list
  const [moneyList, setMoneyList] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/moneyflow")
        .then((response) => response.json())
        .then((data) => setMoneyList(data))
  }, [])

  //check input validity on "add"
  const [modalCanFinish, setModalCanFinish] = useState(null);

  const checkInputValidity = flow => {
    if(modalName == "" || modalCategories == "" || modalAmount == ""){
      console.log("Can't process! Inputs not filled!");
      setModalCanFinish(false);
    } else {
      setModalCanFinish(true);
      const newMoneyList = moneyList.concat({
        name: modalName, 
        id: Math.floor(Math.random() * 10000), 
        categories: modalCategories, 
        flow: modalAmount, 
        type: "normal"
      })
      setMoneyList(newMoneyList)

      //reset inputs to empty
      setModalName('')
      setModalCategories('')
      // setModalNotes('')
      setModalAmount('')

      setModalState(false)
    }
  }

  //add in/outflow
  
  console.log(moneyList)

  //modal inputs
  const [modalName, setModalName] = useState("");
  const modalNameHandler = (event) => { 
    setModalName(event.target.value) 
    console.log(event.target.value);
    console.log(event.target.value.length);
    return (event.target.value)
  }

  const [modalCategories, setModalCategories] = useState("");
  const modalCategoriesHandler = (event) => {setModalCategories(event.target.value)}

  const [modalAmount, setModalAmount] = useState("");
  const modalAmountHandler = (event) => {setModalAmount(parseInt(event.target.value))}

  // const [modalNotes, setModalNotes] = useState("");
  // const modalNotesHandler = (event) => {setModalNotes(event.target.value)}

   //modal handler
   const [modalState, setModalState] = useState(false);

  const addModalHandler = () => {
    setModalState(true)
    setModalCanFinish(true)
    console.log("modal set to true!");
  }
  const removeModalHandler = () => {
    setModalState(false)
    setModalCanFinish(true)
    console.log("modal set to false!");
  }

  return (
    <>
      {
        modalState && <Modal
          checkInputValidity={checkInputValidity}

          modalName={modalName}
          modalCategories={modalCategories}
          modalAmount={modalAmount}
          // modalNotes={modalNotes}
          removeModalHandler={removeModalHandler} 

          modalNameHandler={modalNameHandler}
          modalCategoriesHandler={modalCategoriesHandler}
          modalAmountHandler={modalAmountHandler}
          // modalNotes={modalNotes}

          modalCanFinish={modalCanFinish}
        />
      }
      <Sidebar />
      <Route exact path="/">
        <Dashboard 
          addModalHandler={addModalHandler} 
          moneyList={moneyList} 
        />
      </Route>
      <Route exact path="/saldolist">
        <SaldoList moneyList={moneyList} />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      {/* <Route exact path="*">
        <Redirect to="/" />
      </Route> */}
    </>
  );
}

export default App;