import React from 'react';
import styles from './NewsSection.module.css';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import NewsCarouselImage from '../../assets/images/NewsCarouselImage.jpg';
import data from '../../data/data.json';

const NewsSection = () => {
  const { news } = data;


  return (
    <section className={styles.newsSection}>    
        <SectionTitle title="Latest News" />
      <div className={styles.newsCarouselContainer}>
        <div className={styles.newsCarousel}>
        {news.map((item) => (
            <a href="#" className={styles.newsCard} key={item.id}>
            <div 
                className={styles.newsImageContainer} 
                style={{ backgroundImage: `url(${NewsCarouselImage})` }}
            >
                <div className={styles.newsImageOverlay}></div>
            </div>
            <div className={styles.newsContent}>
                <span className={styles.newsTag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
            </a>
        ))}
      </div>
      </div>
    </section>
  );
};

export default NewsSection;
