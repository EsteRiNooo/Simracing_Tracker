import Calendar from './components/Calendar';
import Goals from './components/Goals';
import LapTable from './components/LapTable';
import Skills from './components/Skills';
import ProgressChart from './components/ProgressChart';
import DailyTasks from './components/DailyTasks';

export default function App() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <Calendar />
      <Goals />
      <LapTable />
      <Skills />
      <ProgressChart />
      <DailyTasks />
    </div>
  );
}
