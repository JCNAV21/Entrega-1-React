import React, { useState } from "react";
import quotes from "../quotes.json";

const QuoteBox = () => {
    console.log(quotes);

    const random = Math.floor(Math.random() * quotes.length)
    const [index, setIndex] = useState(random)
    //const index =0;
    const changeQuote = () => {
        const newRandom = Math.floor(Math.random() * quotes.length)
        setIndex(newRandom)
    }

    const colors = [
        "#845EC2",
        "#00C9A7",
        "#C4FCEF",
        "#4D8076",
       
    ];
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;


    return (
        <div className="quote-box" style={{ color: colors[randomColor] }}>

            <h1><i className="fa-solid fa-quote-left"></i> {" "}{quotes[index].quote}</h1>

            <h2> {quotes[index].author}</h2>
            <button onClick={changeQuote}><i className="fa-solid fa-greater-than" style={{ color: colors[randomColor] }}></i></button>
        </div>
    );
};

export default QuoteBox;

