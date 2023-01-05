import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > people.length - 1) {
                index = 0;
            }
            return index;
        });
    }
    const prevSlide = (oldIndex) => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            if (index < 0) {
                index = people.length - 1;
            }
            return index;
        });
    }
    // useEffect(() => {
    //   const lastIndex = people.length - 1;
    //   if (index < 0) {
    //     setIndex(lastIndex);
    //   }
    //   if (index > people.length - 1) {
    //     setIndex(0);
    //   }
    // }, [index, people]);
    // 每次点击按钮之后 都会触发这个setInterval，会导致前端显示紊乱
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 2000);
        return () => clearInterval(slider);
    }, [index]);
    return (
        <section className='section'>
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className='section-center'>
                {people.map((person, personIndex) => {
                    const { id, name, image, title, quote } = person;
                    let position = "nextSlide";
                    if (personIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)) {

                        position = "lastSlide"
                    }
                    return <article key={id} className={position}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                })}
                <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>

        </section>
    );
}

export default App;
