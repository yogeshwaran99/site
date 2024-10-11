import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import  Hackerrank from '../../assets/hackerrank.png';
import  Leetcode from '../../assets/leetcode.png';
import  Geeksforgeeks from '../../assets/geeksforgeeks.png';
import  Codeforces from '../../assets/codeforces.png';

import './code.css';

import 'swiper/css';
import 'swiper/css/pagination';

const Code = () => {
  const code = [
    {
      id: 1,
      img: Hackerrank,      
      platform: 'HackerRank',
      problemssolved: '142',
      link: 'https://www.hackerrank.com/profile/yogeshwaran99',      
    },
    {
      id: 2,
      img: Leetcode,      
      platform: 'Leetcode',
      problemssolved: '14',
      link: 'https://leetcode.com/u/yogeshwaran99/',
    },
    {
      id: 3,
      img: Geeksforgeeks,      
      platform: 'Geeksforgeeks',
      problemssolved: '236',
      link: 'https://www.geeksforgeeks.org/user/yogeshwaran99/',
    },
    {
      id: 4,
      img: Codeforces,      
      platform: 'Codeforces',
      problemssolved: '17',
      link: 'https://codeforces.com/profile/yogeshwaran99',
    },
  ];

  return (
    <section id="code">
      <h3>Coding Profiles</h3>      
      <Swiper 
        className="container code__container"
        modules={[Pagination]}
        spaceBetween={30} 
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        {code.map((coding) => (
          <SwiperSlide className="code" key={coding.id}>
             <div className="code__img">
                <img src={coding.img} alt={coding.platform} />
              </div>
            <h5 className='code__name'>{coding.platform}</h5>
            <h4 className='code__name'>Problems Solved: {coding.problemssolved}</h4>
            <a
                  href={coding.link}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  visit
                </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Code;
