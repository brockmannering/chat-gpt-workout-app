import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BackButton from './components/BackButton';

interface Trainer {
  name: string;
  age: number;
  history: string;
  specialties: Specialty[];
}

interface Specialty {
  name: string;
  description: string;
}

const trainer: Trainer = {
  name: "John",
  age: 55,
  history: "I used to be overweight and unhappy, but I transformed my life through fitness. Now, I love lifting weights and hanging out with friends at the gym.",
  specialties: [
    {
      name: "Strength training",
      description: "Strength training is the use of resistance to induce muscular contraction, with the goal of building strength, anaerobic endurance, and size of skeletal muscles."
    },
    {
      name: "Balance and mobility",
      description: "Balance and mobility exercises are designed to help seniors maintain their independence and prevent falls by improving balance, coordination, and flexibility."
    },
    {
      name: "Nutrition",
      description: "Nutrition is the science that studies the relationship between food and the body, and how the body uses the nutrients found in food for energy, growth, and repair."
    }
  ],
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Train with John</h1>
          <p>Specializing in training seniors</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section>
                  <h2>About John</h2>
                  <p>{trainer.history}</p>
                </section>
                <section>
                  <h2>Services</h2>
                  <ul>
                    {trainer.specialties.map((specialty) => (
                      <li key={specialty.name}>
                        <Link to={`/${specialty.name}`}>{specialty.name}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            } />
            {trainer.specialties.map((specialty) => (
              <Route key={specialty.name} path={`/${specialty.name}`} element={
                <div>
                  <h2>{specialty.name}</h2>
                  <p>{specialty.description}</p>
                  <BackButton />
                </div>
              } />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
