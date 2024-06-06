import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm() {

  const [pickUpDate, setPickUpDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [pickUpOpen, setPickUpOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);
  const [expiryDate, setExpiryDate] = useState(false);
  const [expiryOpen, setExpiryOpen] = useState(false);

  const handleDateChange = (date, dateType) => {
    if (dateType === "pickUp") {
      setPickUpDate(date);
      setPickUpOpen(false);
    } else if (dateType === "return") {
      setReturnDate(date);
      setReturnOpen(false);
    } else if (dateType === "expiry") {
      setExpiryDate(date);
      setExpiryOpen(false);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    console.log(currentSlide)
  };
  return (
    <div className="wrapper">
      <div className="main">
        <div id="header">
          <h2>Book Now</h2>
          <p>Required fields are followed by *</p>
        </div>
        <div id="divider"></div>
        <div className="form">
          <div className="carousel">
            <div
              className="carousel-inner"
              style={{
                transform: `translateX(${currentSlide * -100}%)`,
              }}
            >
              <div className="item">
                {/* Pick up dates */}
                <div className="age margin">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="age"
                    aria-describedby="helper-text-explanation"
                    placeholder="John "
                  />
                </div>
                {/* Return dates */}
                <div className="age margin">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="age"
                    aria-describedby="helper-text-explanation"
                    placeholder="Doe"
                  />
                </div>
                {/* Age */}
                <div className="age margin">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="age"
                    aria-describedby="helper-text-explanation"
                    placeholder="Phone Number"
                  />
                </div>
                {/* children */}
                <div className="children margin">
                  <label
                    htmlFor="children"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Gender
                  </label>
                  <select
                    id="children"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option value="0">
                      Select your Gender
                    </option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Rather not say</option>
                  </select>
                </div>
              </div>
              <div className="item">
                <div className="date margin">
                  <label htmlFor="pickUp">Pick-Up date</label>
                  <div className="date-picker-container" id="pickUp">
                    <button
                      className="select-button"
                      onClick={() => setPickUpOpen(!pickUpOpen)}
                    >
                      {pickUpDate
                        ? pickUpDate.toLocaleDateString()
                        : "Select Date"}
                      <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/plumpy/24/calendar--v1.png"
                        alt="calendar--v1"
                      />
                    </button>
                    {pickUpOpen && (
                      <div className="date-picker">
                        <DatePicker
                          selected={pickUpDate}
                          onChange={(date) => handleDateChange(date, "pickUp")}
                          onClickOutside={() => setPickUpOpen(false)}
                          inline
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="date margin">
                  <label htmlFor="return">Return date</label>
                  <div className="date-picker-container" id="return">
                    <button
                      className="select-button"
                      onClick={() => setReturnOpen(!returnOpen)}
                    >
                      {returnDate
                        ? returnDate.toLocaleDateString()
                        : "Select Date"}
                      <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/plumpy/24/calendar--v1.png"
                        alt="calendar--v1"
                      />
                    </button>
                    {returnOpen && (
                      <div className="date-picker">
                        <DatePicker
                          selected={returnDate}
                          onChange={(date) => handleDateChange(date, "return")}
                          onClickOutside={() => setReturnOpen(false)}
                          inline
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="age margin">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="1"
                  />
                </div>
                <div className="children margin">
                  <label
                    htmlFor="children"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Children
                  </label>
                  <select
                    id="children"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option value="0">
                      0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
              </div>
              <div className="item">
                <div className="age margin">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="age"
                    aria-describedby="helper-text-explanation"
                    placeholder="1234-5673-8372-9853"
                  />
                </div>
                <div className="date margin">
                  <label htmlFor="pickUp">Expiry date</label>
                  <div className="date-picker-container" id="pickUp">
                    <button
                      className="select-button"
                      onClick={() => setExpiryOpen(!expiryOpen)}
                    >
                      {expiryDate
                        ? expiryDate.toLocaleDateString()
                        : "Select Date"}
                      <img
                        width="24"
                        height="24"
                        src="https://img.icons8.com/plumpy/24/calendar--v1.png"
                        alt="calendar--v1"
                      />
                    </button>
                    {expiryOpen && (
                      <div className="date-picker">
                        <DatePicker
                          selected={expiryDate}
                          onChange={(date) => handleDateChange(date, "expiry")}
                          onClickOutside={() => setExpiryOpen(false)}
                          inline
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="age margin">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="age"
                    aria-describedby="helper-text-explanation"
                    placeholder="John Doe"
                  />
                </div>
                <div className="age margin">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    CVV Number
                  </label>
                  <input
                    type="text"
                    id="age"
                    aria-describedby="helper-text-explanation"
                    placeholder="cvv number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btns margin">
            <button onClick={handlePrev} disabled={currentSlide === 0}>Previous</button>
            <button className="next" onClick={handleNext} disabled={currentSlide === 2}>
              Next
            </button>
          </div>
        </div>
      </div>
      {/* <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(${currentSlide * -100}%)`,
          }}
        >
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div> */}
{/* 
      <div className="main">
        <div id="header">
          <h2>Book Now</h2>
          <p>Required fields are followed by *</p>
        </div>
        <div id="divider"></div>
        <div className="form">
          <div className="btns margin">
            <button onClick={goToPrevSlide}>Previous</button>
            <button className="next" onClick={goToNextSlide}>
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="main">
        <div id="header">
          <h2>Book Now</h2>
          <p>Required fields are followed by *</p>
        </div>
        <div id="divider"></div>
        <div className="form">
          <div className="btns margin">
            <button onClick={goToPrevSlide}>Previous</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default BookingForm;
