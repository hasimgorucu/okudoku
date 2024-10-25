import FirstGradeChoose from "../components/FirstGrade/FirstGradeChoose";
import Grades from "../components/Grades/Grades"
import Header from '../components/Header/Header';
import { MainContext, useContext } from "../context";
import "./GradePage.css"
function GradePage() {
const { grade } = useContext(MainContext);

  return (
    <main className="gradepage">
      <Header buttons={true} />
      {grade == 0 ? <FirstGradeChoose/> :  <Grades/>}
    </main>
  )
}

export default GradePage
