import React from 'react';
import quotes from '../quotes.json';
import {useState} from 'react';


    const QuoteBox = () => {
    const [i, setI] = useState(Math.floor(Math.random() * quotes.length));
    const changeQuote = () => {
        setI(Math.floor(Math.random() * quotes.length));
    }
    const colors = [
            "#790252",
            "#0F3460",
            "#624F82",
            "#9F73AB",
            "#735F32",
            "#3F4E4F"
          ];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;

    return (
        <div className='countainer-quotes'>
            <p>{quotes[i].quote}</p>
            <h1>{quotes[i].author}</h1>
            <button onClick={changeQuote}>
                <i className="fa-regular fa-circle-play" id='icon-play'></i>
            </button>
        </div>
    );
};

export default QuoteBox;