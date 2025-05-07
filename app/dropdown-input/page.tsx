"use client";
import React, { useState } from 'react';

const leftOptions = [
  { value: 'v2', label: 'V2' },
  { value: 'v3', label: 'V3' },
  { value: 'stable', label: 'Stable' },
];
const rightOptions = [
  { value: 'add', label: 'Add' },
  { value: 'remove', label: 'Remove' },
  { value: 'swap', label: 'Swap' },
];

function processInput(input: string, left: string, right: string): string {
  return `Left: ${left}, Right: ${right}, Input: ${input}`;
}

export default function DropdownInputPage() {
  const [leftSelected, setLeftSelected] = useState(leftOptions[0].value);
  const [rightSelected, setRightSelected] = useState(rightOptions[0].value);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setResult(processInput(value, leftSelected, rightSelected));
  };

  const handleLeftChange = (value: string) => {
    setLeftSelected(value);
    setResult(processInput(inputValue, value, rightSelected));
  };

  const handleRightChange = (value: string) => {
    setRightSelected(value);
    setResult(processInput(inputValue, leftSelected, value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Two Column Checkbox & Input Example</h1>
        <div className="grid grid-cols-2 gap-8 mb-4">
          <div>
            <label className="block mb-2 font-medium">Select Version:</label>
            <div className="flex flex-col gap-2">
              {leftOptions.map((opt) => (
                <label key={opt.value} className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={leftSelected === opt.value}
                    onChange={() => handleLeftChange(opt.value)}
                  />
                  <span className="ml-2">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium">Select Action:</label>
            <div className="flex flex-col gap-2">
              {rightOptions.map((opt) => (
                <label key={opt.value} className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={rightSelected === opt.value}
                    onChange={() => handleRightChange(opt.value)}
                  />
                  <span className="ml-2">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
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