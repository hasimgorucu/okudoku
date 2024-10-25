import { Button } from "reactstrap"
import logo from "../../assets/logo.png"
import Buttons from "./Buttons"
import "./Header.css"
import { useNavigate } from "react-router-dom"
function Header({buttons}) {
    const navigate = useNavigate()

    const handleClassList = (route)=>{
        navigate(route)
    }
    return (
        <header className="header">
            <div className="headerContainer" style={{justifyContent:  "space-between" }}>
               <a href="https://okudoku.com/"> <img src={logo} alt="" /></a>
                {buttons ? <Buttons/> : <div className="buttonContainer">
                    <Button className="custom-btn" color="light" onClick={()=>{handleClassList("/classList")}} > Sınıf Listesi
                    </Button>
                    <Button className="custom-btn" color="light" onClick={()=>{handleClassList("/storyList")}} > Metin Listesi
                    </Button>
                    </div>}
            </div>
        </header>
    )
}

export default Header
