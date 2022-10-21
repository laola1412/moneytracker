import ReactDOM from 'react-dom';

export default function Backdrop(props) {
   return ReactDOM.createPortal(
      <div onClick={props.removeModalHandler} className="fixed h-[100vh] w-[100vw] top-0 left-0 bg-black/20 z-10"></div>, document.getElementById("backdrop-hook")
   )
}