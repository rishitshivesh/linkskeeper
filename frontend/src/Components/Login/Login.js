import React, { useState } from "react"
import Logo from '../../Assets/logo.svg'
import style from './Login.module.css'
import {MdOutlinePersonOutline} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai"

function Login() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const Login=()=>{
        
            name:;
        
    }
    return (
        <div className={style.Logincontainer}>
            <div className={style.logo}>
                <img src={Logo} alt="site"/>
                <p style={{fontSize:"30px"}}><b>LINK</b>KEEPER</p>
            </div>
            <div className={style.form}>
                <div className={style.holder}><MdOutlinePersonOutline/><input className={style.name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/></div>
                <div className={style.holder}><AiOutlineMail/><input className={style.name} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/></div>
                <button onClick={()=>{
                    Login()
                }}>
                    Submit                    
                </button>
            </div>
            
        </div>
    )
}

export default Login
