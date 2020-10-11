function mileneal(añoNac = 2000, delay = 3000) {
  return new Promise((resolve, reject) => {
    const esMileneal = Math.floor(añoNac) >= 2000 ? true : false;
    const edad = 2020 - Math.floor(añoNac);

    setTimeout(() => {
      esMileneal ? resolve(edad) : reject(new Error("No es milineal"));
    }, delay);
  });
}

mileneal()
  .then((edad) => console.log(`tienes ${edad} años, eres mileneal`))
  .catch((error) => console.error(error));
