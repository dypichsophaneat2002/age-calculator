import './App.css';
import {useState} from "react";
import Form from './Form';
import Calculate from './Calculate';
import Result from './Result';
function App() {
  const [day, setDay] = useState("");
  const [isEmpty1, setEmpty1] = useState(false);
  const [month, setMonth] = useState("");
  const [isEmpty2, setEmpty2] = useState(false);
  const [year, setYear] = useState("");
  const [isEmpty3, setEmpty3] = useState(false);
  const [warningText, setWarningText] = useState("");
  const [warningText2, setWarningText2] = useState("");
  const [warningText3, setWarningText3] = useState("");
  const [calYears, setCalYears] = useState("");
  const [calMonths, setCalMonths] = useState("");
  const [calDays, setCalDays] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "day") {
      setDay(e.target.value);
    }
    if (e.target.name === "month") {
      setMonth(e.target.value);
    }
    if (e.target.name === "year") {
      setYear(e.target.value);
    }
  }
  const handleClick = () => {
    setEmpty1(false);
    setEmpty2(false);
    setEmpty3(false);
    setWarningText("");
    setWarningText2("");
    setWarningText3("");
    setCalDays("");
    setCalMonths("");
    setCalYears("");
    console.log("The button is clicked;")
    if (day === "") {
      setEmpty1(true); 
      setDay("");
    } else if (day > 31 || day < 1) {
      setWarningText("Incorrect input")
      setDay("");
      return;
    }
    if (month === "") {
      setEmpty2(true);
    } else if (month < 1 || month > 31) {
      setWarningText2("Incorrect input");
      setMonth("");
      return;
    }
    if (year === "") {
      setEmpty3(true);
    } else if (year.length < 4 || year.length > 4) {
      setWarningText3("Incorrect input");
      return;
    }
    if (day || year || month){
        let date1 = new Date();
        let date2 = new Date(`${year}-${month}-${day}`);
        let difference = date1 - date2;
        setCalYears(Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25)));
        setCalMonths(Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44))+1);
        setCalDays(Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)));
    }
  }
  return (
    <div className="content-div">
      <Form day={day} month={month} year={year} isEmpty1={isEmpty1} warningText={warningText} isEmpty2={isEmpty2} warningText2={warningText2} warningText3={warningText3} isEmpty3={isEmpty3} handleChange={handleChange} />
      <Calculate handleClick={handleClick}/>
      <Result day={calDays} month={calMonths} year={calYears} />
    </div>
  );
}

export default App;
