import React from 'react';
import Header from './components/Header/Header';
import HeroBannerSection from './components/HeroBannerSection/HeroBannerSection';
import GameLuckySection from './components/GameLuckySection/GameLuckySection';
import PlayerStatsSection from './components/PlayerStatsSection/PlayerStatsSection';
import NewsSection from './components/NewsSection/NewsSection';
import NewCustomerSection from './components/NewCustomerSection/NewCustomerSection';
import LineSeparator from './components/shared/LineSeparator/LineSeparator';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="main">
        <HeroBannerSection />
        <LineSeparator />
        <GameLuckySection />
        <LineSeparator />
        <PlayerStatsSection />
        <LineSeparator />
        <NewsSection />
        <LineSeparator />
        <NewCustomerSection />
      </main>
    </div>
  );
}

export default App;
