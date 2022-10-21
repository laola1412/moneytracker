import AddModal from "./AddModal"
import Backdrop from "./Backdrop"

export default function Modal(props) {
   return (
      <>
         <Backdrop removeModalHandler={props.removeModalHandler} />
         <AddModal 
            checkInputValidity={props.checkInputValidity}

            modalName={props.modalName}
            modalCategories={props.modalCategories}
            modalAmount={props.modalAmount}
            // modalNotes={modalNotes}
            removeModalHandler={props.removeModalHandler} 
  
            modalNameHandler={props.modalNameHandler}
            modalCategoriesHandler={props.modalCategoriesHandler}
            modalAmountHandler={props.modalAmountHandler}
            // modalNotes={modalNotes}

            modalCanFinish={props.modalCanFinish}
         />
      </>
   )
}
