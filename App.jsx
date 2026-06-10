import React, { useState } from 'react';
import { lessonData } from './data/lessonData';
import Theory from './components/Theory';
import MultipleChoice from './components/MultipleChoice';
import Translation from './components/Translation';

function App() {
  const [view, setView] = useState('theory'); // 'theory' or 'exercise'
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleStartExercises = () => {
    setView('exercise');
    setCurrentExerciseIndex(0);
    setIsFinished(false);
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < lessonData.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setView('theory');
    setCurrentExerciseIndex(0);
    setIsFinished(false);
  };

  const currentExercise = lessonData.exercises[currentExerciseIndex];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <header className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{lessonData.title}</h1>
        <p className="text-xl text-slate-600">{lessonData.description}</p>
      </header>

      <main className="max-w-4xl mx-auto">
        {view === 'theory' && (
          <Theory theory={lessonData.theory} onStartExercises={handleStartExercises} />
        )}

        {view === 'exercise' && !isFinished && (
          <div>
            <div className="mb-6 flex justify-between items-center max-w-2xl mx-auto">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Упражнение {currentExerciseIndex + 1} из {lessonData.exercises.length}
              </span>
              <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-300" 
                  style={{ width: `${((currentExerciseIndex + 1) / lessonData.exercises.length) * 100}%` }}
                />
              </div>
            </div>

            {currentExercise.type === 'multiple-choice' ? (
              <MultipleChoice 
                key={currentExercise.id}
                exercise={currentExercise} 
                onNext={handleNextExercise} 
              />
            ) : (
              <Translation 
                key={currentExercise.id}
                exercise={currentExercise} 
                onNext={handleNextExercise} 
              />
            )}
          </div>
        )}

        {isFinished && (
          <div className="max-w-2xl mx-auto p-12 bg-white shadow-xl rounded-2xl text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Модуль пройден!</h2>
            <p className="text-lg text-slate-600 mb-10">
              Вы отлично справились с темой Narrative Present. Теперь вы знаете, как использовать Present Simple для живого повествования о прошлом.
            </p>
            <button
              onClick={handleRestart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg transform hover:scale-105"
            >
              Вернуться к началу
            </button>
          </div>
        )}
      </main>

      <footer className="mt-20 text-center text-slate-400 text-sm">
        © 2024 English Learning Module. Все права защищены.
      </footer>
    </div>
  );
}

export default App;
