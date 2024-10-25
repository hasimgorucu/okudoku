import { Link } from "react-router-dom"
import "./Grades.css"
function Grades() {
  return (
    <main className="firstGradeChoose">

      <div className='firstGradeChooseContainer'>
        <div className="firstGradeChooseDiv"><Link to={"/storyList"}>Metin Oku</Link></div>
        <div className="firstGradeChooseDiv"><Link to={"/kelimetre"}>
        <div className="gradeTitle">Kelimetre</div>
        <div className="gradeDesc">En çok kullanılan 500 kelime</div>
        </Link></div>
      </div>
    </main>
  )
}

export default Grades
