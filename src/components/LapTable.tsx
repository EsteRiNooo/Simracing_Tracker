import { usePersistentState } from '../hooks/usePersistentState';

interface Lap {
  date: string;
  sim: string;
  track: string;
  car: string;
  session: string;
  time: string;
  notes: string;
}

export default function LapTable() {
  const [laps, setLaps] = usePersistentState<Lap[]>('laps', []);

  const addLap = () => {
    setLaps([...laps, { date: '', sim: '', track: '', car: '', session: '', time: '', notes: '' }]);
  };

  const updateLap = (index: number, field: keyof Lap, value: string) => {
    const updated = [...laps];
    updated[index][field] = value;
    setLaps(updated);
  };

  return (
    <section>
      <h2 className="text-2xl mb-2">Лучшие круги</h2>
      <div className="overflow-auto">
        <table className="min-w-full bg-gray-800 text-sm">
          <thead>
            <tr>
              <th className="p-2">Дата</th>
              <th className="p-2">Симулятор</th>
              <th className="p-2">Трасса</th>
              <th className="p-2">Авто</th>
              <th className="p-2">Сессия</th>
              <th className="p-2">Время</th>
              <th className="p-2">Заметки</th>
            </tr>
          </thead>
          <tbody>
            {laps.map((lap, i) => (
              <tr key={i} className="odd:bg-gray-700">
                {(['date', 'sim', 'track', 'car', 'session', 'time', 'notes'] as (keyof Lap)[]).map((field) => (
                  <td className="p-1" key={field}>
                    <input
                      value={lap[field]}
                      onChange={(e) => updateLap(i, field, e.target.value)}
                      className="w-full bg-gray-700 rounded p-1 text-white"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={addLap}
        className="mt-2 px-3 py-1 bg-accent text-black rounded"
      >
        Добавить запись
      </button>
    </section>
  );
}
