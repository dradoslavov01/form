import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [result, setResult] = useState(null);

  useEffect(() => {

  }, [result])

  const onChangeHandler = (e) => {
    const value = e.target.value;
    if (value !== '') {
      axios.post('/nums', { value });
      
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
  

      axios.get('/calc')
        .then(res => {
          console.log(res.data);
          const [a, b] = res.data;
          const num1 = Number(a.number);
          const num2 = Number(b.number);
          setResult((num1 + num2) / 2);
        });
  }


  return (
    <div className="App">
      <form autoComplete="off" onSubmit={onSubmitHandler}>
        <label htmlFor="num1">First Number</label>
        <input id="num1" type="text" name="num1" onChange={onChangeHandler} />
        <label htmlFor="num2">First Number</label>
        <input id="num2" type="text" name="num2" onChange={onChangeHandler} />
        <label htmlFor="result">Result</label>
        <input id="result" type="text" name="result" defaultValue={result} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
