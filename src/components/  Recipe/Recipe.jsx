import React from "react";

const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

export const Recipe = ({children}) => {
  let res = recipes.map((el) => (
    <>
      <h2 key={el.id}>{el.name}</h2>
      <ul>
        ingredients
        {
          children
        .map((elem) => (
            <li>{elem}</li>
          ))
        }
      </ul>
    </>
  ));
  return <div>{res}</div>;
};
