import heroesData from "./data/heroes.json";

export function ComponentThree() {
  const { heroes } = heroesData;
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
