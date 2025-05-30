import { useEffect, useState } from "react";
import "./ApiCalls.css";
import axios from "axios";

const ApiCalls = () => {
  const [items, setItems] = useState([]);

  //   fetching data using axios
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="cardss">
        <img className="mealImage" src={strMealThumb} alt={strMeal} />
        <section className="contentss">
          <p className="mealName">{strMeal}</p>
          <p className="mealName">#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-containerss">{itemsList}</div>;
};

export default ApiCalls;

