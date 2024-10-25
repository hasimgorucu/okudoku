
import { Link } from "react-router-dom"
import "./FirstGradeChoose.css"
function FirstGradeChoose() {
  return (
    <main className="firstGradeChoose">
      <div className='firstGradeChooseContainer'>
        <div className="firstGradeChooseDiv"><Link to={"/firstGrade"} state={"hece"}>Hece ve Kelime Oku</Link></div>
        <div className="firstGradeChooseDiv"><Link to={"/firstGrade"} state={"metin"}>Cümle Oku</Link></div>
      </div>
    </main>
  )
}

export default FirstGradeChoose
