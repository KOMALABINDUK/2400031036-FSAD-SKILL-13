
import React,{useEffect,useState} from "react";
import axios from "axios";

function App(){

 const [msg,setMsg] = useState("");

 useEffect(()=>{
  axios.get(process.env.REACT_APP_API_URL + "/api/message")
  .then(res=>setMsg(res.data));
 },[]);

 return(
  <div style={{padding:"40px"}}>
   <h2>Full Stack Deployment Demo</h2>
   <h3>{msg}</h3>
  </div>
 );
}

export default App;
