import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardFront}>
        <div className={styles.filledCircle} />
        <div className={styles.emptyCircle} />
        <p className={styles.cardNumber}>{`0000 0000 0000 0000`}</p>
        <p className={styles.cardName}>{`SAAD RASHID`}</p>
        <p className={styles.cardDate}>{`00/00`}</p>
      </div>
      <div className={styles.cardBack}>
        <p className={styles.cvvNo}>{`000`}</p>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputFieldContainer}>
          <label>CARDHOLDER NAME</label>
          <input type="text" placeholder="e.g. SAAD RASHID" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label>CARD NUMBER</label>
          <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
      </div>
    </div>
  );
};

export default App;
