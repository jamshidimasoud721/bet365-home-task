import React, { useState } from 'react';
import styles from './PlayerStatsSection.module.css';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import LinkButton from '../shared/LinkButton/LinkButton';
import chevronIcon from '../../assets/icons/SportsPlayerStatsChevron.svg';
import flag1 from '../../assets/icons/Flag1.svg';
import flag2 from '../../assets/icons/Flag2.svg';
import flag3 from '../../assets/icons/Flag3.svg';
import flagGrey from '../../assets/icons/FlagGrey.svg';
import data from '../../data/data.json';

const flagMap = {
  flag1,
  flag2,
  flag3,
  flagGrey
};

const PlayerStatsSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [expanded, setExpanded] = useState(false);

  const tabs = ['All', 'Forwards', 'Midfielders', 'Defenders', 'Goalkeepers'];
  
  const players = data.players.map(player => ({
    ...player,
    flag: flagMap[player.flag]
  }));

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContent}>
        <SectionTitle title="Player Stats" />
      <div className={styles.tabsScrollContainer}>
        <div className={styles.tabs}>
            {tabs.map(tab => (
            <button 
                key={tab} 
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
            ))}
        </div>
      </div>
      
      <div className={styles.playerList}>
        {players.map((player, index) => (
          <details key={index} className={styles.playerDetails} name="player-stats-accordion">
            <summary className={styles.playerSummary}>
              <div className={styles.playerInfo}>
                <span className={styles.playerRole}>{player.role}</span>
                <span className={styles.playerName}>
                  {player.name} 
                  <img src={chevronIcon} className={styles.arrowDown} alt="chevron icon" />
                </span>
              </div>
              <img src={player.flag} className={styles.flag} alt={`Flag of ${player.name}`} />
            </summary>
            <div className={styles.playerStatsContent}>
                <p>Player statistics for {player.name} will appear here.</p>
            </div>
          </details>
        ))}
      </div>
      
      <button 
        type="button"
        className={styles.showMore} 
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>Show More</span>
        <img src={chevronIcon} className={`${styles.chevron} ${expanded ? styles.expanded : ''}`} alt="chevron icon" />
      </button>
      
      <div className={styles.actionContainer}>
        <LinkButton href="#" variant="yellow" title="See player markets" />
      </div>
      </div>
    </section>
  );
};

export default PlayerStatsSection;
