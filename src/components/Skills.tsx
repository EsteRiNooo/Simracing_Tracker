import { usePersistentState } from '../hooks/usePersistentState';

interface Skill {
  name: string;
  level: number;
}

const defaultSkills: Skill[] = [
  { name: 'Торможение', level: 50 },
  { name: 'Траектория', level: 50 },
  { name: 'Контроль тяги', level: 50 },
  { name: 'Стабильность', level: 50 },
  { name: 'Гоночное мышление', level: 50 },
];

export default function Skills() {
  const [skills, setSkills] = usePersistentState<Skill[]>('skills', defaultSkills);

  const update = (i: number, level: number) => {
    const copy = [...skills];
    copy[i].level = level;
    setSkills(copy);
  };

  return (
    <section>
      <h2 className="text-2xl mb-2">Навыки</h2>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={skill.name} className="flex items-center space-x-2">
            <span className="w-40">{skill.name}</span>
            <input
              type="number"
              value={skill.level}
              onChange={(e) => update(i, Number(e.target.value))}
              min={0}
              max={100}
              className="bg-gray-700 rounded p-1 w-20"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
