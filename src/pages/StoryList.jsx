import { Table,Row,Col, Button } from 'reactstrap';
import Header from '../components/Header/Header';
import "./StoryList.css"
import { MainContext, useContext } from "../context";
import StoryListItem from '../components/StoryList/StoryListItem';
import FirstGradeChoose from '../components/FirstGrade/FirstGradeChoose';
import banner from "../assets/banner.png"
import { useNavigate } from 'react-router-dom';

function StoryList() {
  const { grade } = useContext(MainContext);
  const navigate = useNavigate();
  const storyList = [
    [],
    ["UZAY KEŞFİ", "GİZEMLİ ORMAN", "BİLGİ HAZİNESİ", "ACİL DURUM VE YARDIMSEVERLİK", "DOĞRU BESLENME", "GELECEK NESİLLER İÇİN BİR SORUMLULUK", "GERİ DÖNÜŞÜM", "OKUL KURALLARIM", "FARKLILIKLARIMIZ", "MESLEK SEÇİYORUM", "RENKLİ BALIKLARIN MACERASI", "ŞİRİN KEDİ VE UÇAN BALON", "AKILLI KAPLUMBAĞA", "KÜÇÜK ŞEHİRDE BÜYÜK MÜCADELE"],
    ["UZAY YOLCULUĞU", "ORMANDA MACERA", "BÜYÜK YARIŞMA", "BÜYÜK OYUN TURNUVASI", "SANAL GERÇEKLİK MACERASI", "OKUL KURALLARI VE DİSİPLİN", "ÇEVRE BİLİNCİ VE AĞAÇLANDIRMA", "GERİ DÖNÜŞÜM VE YENİDEN KULLANIM", "KARADENİZ BÖLGESİ", "SERBEST SINIF", "YAPAY ZEKA VE ARKADAŞIM ZEKİ", "ZAMANIN GÜCÜ", "DOSTLUK ORMANI", "SİHİRLİ OYUN ALANI", "BÜYÜK OYUN TURNUVASI"],
    ["SAYGI", "TAVŞAN MAVİŞ", "PAMUK", "GİZEMLİ GÖK CİSMİ", "İLGİNÇ FOSİL", "BLOK DÜNYA", "ARENA", "OKUL OLİMPİYATLARI", "SATRANÇ TURNUVASI", "DİJİTAL GÜVENLİK", "ORMAN GEZİSİ","KİTAP HAZİNESİ", "EĞLENCELİ GALAKSİ", "ORMANIN SIRRI", "YILDIZ KALKANI"],
  ]

  const goBack = ()=>{
    navigate("/grades")
  }

  return (
    <main className='storyList'>
      <Header buttons={true} />

      
        <Row>
          <Col xs="12" md="2">
          <a href="https://www.izbilimkoleji.k12.tr" target="_blank" rel="noopener noreferrer">
          <div className="banner">
            <img src={banner} alt="" className='bannerImg'/>
          </div></a>
          </Col>
          <Col xs="12" md="8">
          {grade == 0 ? <FirstGradeChoose/> :
          <div className="storyListContainer">
            <h1 className="listHeading">{grade + 1}. Sınıf Metin Listesi</h1>
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
              {storyList[grade].map((item, index) => (
                <StoryListItem key={index} index={index} story={item} />
              ))}
            </Table>
          </div>}
          </Col>
          <Col xs="12" md="2">
          </Col>
        </Row>
      
    </main>
  )
}

export default StoryList
