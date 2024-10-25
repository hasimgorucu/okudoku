import Hece from '../components/FirstGrade/Hece';
import Header from '../components/Header/Header';
import "./FirstGrade.css"
import { Table , Row,Col} from 'reactstrap';
import { useLocation} from 'react-router-dom';
import StoryListItem from '../components/StoryList/StoryListItem';
import banner from "../assets/banner.png"



function FirstGrade() {
    const location = useLocation();
  const receivedData = location.state;
  const harfGrubu = [
    "a, n ,e ,t , i , l", "o", "k", "u", "r", "ı", "m", "ü", "s", "ö", "y", "d", "z", "ç", "b", "g", "c", "ş", "p", "h", "v", "ğ", "f", "j"
  ]
  return (
    <main className="firstGrade">
      <Header />
        <Row>
        <Col xs="12" md="2">
          <a href="https://www.izbilimkoleji.k12.tr" target="_blank" rel="noopener noreferrer">
          <div className="banner">
            <img src={banner} alt="" className='bannerImg'/>
          </div></a>
          </Col>
          <Col xs="12" md="8">
          <div className="firstGradeContainer">
            {receivedData == "hece" ? <Hece/> :

<div className="storyListContainer">
<h1 className="listHeading">1. Sınıf Cümle Listesi</h1>
<Table
>
  <thead>
    <tr>
      <th>
        
      </th>
      <th>
        
      </th>
    </tr>
  </thead>
  {harfGrubu.map((item, index) => (
    <StoryListItem key={index} index={index} story={item == "a, n ,e ,t , i , l" ? "A, N, E, T, İ, L" : item.toUpperCase()} />
  ))}
</Table>
</div>
            
            
            }
        </div>
          </Col>
          <Col xs="12" md="2">
          </Col>
          
        </Row>
        
    </main>
  )
}

export default FirstGrade
