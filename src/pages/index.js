
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/navbar'
import TextField from '@mui/material/TextField';
import EastIcon from '@mui/icons-material/East';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';

export default function Home() {
  const [inputBlur,setInputBlur] = useState(false)
  const [themeSwitch,setThemeSwitch] = useState(false)
  const [inputValue,setInputValue] = useState("")
  const [ErrorMsg,setErrorMsg] = useState(false)
  const [errorForEmail,setErrorForEmail] = useState("")
  const handleInputBlur = () =>{
    setInputBlur(true)
  }

  const handleInputFocus = () => {
    setInputBlur(false)
    setErrorMsg(false)
    setErrorForEmail("")
  }

  const handleInputChange = (e) => {
    console.log("event",e.target.value)
    setInputValue(e.target.value)
  }
  const handleEmailSubmit = (e) => {
    e.preventDefault()

    
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(inputValue.length == 0){
    setErrorMsg(true)
    setErrorForEmail("")
  }
  else if(inputValue.length > 0){
    setErrorMsg(false)
    if(emailRegEx.test(inputValue)){
      setErrorForEmail("success")
    }else{
      setErrorForEmail("failure")
    }
  }
  
  }


  return (
    <div id={themeSwitch ? 'homepage' : "homepage2"}>
      <Navbar
        themeSwitch={themeSwitch}
        setThemeSwitch ={setThemeSwitch}
      />
      
      

      <h1 id="Email-text">Email Checker or Email Verification </h1>

      <p id='Email-bodytext'>Are you looking to check if an email address is valid and Ensure you have an valid email address?</p> 
      <p id='Email-bodytext'>You've come to the right place!</p>

      <div>
      
        <div id="email-box">
          
          <TextField id={themeSwitch ? "email-textfield2" : 'email-textfield'} label={themeSwitch ? "" : "Enter Your Email"} variant="outlined" placeholder={ (themeSwitch && inputBlur) ? 'Enter Your Email' : inputBlur == true ? "" : "Enter Your Email"} value={inputValue} onBlur={handleInputBlur} onFocus={handleInputFocus} onChange={handleInputChange}/>
          
          <button type="submit" id='arrow-button' className="btn mb-2" onClick={handleEmailSubmit}>
            <div id="verify-input">
              Verify <EastIcon id="arrow-icon" />
            </div>
            
          </button>
          
          
        </div>
      </div>
      
        
      {ErrorMsg && 
      <Alert id='alert-Error' severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Please Enter A Valid Email! — <strong>check it out!</strong>
      </Alert>}
      {errorForEmail == "success"&&
      <Alert id='alert-Error' severity="success">
        <AlertTitle>Success</AlertTitle>
        This email is VALID  — <strong>success!</strong>
      </Alert>}
      {errorForEmail == "failure" &&
      <Alert id='alert-Error' severity="error">
        <AlertTitle>Failure</AlertTitle>
        This email is INVALID — <strong>check it out!</strong>
      </Alert>

      

      }
      <p id="copyrights">© 2015-2023 All Rights Reserved. Hunter® is a registered trademark of Hunter Web Services, Inc.</p>
      <button id='myinstagramid'>
        <a id='instagram' href="https://instagram.com/im_tamilvanan?igshid=ZDdkNTZiNTM=">
          <p id="instagramLink"> <InstagramIcon/>Instagram </p>
        </a>
      </button>
    </div>
  )
}
