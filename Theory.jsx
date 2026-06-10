import React from 'react';

const Theory = ({ theory, onStartExercises }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Теория</h1>
      
      {/* Video Placeholder */}
      <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center mb-8 border-2 border-dashed border-slate-400">
        <div className="text-center">
          <div className="text-5xl mb-2">📺</div>
          <p className="text-slate-600 font-medium">{theory.videoPlaceholder}</p>
        </div>
      </div>

      <div className="space-y-6">
        {theory.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return (
              <p key={index} className="text-lg text-slate-800 leading-relaxed">
                {item.text}
              </p>
            );
          }
          if (item.type === 'example') {
            return (
              <div key={index} className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-4">
                <p className="text-xl font-mono text-indigo-900 italic">
                  "{item.text}"
                </p>
                {item.caption && (
                  <p className="text-sm text-indigo-600 mt-2 font-medium">
                    — {item.caption}
                  </p>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={onStartExercises}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md transform hover:scale-105"
        >
          Перейти к упражнениям →
        </button>
      </div>
    </div>
  );
};

export default Theory;
