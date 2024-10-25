import { Button } from "reactstrap"
import "./Buttons.css"
import { MainContext, useContext } from "../../context";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const {setGrade,grade} = useContext(MainContext);
  const handleChangeGrade = (item)=>{
    setGrade(item)
  }

  const navigate = useNavigate();

  const handleGo = ()=>{
    navigate("/kelimetre")
  }

  return (
    <div className="headerButtons">
      <Button className="headerButton" color={grade == 0 ? "secondary" : "light"} onClick={()=>handleChangeGrade(0)}>1. Sınıf</Button>
      <Button className="headerButton" color={grade == 1 ? "secondary" : "light"} onClick={()=>handleChangeGrade(1)}>2. Sınıf</Button>
      <Button className="headerButton" color={grade == 2 ? "secondary" : "light"} onClick={()=>handleChangeGrade(2)}>3. Sınıf</Button>
      <Button className="headerButton" color={grade == 3 ? "secondary" : "light"} onClick={()=>handleChangeGrade(3)}>4. Sınıf</Button>
      <Button className="headerButton" color={"secondary"} onClick={handleGo}>Kelimetre</Button>
    </div>
  )
}

export default Buttons
