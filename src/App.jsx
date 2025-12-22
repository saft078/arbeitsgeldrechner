import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

import Termination from './pages/Termination';
import OrganDonation from './pages/OrganDonation';
import HealthInsurance from './pages/HealthInsurance';
import Credit from './pages/Credit';
import Reminder from './pages/Reminder';
import Unemployment from './pages/Unemployment';

// Placeholder Components
const Placeholder = ({ title }) => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-slate-500">Diese Funktion wird gerade entwickelt.</p>
  </div>
);

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arbeitslosengeld" element={<Unemployment />} />
        <Route path="/krankenkasse" element={<HealthInsurance />} />
        <Route path="/kredit" element={<Credit />} />
        <Route path="/kuendigen" element={<Termination />} />
        <Route path="/organspende" element={<OrganDonation />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="*" element={<Placeholder title="404 - Seite nicht gefunden" />} />
      </Routes>
    </Layout>
  );
};

export default App;
