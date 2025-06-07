import { usePersistentState } from '../hooks/usePersistentState';

interface Task {
  text: string;
  done: boolean;
}

const pool = [
  'Пройти сектор 1 на Spa в GT7 в режиме изучения трасс 20 раз',
  'Сделать 3 круга подряд на Mazda MX-5 Cup в Laguna Seca (iRacing)',
  'Пройти 10 км на BMW M2 CS на Okayama (iRacing)',
  '5 чистых кругов на Daytona в Ferrari 296 GT3 (iRacing)',
  '15 минут практики на Suzuka в ACC',
  'Повторить урок по торможению (GT7)',
];

function randomTasks(): Task[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3).map((text) => ({ text, done: false }));
}

export default function DailyTasks() {
  const [tasks, setTasks] = usePersistentState<Task[]>('dailies', randomTasks());

  const toggle = (i: number) => {
    const copy = [...tasks];
    copy[i].done = !copy[i].done;
    setTasks(copy);
  };

  const refresh = () => setTasks(randomTasks());

  return (
    <section>
      <h2 className="text-2xl mb-2">Ежедневные задания</h2>
      <ul className="space-y-1">
        {tasks.map((task, i) => (
          <li key={i} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggle(i)}
              className="accent-accent"
            />
            <span className={task.done ? 'line-through text-gray-400' : undefined}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={refresh}
        className="mt-2 px-3 py-1 bg-accent text-black rounded"
      >
        Обновить дейлики
      </button>
    </section>
  );
}
