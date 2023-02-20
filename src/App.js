import React, { useState } from "react";
import styles from "./App.module.css";
import complete from "./Assets/icon-complete.svg";

const App = () => {
  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [cardNoError, setCardNoError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const [submit, setSubmit] = useState(false);

  const nameChange = (event) => {
    setName(event.target.value.toUpperCase());
  };

  const cardNoChange = (event) => {
    setCardNoError("");
    if (event.target.value.length < cardNo.length) {
      setCardNo(event.target.value);
    } else if (
      event.target.value.length === 4 ||
      event.target.value.length === 9 ||
      event.target.value.length === 14
    ) {
      setCardNo(event.target.value + " ");
    } else {
      setCardNo(event.target.value);
    }
    // setCardNo(event.target.value.toUpperCase());
  };

  const cvcChange = (event) => {
    setCvcError("");
    if (event.target.value < cvc) {
      setCvc(event.target.value);
    } else if (event.target.value < 1000 && event.target.value > 0) {
      setCvc(event.target.value);
    }
  };

  const monthChange = (event) => {
    setMonthError("");
    if (event.target.value < month) {
      setMonth(event.target.value);
    } else if (event.target.value < 13 && event.target.value > 0) {
      setMonth(event.target.value);
    }
  };

  const yearChange = (event) => {
    setYearError("");
    if (event.target.value < year) {
      setYear(event.target.value);
    } else if (event.target.value < 100 && event.target.value > 0) {
      setYear(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (cardNo === "") {
      setCardNoError("Can't be blank");
    } else if (cardNo !== "") {
      let regExp = /[a-zA-Z]/g;
      if (regExp.test(cardNo)) {
        setCardNoError("Wrong format, numbers only");
      }
    }
    if (month === "") {
      setMonthError("Can't be blank");
    }
    if (year === "") {
      setYearError("Can't be blank");
    }
    if (cvc === "") {
      setCvcError("Can't be blank");
    }

    if (
      cardNoError === "" &&
      monthError === "" &&
      yearError === "" &&
      cvcError === "" &&
      name !== "" &&
      cardNo !== "" &&
      month !== "" &&
      year !== "" &&
      cvc !== ""
    ) {
      setSubmit(true);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardFront}>
        <div className={styles.filledCircle} />
        <div className={styles.emptyCircle} />
        <p className={styles.cardNumber}>
          {cardNo === "" ? `0000 0000 0000 0000` : cardNo}
        </p>
        <p className={styles.cardName}>{name === "" ? `SAAD RASHID` : name}</p>
        <p className={styles.cardDate}>{`${
          month === "" ? "00" : month < 10 ? "0" + month : month
        }/${year === "" ? "00" : year < 10 ? "0" + year : year}`}</p>
      </div>
      <div className={styles.cardBack}>
        <p className={styles.cvvNo}>{cvc === "" ? `000` : cvc}</p>
      </div>
      <div className={styles.formContainer}>
        {submit === false && (
          <form onSubmit={submitHandler}>
            <div className={styles.inputFieldContainer}>
              <label>CARDHOLDER NAME</label>
              <input
                type="text"
                placeholder="e.g. SAAD RASHID"
                value={name}
                onChange={nameChange}
              />
            </div>
            <div className={styles.inputFieldContainer}>
              <label>CARD NUMBER</label>
              <input
                type="text"
                placeholder="e.g. 0000 0000 0000 0000"
                value={cardNo}
                onChange={cardNoChange}
                maxLength={19}
                minLength={19}
                style={{
                  borderColor: cardNoError !== "" && "hsl(0, 100%, 66%)",
                }}
              />
              {cardNoError !== "" && (
                <p className={styles.input_error}>{cardNoError}</p>
              )}
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.inputFieldContainer}>
                <label>EXP. DATE (MM/YY)</label>
                <div className={styles.dateFieldContainer}>
                  <input
                    type="number"
                    placeholder="MM"
                    min={1}
                    max={12}
                    onChange={monthChange}
                    value={month}
                    style={{
                      borderColor: monthError !== "" && "hsl(0, 100%, 66%)",
                    }}
                  />
                  <input
                    type="number"
                    placeholder="YY"
                    min={1}
                    max={99}
                    onChange={yearChange}
                    value={year}
                    className={`${styles.yearFieldContainer}`}
                    style={{
                      borderColor: yearError !== "" && "hsl(0, 100%, 66%)",
                    }}
                  />
                </div>
                {(monthError !== "" || yearError !== "") && (
                  <p className={styles.input_error}>{`Can't be blank`}</p>
                )}
              </div>
              <div
                className={`${styles.inputFieldContainer} ${styles.cvcFieldContainer}`}
              >
                <label>CVC</label>
                <input
                  type="number"
                  placeholder="e.g. 123"
                  min={100}
                  max={999}
                  onChange={cvcChange}
                  value={cvc}
                  style={{
                    borderColor: cvcError !== "" && "hsl(0, 100%, 66%)",
                  }}
                />
                {cvcError !== "" && (
                  <p className={styles.input_error}>{cvcError}</p>
                )}
              </div>
            </div>
            <button type="submit" className={styles.btnContainer}>
              Confirm
            </button>
          </form>
        )}
        {submit === true && (
          <div className={styles.completeContainer}>
            <img src={complete} alt="" />
            <p className={styles.thankyou}>THANK YOU!</p>
            <p className={styles.thankMessage}>We've added your card details</p>
            <button
              className={styles.btnContainer}
              onClick={() => {
                setSubmit(false);
                setName("");
                setCardNo("");
                setMonth("");
                setYear("");
                setCvc("");
              }}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
