import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import "./ClassList.css";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import Footer from '../components/Footer/Footer';

function ClassList() {
  useEffect(() => {
    const oldClassList = JSON.parse(localStorage.getItem("classList")) ? JSON.parse(localStorage.getItem("classList")) : [];
    setClassList(oldClassList);
  }, []);

  const [classList, setClassList] = useState([]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null); 
  const [editValue, setEditValue] = useState(""); 

  
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  
  const handleAdd = () => {
    if (value.trim() !== '') { 
      setClassList([...classList, value.toUpperCase()]);
      setValue('');
    }
  };

  
  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditValue(classList[index]);
  };

  
  const handleSaveEdit = () => {
    if (editValue.trim() !== '') {
      const updatedList = [...classList];
      updatedList[editIndex] = editValue.toUpperCase();
      setClassList(updatedList);
      setEditIndex(null);
      setEditValue("");
    }
  };

  
  const handleDelete = (index) => {
    const updatedList = classList.filter((_, i) => i !== index);
    setClassList(updatedList);
      localStorage.setItem("classList", JSON.stringify(updatedList));
  };

  const navigate = useNavigate();

  
  const handleStorage = () => {
    localStorage.setItem("classList", JSON.stringify(classList));
    navigate('/storyList');
  };

  return (

    <main className="classList">
      <Header buttons={false} />
      
        <Row className="g-3">
          <Col xs="12" md="6">
            <div className="formContainer">
              <FormGroup>
                <Label for="exampleEmail">
                  Öğrencinin Adı - Soyadı:
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  type="text"
                  value={value}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <Button onClick={handleAdd}>EKLE</Button>
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="classListListContainer">
              <ul className="listGroup">
                {classList.map((item, index) => (
                  <li className="listGroupItem" key={index}>
                    <div>
                      {editIndex === index ? (
                        <Input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                        />
                      ) : (
                        item
                      )}
                    </div>
                    <div className="editContainer">
                      {editIndex === index ? (
                        <Button onClick={handleSaveEdit}>Kaydet</Button>
                      ) : (
                        <img src={Edit} alt="Edit" onClick={() => handleEditClick(index)} />
                      )}
                      {editIndex !== index && (
                        <img src={Delete} alt="Delete" onClick={() => handleDelete(index)} />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {classList.length > 0 ? <Button onClick={handleStorage}>KAYDET</Button> : <div></div>}
            </div>
          </Col>
        </Row>
      

    </main>
  );
}

export default ClassList;
