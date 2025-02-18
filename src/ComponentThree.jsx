import { heroes } from "./data/heroes";

export function ComponentThree() {
  return (
    <div>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            {hero.name} - {hero.owner}
          </li>
        ))}
      </ul>
    </div>
  );
}
