import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import htmlLogo from "@/components/assets/htmlLogo.png";

/**
 * Modal Component
 * Displays a modal for updating rank, percentile, and score with validation.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls whether the modal is visible
 * @param {Function} props.onClose - Function to close the modal
 * @param {number} props.rank - Initial rank value
 * @param {number} props.percentile - Initial percentile value
 * @param {number} props.correctAns - Initial correct answers value
 * @param {Function} props.setRank - Function to update rank
 * @param {Function} props.setPercentile - Function to update percentile
 * @param {Function} props.setCorrectAns - Function to update correct answers
 * @returns {JSX.Element | null} The modal component or null if not visible
 */
export default function Modal({
  isOpen,
  onClose,
  rank,
  percentile,
  correctAns,
  setRank,
  setPercentile,
  setCorrectAns,
}) {
  // Return null if modal is not open
  if (!isOpen) return null;

  // Temporary state to hold input values
  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempCorrectAns, setTempCorrectAns] = useState(correctAns);

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Validate inputs on change
  useEffect(() => {
    const newErrors = {};

    if (!tempRank) newErrors.rank = "Rank is required.";
    if (!tempPercentile) newErrors.percentile = "Percentile is required.";
    else if (tempPercentile < 0 || tempPercentile > 100)
      newErrors.percentile = "Percentile must be between 0 and 100.";
    if (!tempCorrectAns) newErrors.correctAns = "Score is required.";
    else if (tempCorrectAns < 0 || tempCorrectAns > 15)
      newErrors.correctAns = "Score must be between 0 and 15.";

    setErrors(newErrors);
  }, [tempRank, tempPercentile, tempCorrectAns]);

  // Handlers for input changes
  const handleRankChange = (e) => setTempRank(e.target.value);
  const handlePercentileChange = (e) => setTempPercentile(e.target.value);
  const handleScoreChange = (e) => setTempCorrectAns(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setRank(tempRank);
      setPercentile(tempPercentile);
      setCorrectAns(tempCorrectAns);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Update Scores</h2>
          <Image src={htmlLogo} width={30} height={30} alt="Logo" />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          {/* Rank Input */}
          <div className="mb-6 flex items-center">
            <label htmlFor="rank" className="flex items-center w-3/4 text-lg font-medium">
              <div className="w-6 h-6 mr-3 rounded-full bg-indigo-900 flex items-center justify-center">
                <span className="text-white text-sm">1</span>
              </div>
              Update your <span className="font-bold">Rank</span>
            </label>
            <input
              type="number"
              id="rank"
              className={`border p-2 w-1/4 rounded ${
                errors.rank ? "border-red-500" : "border-indigo-400"
              } outline-none`}
              value={tempRank}
              onChange={handleRankChange}
              min="0"
            />
            {errors.rank && <span className="text-red-500 text-xs">{errors.rank}</span>}
          </div>

          {/* Percentile Input */}
          <div className="mb-6 flex items-center">
            <label htmlFor="percentile" className="flex items-center w-3/4 text-lg font-medium">
              <div className="w-6 h-6 mr-3 rounded-full bg-indigo-900 flex items-center justify-center">
                <span className="text-white text-sm">2</span>
              </div>
              Update your <span className="font-bold">Percentile</span>
            </label>
            <input
              type="number"
              id="percentile"
              className={`border p-2 w-1/4 rounded ${
                errors.percentile ? "border-red-500" : "border-indigo-400"
              } outline-none`}
              value={tempPercentile}
              onChange={handlePercentileChange}
              min="0"
              max="100"
            />
            {errors.percentile && <span className="text-red-500 text-xs">{errors.percentile}</span>}
          </div>

          {/* Score Input */}
          <div className="mb-6 flex items-center">
            <label htmlFor="score" className="flex items-center w-3/4 text-lg font-medium">
              <div className="w-6 h-6 mr-3 rounded-full bg-indigo-900 flex items-center justify-center">
                <span className="text-white text-sm">3</span>
              </div>
              Update your <span className="font-bold">Score (out of 15)</span>
            </label>
            <input
              type="number"
              id="score"
              className={`border p-2 w-1/4 rounded ${
                errors.correctAns ? "border-red-500" : "border-indigo-400"
              } outline-none`}
              value={tempCorrectAns}
              onChange={handleScoreChange}
              min="0"
              max="15"
            />
            {errors.correctAns && <span className="text-red-500 text-xs">{errors.correctAns}</span>}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white border-indigo-900 border font-bold text-indigo-900 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-900 text-white font-bold px-10 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-800"
            >
              Save <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
