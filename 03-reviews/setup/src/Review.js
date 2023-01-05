import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (newIndex) => {
    if (newIndex > people.length - 1) {
      return 0;
    } else if (newIndex < 0) {
      return people.length - 1;
    } else {
      return newIndex;
    }
  }
  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  }
  const prePerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  }
  const randomPerson = () => {
    setIndex(() => {
      let randomIndex = Math.floor(Math.random() * people.length);
      if (randomIndex === index) {
        randomIndex = index + 1;
      }
      return checkNumber(randomIndex);
    })
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className="person-img" />
        <span className='quote-ico'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <h4 className='info'>{text}</h4>
      <div className='btn-container'>
        <button className='prev-btn' onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
