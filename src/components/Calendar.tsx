const schedule = [
  { day: 'Понедельник', task: 'GT7 Time Trial' },
  { day: 'Вторник', task: 'iRacing (гонка + практика)' },
  { day: 'Среда', task: 'Теория / анализ повторов' },
  { day: 'Четверг', task: 'ACC' },
  { day: 'Пятница', task: 'Свободная сессия' },
  { day: 'Суббота', task: 'Длинная тренировка' },
  { day: 'Воскресенье', task: 'Подведение итогов' },
];

export default function Calendar() {
  return (
    <section>
      <h2 className="text-2xl mb-2">Календарь тренировок</h2>
      <div className="grid grid-cols-7 gap-2">
        {schedule.map(({ day, task }) => (
          <div key={day} className="p-2 bg-gray-800 rounded shadow">
            <div className="font-semibold">{day}</div>
            <div className="text-sm text-gray-400">{task}</div>
          </div>
        ))}
      </div>
    </section>
  );
}