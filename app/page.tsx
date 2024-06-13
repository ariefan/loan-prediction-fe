// pages/index.tsx
import React from 'react';
import LoanForm from './components/LoanForm';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Loan Loan</h1>
      <LoanForm />
    </div>
  );
};

export default Home;
