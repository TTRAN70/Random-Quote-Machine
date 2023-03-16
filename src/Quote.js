import React from "react";
import "./Quote.css" 
import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaTwitter } from "react-icons/fa";

export default function Quote() {
  const[quote, setQuote] = useState([]);
  const[fading, setFade] = useState(true);
  const fetchData = async () => {
    let indice = Math.floor(Math.random() * 172);
    try {
    const response=await fetch("https://gist.githubusercontent.com/awran5/355643af99164a61ae0f95c84206d151/raw/c62636e8eef7e73540fa04b67f753ca9b95ee21e/quotes-api.js");
    const data=await response.json();
    return setQuote(data[indice]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(fading) {
      setFade(false);
      setTimeout(() => {
        setFade(true);
      }, 10);
    };
  }, [quote])

  useEffect(() => {
    fetchData();
  }, [])

  const makeTweet = () => {
    let text = String(quote.quote);
    let replace = text.replaceAll(" ", "%20");
    return replace;
  }

  const makeAuthor = () => {
    let author = String(quote.author); 
    let change = author.replaceAll(" ", "%20");
    return change;
  }

  return (
    <div id="quote-box" className="qContainer"> 
      <div id="text" className={`${fading ? "fade" : ""}`}> 
       {quote.quote}
      </div>
      <div id="author" className={`${fading ? "authorfade" : ""}`}> 
        -{quote.author}
      </div>
      <button id="new-quote" className="generateButton" type="button" onClick={() => fetchData()}>Generate Quote  <FaArrowCircleRight /></button>
      <div className="tweet"> 
        <a target="_blank" id="tweet-quote" className="ticon" href={`https://twitter.com/intent/tweet?text="${makeTweet()}"%20${makeAuthor()}`} id="tweet-quote"><FaTwitter /></a>
      </div>
    </div>
  );
}