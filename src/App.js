import { useState } from 'react';
import './App.css';					

function App() {

    const [fruit, setFruit] = useState('')
    const [inputText, setInputText] = useState('')


    const changeWhereToGo = (event) => {
        setInputText(event.target.value)
    }

    function search() {
        fetch(`https://server-el43.onrender.com/${inputText}`)
            .then(response => response.text())
            .then(data => {setFruit(data)})
            .catch(error => console.error('Fetch error:', error));
    }

    return (
        <div className="App">
            <div>果物を入力してください！</div>
            <input 
            type='text'
            value={inputText}
            onChange={changeWhereToGo}>
            </input>
            <button onClick={search}>search</button>
            <div>{fruit}</div>
        </div>
    );
}

export default App;