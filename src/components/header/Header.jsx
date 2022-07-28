import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = ({ type }) => {
  const [destination, setdestination] = useState("");
  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setopenOptions] = useState(false);
  const [opetions, setopetions] = useState({
    adult: 1,
    childrens: 0,
    room: 1,
  });
  const handleOptions = (name, operation) => {
    setopetions((prev) => {
      console.log(prev);
      return {
        ...prev,
        [name]: operation === "i" ? opetions[name] + 1 : opetions[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  
  const henldeSearch = () => {
    navigate("/hotel", {state : {destination, date, opetions}});
  }
  console.log(navigate);
  return (
    <>
      <div className="header">
        <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flight</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">A lifetime of discount here..</h1>
              <p className="headerDesc">
                Get rewarded for your travels - unlock instant of 10% or INK
                with a free Lamabook account
              </p>
              <button className="headerBtn">Sign in / Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon className="headerIcon" icon={faBed} />
                  <input
                    type="text"
                    placeholder="where are you going!"
                    className="headerSearchInput"
                    onChange={e => setdestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    className="headerIcon"
                    icon={faCalendarDay}
                  />
                  <span
                    onClick={() => setopenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon className="headerIcon" icon={faPerson} />
                  <span
                    onClick={() => setopenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${opetions.adult} Adult - ${opetions.childrens} Childrens - ${opetions.room} Room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionContainer">
                          <button
                            className="optionCounterButton"
                            disabled={opetions.adult <= 1}
                            onClick={() => handleOptions("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {opetions.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOptions("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Childrens</span>
                        <div className="optionContainer">
                          <button
                            className="optionCounterButton"
                            disabled={opetions.childrens <= 0}
                            onClick={() => handleOptions("childrens", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {opetions.childrens}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOptions("childrens", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionContainer">
                          <button
                            className="optionCounterButton"
                            disabled={opetions.room <= 1}
                            onClick={() => handleOptions("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {opetions.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOptions("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={henldeSearch}>Search</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
