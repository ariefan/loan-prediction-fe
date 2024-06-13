"use client";
import React, { useState } from 'react';
import axios from 'axios';

const LoanForm: React.FC = () => {
  const [formData, setFormData] = useState({
    Gender: '1',
    Married: '1.0',
    Dependents: '0.0',
    Education: '1',
    Self_Employed: '0.0',
    ApplicantIncome: '5849',
    CoapplicantIncome: '0.0',
    LoanAmount: '100.0',
    Loan_Amount_Term: '360.0',
    Credit_History: '1.0',
    Property_Area: '1',
  });
  const [prediction, setPrediction] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/loan/predict/', formData);
        console.log(formData);
        setPrediction(response.data.prediction);
      } catch (error) {
        console.error('Prediction failed:', error);
      }
  };

  return (
    <div>
      <h2>Loan Prediction Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender:
            <select name="Gender" value={formData.Gender} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                <option value="1">Male</option>
                <option value="0">Female</option>
            </select>
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Married:
            <select name="Married" value={formData.Married} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                <option value="1.0">Yes</option>
                <option value="0.0">No</option>
            </select>
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Dependents:
            <input type="number" name="Dependents" value={formData.Dependents} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Education:
            <select name="Education" value={formData.Education} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                <option value="1">Graduate</option>
                <option value="0">Not Graduate</option>
            </select>
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Self Employed:
            <select name="Self_Employed" value={formData.Self_Employed} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                <option value="1.0">Yes</option>
                <option value="0.0">No</option>
            </select>
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Applicant Income:
            <input type="number" name="ApplicantIncome" value={formData.ApplicantIncome} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Coapplicant Income:
            <input type="number" name="CoapplicantIncome" value={formData.CoapplicantIncome} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Loan Amount:
            <input type="number" name="LoanAmount" value={formData.LoanAmount} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Loan Amount Term:
            <input type="number" name="Loan_Amount_Term" value={formData.Loan_Amount_Term} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Credit History:
            <select name="Credit_History" value={formData.Credit_History} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                <option value="1.0">Yes</option>
                <option value="0.0">No</option>
            </select>
            </label>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Property Area:
            <select name="Property_Area" value={formData.Property_Area} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                <option value="1">Urban</option>
                <option value="2">Semiurban</option>
                <option value="3">Rural</option>
            </select>
            </label>
        </div>
        
        <div className="mb-6">
            <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Predict
            </button>
        </div>
        
        <div className="mb-6">            
            {prediction !== null && (
                <p>Prediction: {prediction === 1 ? 'Approved' : 'Not Approved'}</p>
            )}
        </div>
        </form>
    </div>
  );
};

export default LoanForm;
