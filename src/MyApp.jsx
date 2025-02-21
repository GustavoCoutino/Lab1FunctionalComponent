import { ComponentOne } from "./ComponentOne";
import { ComponentTwo } from "./ComponentTwo";
import { ComponentThree } from "./ComponentThree";
import { ComponentFive } from "./ComponentFive";
import { ComponentSix } from "./ComponentSix";
import { CounterApp } from "./CounterApp";
export function MyApp() {
  return (
    <>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFive />
      <ComponentSix title="Component Six" subTitle="This is the subtitle" />
      <CounterApp value={10} />
    </>
  );
}
