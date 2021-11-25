import React from "react"
import Styles from "./NAvbar.module.css"
import Logo from "../../Assets/logo.svg"
import { AiOutlineLogout } from "react-icons/ai"

const Navbar = ()=>{
    return(
        <div className={Styles.majorContainer}>
            <div>
                <img src={Logo} alt="site"/>
                <p style={{fontSize:"30px"}}><b>LINK</b>KEEPER</p>
            </div>
            <div>
                <AiOutlineLogout/>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Navbar;