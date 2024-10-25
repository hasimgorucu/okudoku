import { useEffect, useState } from 'react';
import { Button, Row, Col, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Header from '../components/Header/Header';
import './Story.css';
import { useLocation, Link } from 'react-router-dom';
import back from "../assets/arrow.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import { useNavigate } from 'react-router-dom';
import { MainContext, useContext } from "../context";
import storyData from "../storyData"
import firstStudent from "../assets/firstStudent.png"
import secondStudent from "../assets/secondStudent.png"
import thirdStudent from "../assets/thirdStudent.png"
import allStudent from "../assets/allStudent.png"



function Story() {
  const location = useLocation();
  const receivedData = location.state;
  const { grade } = useContext(MainContext);

  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [words, setWords] = useState([]);
  const [title, setTitle] = useState("")
  const [clickedWordIndex, setClickedWordIndex] = useState(null);
  const [classList, setClassList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentSpeeds, setStudentSpeeds] = useState({});
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    setWords(storyData[grade][receivedData.index].metin);
  }, []);



  useEffect(() => {
    setTitle(storyData[grade][receivedData.index].baslik);
  }, []);

  useEffect(() => {
    const storedClassList = JSON.parse(localStorage.getItem("classList")) || [];
    setClassList(storedClassList);
  }, []);


  useEffect(() => {
    if (timeLeft > 0 && isTimerActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isTimerActive]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimerActive(false)
      alert("Süreniz Doldu")
    }
  }, [timeLeft])

  const handleWordClick = (index) => {
    if (isTimerActive) return;
    setClickedWordIndex(index);


    const readingSpeed = index + 1;
    setStudentSpeeds({
      ...studentSpeeds,
      [selectedStudent]: readingSpeed,
    });



  };

  const toggleTimer = () => {
    setIsTimerActive(!isTimerActive);
    if (timeLeft <= 0) {
      setTimeLeft(60);
    }
  };

  const navigate = useNavigate();

  const handlePageGo = () => {
    navigate("/storyList");
  };


  const handleStudentClick = (studentName) => {
    setSelectedStudent(studentName);
    setTimeLeft(60);
    setClickedWordIndex(null);
  };


  const sortedStudents = [...classList].sort((a, b) => {
    const speedA = studentSpeeds[a] || 0;
    const speedB = studentSpeeds[b] || 0;
    return speedB - speedA;
  });

  const rozetler = (index) => {
    if (index == 0) {
      return firstStudent;
    } else if (index == 1) {
      return secondStudent;
    } else if (index == 2) {
      return thirdStudent;
    } else {
      return allStudent;
    }
  }


  const selectRandomStudent = () => {
    const remainingStudents = classList.filter(
      (student) => !selectedStudents.includes(student)
    );

    if (remainingStudents.length === 0) {
      setSelectedStudents([]);
      alert("Tüm öğrenciler seçildi! Liste sıfırlanıyor.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingStudents.length);
    const selectedStudent = remainingStudents[randomIndex];

    setSelectedStudents([...selectedStudents, selectedStudent]);
    handleStudentClick(selectedStudent);
  };


  return (
    <div className="stories">
      <Header />
      <Row>
        <Col md="2" xs="12"></Col>
        <Col md="7" xs="12">
          <div className="storyBody">
            <div className="storyBack">
              <Button onClick={handlePageGo} className='backButton'>
                <div className="buttonContainer">
                  <img src={back} alt="" />
                  <span>Metin Listesine Geri Dön</span>
                </div>
              </Button>
              <span>Önce kendiniz ya da rastgele butonuyla bir öğrenci seçin, alttaki sayacı başlatın. Sayaç bittiğinde kaldığınız kelimeye tıklayın! En aşağıdan okunan kelime sayısına bakabilirsiniz</span>
            </div>
            <div className="timerContainer">
              <div className="timer">
                {timeLeft > 0 ? (
                  <h4 className="timeLeft">{timeLeft} saniye</h4>
                ) : (
                  <h4>Süre doldu! Hangi kelimede kaldıysanız üstüne tıklayın!</h4>
                )}
              </div>
              <Button color={isTimerActive ? 'danger' : 'success'} onClick={toggleTimer} disabled={classList.length > 0 ? !selectedStudent : false}>
                <div className="storyButton">
                  <img src={isTimerActive ? pause : play} alt="" />
                  <span>{isTimerActive ? 'DURDUR' : 'BAŞLAT'}</span>
                </div>
              </Button>
            </div>
            <div className="story-content">
              <h2>{title}</h2>
              <p>
                {words.map((word, index) => (
                  <span
                    key={index}
                    style={{
                      cursor: !isTimerActive ? 'pointer' : 'default',
                      color: index <= clickedWordIndex ? 'green' : 'black'
                    }}
                    onClick={() => handleWordClick(index)}
                  >
                    {word}{' '}
                  </span>
                ))}
              </p>
            </div>


            {clickedWordIndex !== null && (
              <div className="result">
                <h5>Okunan kelime sayısı: {clickedWordIndex + 1}</h5>
              </div>
            )}
          </div>
        </Col>

        <Col md="3" xs="12">
          <div className="storyClassList">
            {classList.length === 0 ? (
              <div className='storyCreateList'>
                <h4>Okuma hızına göre sıralama yapmak ve çılgın rozetler kazanmak için sınıf listesi oluşturmak istiyor musunuz?</h4>
                <br></br>
                <Link to="/classList">
                  <span>+</span>
                  <div >Sınıf listesi oluştur</div>
                </Link>
              </div>
            ) : (
              <div className="storyClassListItem">
                <h4>Öğrenci Seçiniz</h4>
                <Button onClick={selectRandomStudent}>Rastgele Öğrenci Seç</Button>
                <ListGroup>
                  {sortedStudents.map((student, index) => (
                    <ListGroupItem
                      key={index}
                      onClick={() => handleStudentClick(student)}
                      style={{ cursor: 'pointer' }}
                      active={selectedStudent === student}
                    >
                      <div className="classListAllContainer">
                        <div className="classListTextContainer">
                          <div className="storyStudentName">{index + 1} {student}</div>
                          <div className="wordCount">(Okunan Kelime Sayısı: {studentSpeeds[student] || '0'})</div>
                        </div>
                        {studentSpeeds[student] ? (
                          <img src={rozetler(index)} alt="Rozet" className='rozet'/>
                        ) : null}
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Story;
