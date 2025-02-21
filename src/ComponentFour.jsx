export function ComponentFour() {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("Dentro de la promesa");
    }, 3000);
  });
  promesa.then(() => {
    console.log("Promesa resuelta");
  });
  return <div>ComponentFour</div>;
}
