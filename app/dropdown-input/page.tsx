"use client";
import React, { useState } from 'react';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function processInput(input: string, dropdownValue: string): string {
  // Example function: concatenate dropdown and input
  return `Selected: ${dropdownValue}, Input: ${input}`;
}

export default function DropdownInputPage() {
  const [dropdownValue, setDropdownValue] = useState(options[0].value);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setResult(processInput(value, dropdownValue));
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setDropdownValue(value);
    setResult(processInput(inputValue, value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Dropdown & Input Example</h1>
        <label className="block mb-2 font-medium">Select an option:</label>
        <select
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={dropdownValue}
          onChange={handleDropdownChange}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <label className="block mb-2 font-medium">Enter text:</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded text-blue-800">
          <span className="font-semibold">Result:</span> {result}
        </div>
      </div>
    </div>
  );
} 