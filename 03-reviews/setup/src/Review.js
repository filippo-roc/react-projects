import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const changePerson = function (next = true) {
    if (next) {
      setIndex(prevState => {
        let newState = prevState + 1
        if (newState === people.length) newState = 0;
        return newState
      });
    } else {
      setIndex(prevState => {
        let newState;
        if (prevState === 0) newState = people.length - 1;
        else newState = prevState - 1;
        return newState
      });
    }
  }
  const randomPerson = function () {
    const min = 0;
    const max = people.length - 1;
    const newIndex = Math.floor(Math.random() * (max - min + 1) + min)
    setIndex(newIndex);
  }

  return (<article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon"></span>
      <FaQuoteRight />
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'> {job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn'>
        <FaChevronLeft onClick={() => changePerson(false)} />
      </button>
      <button className='next-btn'>
        <FaChevronRight onClick={() => changePerson()} />
      </button>
    </div>
    <button onClick={() => randomPerson()} className='random-btn'>
      surprise me
    </button>
  </article>);
};

export default Review;
