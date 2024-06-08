import React from 'react';
import './App.css';
import Introduction from './Introduction';
import ProfessionalSummary from './ProfessionalSummary';
import AboutMe from './AboutMe';
import Skills from './Skills'; // Add this line

function App() {
    return (
        <div className="App">
            <Introduction />
            <ProfessionalSummary />
            <AboutMe />
            <Skills />  // Add this line
        </div>
    );
}

export default App;
