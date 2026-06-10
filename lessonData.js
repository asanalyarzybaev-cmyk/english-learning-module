export const lessonData = {
  title: "Present Simple не для нубов",
  description: "В этом уроке вы изучите как правильно использовать Present Simple и стать в разы эффективнее чем natives.",
  theory: {
    videoPlaceholder: "Здесь будет видео-урок",
    content: [
      {
        text: "Вы знали что Present Simple может служить для таких вещей как narrative tense?",
        type: "paragraph"
      },
      {
        text: "Чтобы понять насколько это вау нужно разобраться что такое narrative tense и зачем он нам нужен. Narrative tense - это пакет времен, который состоит из 4 времен для описания действий в прошлом: Past Simple, Past Continuous, Past Perfect и Past Perfect Continuous.",
        type: "paragraph"
      },
      {
        text: "Например, чтобы описать действие, которое произошло ДО другого действия в прошлом (Past Simple), вам нужно использовать Past Perfect:",
        type: "paragraph"
      },
      {
        text: "When I got home, I remembered I had forgotten my keys in the car.",
        type: "example",
        caption: "Стандартный Narrative Tense (Past)"
      },
      {
        text: "А теперь применим метод 'Present Simple не для нубов'. Мы превращаем это предложение в:",
        type: "paragraph"
      },
      {
        text: "When I get home yesterday, I remember I forgot my keys in the car.",
        type: "example",
        caption: "Present Simple как Narrative Tense"
      },
      {
        text: "Заметили, что произошло? Мы использовали Present Simple и Past Simple. Но зачем здесь Past Simple?",
        type: "paragraph"
      },
      {
        text: "Сначала найдем триггер-слово — 'yesterday'. После него собеседник понимает, что речь о прошлом. Далее мы сдвигаем времена на один шаг вперед: там, где был Past Simple, становится Present Simple. А там, где был Past Perfect (действие до основного), становится Past Simple.",
        type: "paragraph"
      }
    ]
  },
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "Выберите правильный вариант в Narrative Present: 'Yesterday, I walk into the room and I realize I ___ my phone at work.'",
      options: [
        { text: "had left", isCorrect: false },
        { text: "left", isCorrect: true },
        { text: "leave", isCorrect: false }
      ],
      explanation: "В Narrative Present мы сдвигаем времена. То, что в обычном прошлом было бы Past Perfect (had left), здесь становится Past Simple (left), потому что основное повествование идет в Present Simple (walk, realize)."
    },
    {
      id: 2,
      type: "translation",
      question: "Переведите на английский, используя Narrative Present: 'Вчера я прихожу домой и вспоминаю, что забыл ключи.'",
      correctAnswer: "Yesterday I come home and remember I forgot the keys",
      explanation: "Мы используем 'come' и 'remember' в Present Simple для живости повествования, а 'forgot' в Past Simple показывает действие, которое произошло ранее."
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "Какое время заменяет Past Perfect в методе 'Present Simple не для нубов'?",
      options: [
        { text: "Present Simple", isCorrect: false },
        { text: "Past Simple", isCorrect: true },
        { text: "Present Perfect", isCorrect: false }
      ],
      explanation: "При использовании Present Simple как нарративного времени, предшествующие действия (которые обычно выражаются через Past Perfect) выражаются через Past Simple."
    }
  ]
};
