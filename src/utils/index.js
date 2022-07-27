import compose from './compose';

const countIngredients = (menu, value, setIngred) => {
  const allIngredients = [];

  for (let i = 0; i < menu.length; i++) {
    allIngredients.push(...menu[i].ingredients);
  }

  const uniqueIngredients = allIngredients.filter(
    (
      (set) => (item) =>
        !set.has(item.name) && set.add(item.name)
    )(new Set())
  );

  const ingridients = uniqueIngredients.map((item) => {
    let weight = 0;
    for (let i = 0; i < allIngredients.length; i++) {
      if (allIngredients[i].name === item.name) {
        weight += value * Number(allIngredients[i].weight);
      }
    }

    return {
      id: item.id,
      name: item.name,
      weight: weight,
    };
  });

  setIngred(ingridients);
};

export { compose, countIngredients };
