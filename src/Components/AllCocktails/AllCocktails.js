import React, { useState, useContext } from "react";
import RenderOne from "../RenderOne/RenderOne";
import { CocktailContext } from "../CocktailProvider/CocktailContext";

import "../../styles/style.css";

const AllCocktails = props => {
  const { A, B } = useContext(CocktailContext);
  const [a, setA] = A;
  const [b, setB] = B;

  console.log(props);
  return (
    <div>
      <div className="letterGroup">
        <a href="">A</a>

        <div className="allCocktails">
          {a.map(drink => (
            <RenderOne
              key={drink.idDrink}
              name={drink.strDrink}
              type={drink.strAlcoholic}
              image={drink.strDrinkThumb}
            />
          ))}
        </div>
      </div>

      <a href="">B</a>
      <div className="allCocktails">
        {b.map(drink => (
          <RenderOne
            key={drink.idDrink}
            name={drink.strDrink}
            type={drink.strAlcoholic}
            image={drink.strDrinkThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCocktails;

/*
<a href="">C</a>
      {c.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">D</a>
      {d.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">E</a>
      {e.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">F</a>
      {f.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">G</a>
      {g.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">H</a>
      {h.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">I</a>
      {i.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">J</a>
      {j.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">K</a>
      {k.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">L</a>
      {l.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">M</a>
      {m.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">N</a>
      {n.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">O</a>
      {o.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">P</a>
      {p.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">Q</a>
      {q.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">R</a>
      {r.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">S</a>
      {s.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">T</a>
      {t.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">U</a>
      {u.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">V</a>
      {v.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">W</a>
      {w.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">X</a>
      {x.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">Y</a>
      {y.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}
      <a href="">Z</a>
      {z.map(drink => (
        <RenderOne
          key={drink.idDrink}
          name={drink.strDrink}
          type={drink.strAlcoholic}
          image={drink.strDrinkThumb}
        />
      ))}*/
