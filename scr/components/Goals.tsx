import { usePersistentState } from '../hooks/usePersistentState';

const goals = [
  'Достичь DR B в GT7',
  'Провести 2 чистые гонки в iRacing',
  'Сделать 3 круга подряд ±0.3 сек',
  'Получить золото на 3 трассах в Circuit Experience (GT7)',
];

export default function Goals() {
  const [checked, setChecked] = usePersistentState<boolean[]>('goals', new Array(goals.length).fill(false));

  const toggle = (index: number) => {
    const copy = [...checked];
    copy[index] = !copy[index];
    setChecked(copy);
  };

  return (
    <section>
      <h2 className="text-2xl mb-2">Цели на 4 недели</h2>
      <ul className="space-y-1">
        {goals.map((goal, i) => (
          <li key={goal} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={checked[i] || false}
              onChange={() => toggle(i)}
              className="accent-accent"
            />
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}