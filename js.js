function MinutesToHours() {
    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (event) => setAmount(event.target.value);
    const reset = () => setAmount("");
    const onFlip = () => {
      setFlipped((current) => !current);
      reset();
    };
    return (
      <div>
        <div>
          <label htmlFor="minutes">Minutes</label>
          <input
            value={!flipped ? amount : Math.round(amount * 60)}
            id="minutes"
            placeholder="Minutes"
            type="number"
            onChange={onChange}
            disabled={flipped}
          />
        </div>
        <div>
          <label htmlFor="hours">Hours</label>
          <input
            value={flipped ? amount : Math.round(amount / 60)}
            id="hours"
            placeholder="Hours"
            type="number"
            disabled={!flipped}
            onChange={onChange}
          />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{flipped ? "Flipped" : "Flip"}</button>
      </div>
    );
  }
  function KmToMiles() {
    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (event) => setAmount(event.target.value);
    const reset = () => setAmount("");
    const onFlip = () => {
      setFlipped((current) => !current);
      reset();
    };
    return (
      <div>
        <div>
          <label htmlFor="minutes">KM</label>
          <input
            value={!flipped ? amount : amount / 0.621371}
            id="minutes"
            placeholder="KM"
            type="number"
            onChange={onChange}
            disabled={flipped}
          />
        </div>
        <div>
          <label htmlFor="hours">Miles</label>
          <input
            value={flipped ? amount : amount * 0.621371}
            id="hours"
            placeholder="Miles"
            type="number"
            disabled={!flipped}
            onChange={onChange}
          />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{flipped ? "Flipped" : "Flip"}</button>
      </div>
    );
  }
  function WonToDollar() {
    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (event) => setAmount(event.target.value);
    const reset = () => setAmount("");
    const onFlip = () => {
      setFlipped((current) => !current);
      reset();
    };
    return (
      <div>
        <div>
          <label htmlFor="minutes">Won</label>
          <input
            value={!flipped ? amount : amount * 1198.39}
            id="minutes"
            placeholder="Won"
            type="number"
            onChange={onChange}
            disabled={flipped}
          />
        </div>
        <div>
          <label htmlFor="hours">Dollar</label>
          <input
            value={flipped ? amount : amount / 1198.39}
            id="hours"
            placeholder="Dollar"
            type="number"
            disabled={!flipped}
            onChange={onChange}
          />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{flipped ? "Flipped" : "Flip"}</button>
      </div>
    );
  }
  function App() {
    const [index, setIndex] = React.useState("-1");
    const onSelect = (event) => {
      setIndex(event.target.value);
    };

    return (
      <div>
        <h1>Super Converter</h1>
        <select value={index} onChange={onSelect}>
          <option value="-1">Select your units</option>
          <option value="0">Minutes & Hours</option>
          <option value="1">KM & Miles</option>
          <option value="2">Won & Dollar</option>
        </select>
        <hr />
        {index === "-1" ? (
          "Please select your units"
        ) : index === "0" ? (
          <MinutesToHours />
        ) : index === "1" ? (
          <KmToMiles />
        ) : index === "2" ? (
          <WonToDollar />
        ) : null}
      </div>
    );
  }
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);