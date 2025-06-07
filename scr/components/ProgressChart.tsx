import { usePersistentState } from '../hooks/usePersistentState';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface Data {
  week: string;
  progress: number;
}

export default function ProgressChart() {
  const [data, setData] = usePersistentState<Data[]>('progress', [
    { week: '1', progress: 20 },
    { week: '2', progress: 30 },
    { week: '3', progress: 40 },
    { week: '4', progress: 50 },
  ]);

  const addPoint = () => {
    const next = (data.length + 1).toString();
    setData([...data, { week: next, progress: 50 }]);
  };

  const update = (index: number, value: number) => {
    const copy = [...data];
    copy[index].progress = value;
    setData(copy);
  };

  return (
    <section>
      <h2 className="text-2xl mb-2">Прогресс</h2>
      <div className="mb-2">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="week" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="progress" stroke="#10a37f" />
        </LineChart>
      </div>
      <div className="space-y-1">
        {data.map((d, i) => (
          <div key={i} className="flex items-center space-x-2">
            <span>Неделя {d.week}</span>
            <input
              type="number"
              value={d.progress}
              onChange={(e) => update(i, Number(e.target.value))}
              className="bg-gray-700 rounded p-1 w-20"
              min={0}
              max={100}
            />
          </div>
        ))}
      </div>
      <button onClick={addPoint} className="mt-2 px-3 py-1 bg-accent rounded">
        Добавить неделю
      </button>
    </section>
  );
}