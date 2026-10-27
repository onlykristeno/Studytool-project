import './App.css'
import { useState } from 'react'


function App() {

  
  return (
    <main className="study-page">
      <header className="page-heading">
        <p className="page-eyebrow">A LITTLE SPACE TO FOCUS</p>
        <h1>Make room for deep work.</h1>
        <p>Choose your focus, set a goal, and begin at your own pace.</p>
      </header>

      <div className="session-layout">
        <section className="study-section timer-section">
          <div className="section-heading">
            <p className="section-kicker">01 / FOCUS TIME</p>
            <h2>Set your timer</h2>
          </div>
          <p className="timer-display" aria-label="Timer display">
            25<span>:</span>00
          </p>
          <label className="field-label" htmlFor="study-duration">
            Session length
          </label>
          <select className="duration-select" id="study-duration" defaultValue="25">
            <option value="15">15 minutes</option>
            <option value="25">25 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1 hour 30 minutes</option>
            <option value="120">2 hours</option>
          </select>
        </section>

        <section className="study-section goal-section">
          <div className="section-heading">
            <p className="section-kicker">02 / YOUR INTENTION</p>
            <h2>What matters today?</h2>
          </div>
          <label className="field-label" htmlFor="study-goal">
            Write a goal for this session
          </label>
          <textarea
            className="goals-input"
            id="study-goal"
            placeholder="A small, clear goal is a good place to start..."
          />
          <p className="helper-text">Keep it simple. You can always add more later.</p>
        </section>
      </div>

      <section className="study-section methods-section">
        <div className="section-heading">
          <p className="section-kicker">03 / FIND YOUR WAY</p>
          <h2>Choose a study method</h2>
        </div>
        <div className="method-list">
          <label className="method-option">
            <span className="method-copy">
              <span className="method-name">Pomodoro</span>
              <span className="method-description">Focus in short, steady sessions</span>
            </span>
            <input className="method-toggle" type="checkbox" defaultChecked />
          </label>
          <label className="method-option">
            <span className="method-copy">
              <span className="method-name">Feynman Technique</span>
              <span className="method-description">Learn by explaining it simply</span>
            </span>
            <input className="method-toggle" type="checkbox" />
          </label>
          <label className="method-option">
            <span className="method-copy">
              <span className="method-name">Active Recall</span>
              <span className="method-description">Practice remembering from memory</span>
            </span>
            <input className="method-toggle" type="checkbox" />
          </label>
        </div>
      </section>

      <section className="study-section study-space">
        <div className="section-heading">
          <p className="section-kicker">YOUR DESK</p>
          <h2>Study space</h2>
        </div>
        <p className="study-placeholder">Your notes and study materials can live here.</p>
        {/* TODO: Add backend code here when you are ready. */}
      </section>
    </main>
  )
}

export default App
