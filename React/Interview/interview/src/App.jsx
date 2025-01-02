// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { FaEyeSlash, FaEye } from "react-icons/fa";
import TogglePassword from './components/TogglePassword';


function App() {
  // const [isPasswordVisible, steIsPasswordVisible] = useState(true)

  // function togglePasswordVisibility(){
  //   steIsPasswordVisible(!isPasswordVisible);
  // };

  return (
    <div>
      <TogglePassword />
    </div>
  )
}

export default App
