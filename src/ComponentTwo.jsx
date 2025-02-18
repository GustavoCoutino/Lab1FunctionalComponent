export function ComponentTwo() {
  let numero = 10;
  numero += 20;

  const saludoComponente = <h1>Hola mundo desde componente dos ({numero})</h1>;
  return <div>{saludoComponente}</div>;
}
