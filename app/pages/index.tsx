// pages/index.tsx
import Head from 'next/head';
import LoanForm from '../components/LoanForm';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Loan Prediction</title>
      <meta name="description" content="Loan Prediction Application" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Loan Prediction Form</h1>
      <LoanForm />
    </main>

    <footer>
      {/* Add footer content if needed */}
    </footer>
  </div>
);

export default Home;
