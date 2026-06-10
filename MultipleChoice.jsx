import React, { useState } from 'react';

const MultipleChoice = ({ exercise, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowExplanation(false);
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-slate-700 mb-4">Упражнение {exercise.id}</h2>
      <p className="text-lg text-slate-800 mb-6 font-medium">{exercise.question}</p>

      <div className="space-y-3">
        {exercise.options.map((option, index) => {
          let bgColor = "bg-slate-50 border-slate-200 hover:border-indigo-300";
          if (isSubmitted) {
            if (option.isCorrect) {
              bgColor = "bg-green-100 border-green-500 text-green-800";
            } else if (selectedOption === index) {
              bgColor = "bg-red-100 border-red-500 text-red-800";
            }
          } else if (selectedOption === index) {
            bgColor = "bg-indigo-50 border-indigo-500 text-indigo-700";
          }

          return (
            <button
              key={index}
              disabled={isSubmitted}
              onClick={() => setSelectedOption(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${!isSubmitted ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${selectedOption === null ? 'bg-slate-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            Проверить
          </button>
        ) : (
          <>
            <div className="flex gap-4">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors border border-slate-300"
              >
                {showExplanation ? "Скрыть объяснение" : "Объяснить почему"}
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
              >
                Далее →
              </button>
            </div>
            
            {showExplanation && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 animate-fade-in">
                <p className="font-medium mb-1">💡 Объяснение:</p>
                <p>{exercise.explanation}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MultipleChoice;
