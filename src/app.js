import { NavLink, Route, Routes } from 'react-router-dom';
import './app.css';
import AutoBatchingPage from './pages/auto-batching.page';
import TransitionPage from './pages/transition.page';
import SuspensePage from './pages/suspense.page';

function App() {
  return (
    <div id="app">
      <header>
        <NavLink to="/auto-batching">Auto batching</NavLink>
        <NavLink to="/transition">Transition</NavLink>
        <NavLink to="/suspense">Suspense</NavLink>
      </header>
      <Routes>
        <Route path="/auto-batching" element={<AutoBatchingPage />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/suspense" element={<SuspensePage />} />
      </Routes>
    </div>
  );
}

export default App;
