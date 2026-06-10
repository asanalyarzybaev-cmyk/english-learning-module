import React, { useState } from 'react';

const Translation = ({ exercise, onNext }) => {
  const [userInput, setUserInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setUserInput('');
    setIsSubmitted(false);
    setShowExplanation(false);
    onNext();
  };

  // Basic normalization for comparison
  const normalize = (str) => str.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
  const isCorrect = normalize(userInput) === normalize(exercise.correctAnswer);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-slate-700 mb-4">Упражнение {exercise.id}</h2>
      <p className="text-lg text-slate-800 mb-6 font-medium">{exercise.question}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={isSubmitted}
          placeholder="Введите ваш перевод..."
          className={`w-full p-4 rounded-lg border-2 min-h-[100px] text-lg transition-all outline-none ${
            isSubmitted 
              ? (isCorrect ? 'border-green-500 bg-green-50 text-green-900' : 'border-red-500 bg-red-50 text-red-900')
              : 'border-slate-200 focus:border-indigo-500'
          }`}
        />

        {isSubmitted && !isCorrect && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-semibold text-green-700 mb-1">Правильный вариант:</p>
            <p className="text-green-900 font-mono text-lg">{exercise.correctAnswer}</p>
          </div>
        )}

        <div className="flex flex-col gap-4 mt-6">
          {!isSubmitted ? (
            <button
              type="submit"
              disabled={userInput.trim() === ''}
              className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${
                userInput.trim() === '' ? 'bg-slate-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              Проверить
            </button>
          ) : (
            <>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors border border-slate-300"
                >
                  {showExplanation ? "Скрыть объяснение" : "Объяснить почему"}
                </button>
                <button
                  type="button"
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
      </form>
    </div>
  );
};

export default Translation;
