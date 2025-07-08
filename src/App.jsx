import { lazy, Suspense } from 'react';

const Countdown = lazy(() => import('./components/Countdown'));
const ResultPage = lazy(() => import('./components/ResultPage'));
const SurveyForm = lazy(() => import('./components/SurveyForm'));

import '../src/App.css'
function App() {
  return (
    <div style={{ padding: '12px', fontFamily: 'var(--font-stack)' }}>
     <div className="nav">
       <img src="/logo1.svg" loading='lazy' alt="Logo" />

      <h1>Welcome to TheTop36.com</h1>
     </div>
     <div className="mid">
      <Countdown targetDate="2025-08-21T00:00:00Z" />
      <div className="won">
        <ResultPage />
      </div>
      </div>
      <center>
      <p className='info'>TheTop36.com is a digital-vault store that sells curated $7 bundles of public-domain content. Each purchase automatically qualifies the buyer for a promotional 1-in-100 draw that is run each 45 day cycle.</p>
      </center>
      <SurveyForm />
    </div>
  );
}

export default App;