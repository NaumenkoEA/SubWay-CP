import h from "./Header.module.css"
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../Images/LOGO.png";
import HeaderTitle from "./HeaderTitle/HeaderTitle.jsx";


const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.container}>
                <div className={h.headerLine}>
                    <div className={h.headerLogo}>
                        <img src={logo} alt=""/>
                    </div>
                    <Navbar/>
                </div>
                <div className={h.headerDown}>
                    <HeaderTitle/>
                </div>
            </div>
        </div>
    )
}

export default Header