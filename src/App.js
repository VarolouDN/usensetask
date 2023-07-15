import {useState,useEffect} from "react"
import './App.css';

function App() {
    const[value,setValue]=useState('')
    const[isEasy,setIsEasy]=useState(false)
    const[isMedium,setIsMedium]=useState(false)
    const[isStrong,setIsStrong]=useState(false)
    const[isInitial,setIsInitial]=useState(false)
    const[isShortPass,setIsShortPass]=useState(false)



   useEffect(()=>{
       let hasLetters=false
       let hasDigits=false
       let hasSymbols=false


       function setParams(param){
           const valuesArr=[setIsEasy,setIsMedium,setIsStrong,setIsInitial,setIsShortPass]
           valuesArr.forEach(elem=>{
               if(elem!==param){
                   elem(false)
               }
           })
       }
       function checkStr(str) {
           if (str.includes('l')) {
               console.log("letter")
               hasLetters = true
           }
           if (str.includes('d')) {
               hasDigits = true
           }
           if (str.includes('s')) {
               hasSymbols = true
           }
       }

       let resultStr=value.replace(/[a-zA-Z]/g, "l").
       replace(/[0-9]/g, "d").replace(/\W/g, "s")


       if(value.length===0 && value===''){
           setIsInitial(true)
           setParams(setIsInitial)

       }
       checkStr(resultStr)

          if(value.length>0 && value.length<8){
              setIsShortPass(true)
             setParams(setIsShortPass)
          }
       else  if(hasLetters && hasDigits && hasSymbols ){
           if (value.length>=8)
           {
               setIsStrong(true)
               setParams(setIsStrong)
           }
       }
       else  if((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)){
           if(value.length>=8) {

               setIsMedium(true)
               console.log("medium")
               setParams(setIsMedium)

           }
       }
       else   if(hasLetters || hasDigits || hasSymbols){
           if(value.length>=8) {

               setIsEasy(true)
               setParams(setIsEasy)

           }
       }



   },[value])


    function onChangeHandler(e) {

        setValue(e.target.value)

    }
  return (
    <div className="app">
        <form className='form'>
     <input value={value} onChange={onChangeHandler} type='password'/>
        </form>
        <div className='sections'>
            <div className={`section ${isShortPass?"shortPass":""} ${isEasy?"red":""} ${isMedium?"yellow":""}
             ${isStrong?"green":""}`} >the password is easy</div>

            <div className={`section ${isShortPass?"shortPass":""} ${isEasy?"grey":""} 
            ${isMedium?"yellow":""} ${isStrong?"green":""}`}>the password is medium</div>

            <div className={`section ${isShortPass?"shortPass":""} ${isEasy?"grey":""} 
            ${isMedium?"grey":""} ${isStrong?"green":""}`}>the password is strong</div>

        </div>
    </div>
  );
}

export default App;
