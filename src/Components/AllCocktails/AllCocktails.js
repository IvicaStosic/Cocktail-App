import React, { useState, useContext } from "react";
import RenderOne from "../RenderOne/RenderOne";
import { CocktailContext } from "../CocktailProvider/CocktailContext";
import ToTopButton from "../Nav/ToTopButton";

import "../../styles/style.css";

const AllCocktails = props => {
  const {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z
  } = useContext(CocktailContext);
  const [a, setA] = A;
  const [b, setB] = B;
  const [c, setC] = C;
  const [d, setD] = D;
  const [e, setE] = E;
  const [f, setF] = F;
  const [g, setG] = G;
  const [h, setH] = H;
  const [i, setI] = I;
  const [j, setJ] = J;
  const [k, setK] = K;
  const [l, setL] = L;
  const [m, setM] = M;
  const [n, setN] = N;
  const [o, setO] = O;
  const [p, setP] = P;
  const [q, setQ] = Q;
  const [r, setR] = R;
  const [s, setS] = S;
  const [t, setT] = T;
  const [u, setU] = U;
  const [v, setV] = V;
  const [w, setW] = W;
  const [x, setX] = X;
  const [y, setY] = Y;
  const [z, setZ] = Z;

  const links = (
    <div className="pageLinks">
      <a href="#a">A</a>
      <a href="#b">B</a>
      <a href="#c">C</a>
      <a href="#d">D</a>
      <a href="#e">E</a>
      <a href="#f">F</a>
      <a href="#g">G</a>
      <a href="#h">H</a>
      <a href="#i">I</a>
      <a href="#j">J</a>
      <a href="#k">K</a>
      <a href="#l">L</a>
      <a href="#m">M</a>
      <a href="#n">N</a>
      <a href="#o">O</a>
      <a href="#p">P</a>
      <a href="#q">Q</a>
      <a href="#r">R</a>
      <a href="#s">S</a>
      <a href="#t">T</a>
      <a href="#u">U</a>
      <a href="#v">V</a>
      <a href="#w">W</a>
      <a href="#x">X</a>
      <a href="#y">Y</a>
      <a href="#z">Z</a>
    </div>
  );

  return (
    <div className="allCocktailsPage">
      {links}
      <div className="mainContentGroup">
        <div id="a" className="letterGroup">
          <p>A</p>

          <div className="allCocktails">
            {a
              ? a.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="b" className="letterGroup">
          <p>B</p>

          <div className="allCocktails">
            {b
              ? b.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="c" className="letterGroup">
          <p>C</p>

          <div className="allCocktails">
            {c
              ? c.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="d" className="letterGroup">
          <p>D</p>

          <div className="allCocktails">
            {d
              ? d.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="e" className="letterGroup">
          <p>E</p>

          <div className="allCocktails">
            {e
              ? e.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="f" className="letterGroup">
          <p>F</p>

          <div className="allCocktails">
            {f
              ? f.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="g" className="letterGroup">
          <p>G</p>

          <div className="allCocktails">
            {g
              ? g.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="h" className="letterGroup">
          <p>H</p>

          <div className="allCocktails">
            {h
              ? h.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="i" className="letterGroup">
          <p>I</p>

          <div className="allCocktails">
            {i
              ? i.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="j" className="letterGroup">
          <p>J</p>

          <div className="allCocktails">
            {j
              ? j.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="k" className="letterGroup">
          <p>K</p>

          <div className="allCocktails">
            {k
              ? k.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="l" className="letterGroup">
          <p>L</p>

          <div className="allCocktails">
            {l
              ? l.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="m" className="letterGroup">
          <p>M</p>

          <div className="allCocktails">
            {m
              ? m.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="n" className="letterGroup">
          <p>N</p>

          <div className="allCocktails">
            {n
              ? n.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="o" className="letterGroup">
          <p>O</p>

          <div className="allCocktails">
            {o
              ? o.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="p" className="letterGroup">
          <p>P</p>

          <div className="allCocktails">
            {p
              ? p.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="q" className="letterGroup">
          <p>Q</p>

          <div className="allCocktails">
            {q
              ? q.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="r" className="letterGroup">
          <p>R</p>

          <div className="allCocktails">
            {r
              ? r.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="s" className="letterGroup">
          <p>S</p>

          <div className="allCocktails">
            {s
              ? s.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="t" className="letterGroup">
          <p>T</p>

          <div className="allCocktails">
            {t
              ? t.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="u" className="letterGroup">
          <p>U</p>

          <div className="allCocktails">
            {u
              ? u.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="v" className="letterGroup">
          <p>V</p>

          <div className="allCocktails">
            {v
              ? v.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="w" className="letterGroup">
          <p>W</p>

          <div className="allCocktails">
            {w
              ? w.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="x" className="letterGroup">
          <p>X</p>

          <div className="allCocktails">
            {x
              ? x.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="y" className="letterGroup">
          <p>Y</p>

          <div className="allCocktails">
            {y
              ? y.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>

        <div id="z" className="letterGroup">
          <p>Z</p>

          <div className="allCocktails">
            {z
              ? z.map(drink => (
                  <RenderOne
                    key={drink.idDrink}
                    id={drink.idDrink}
                    name={drink.strDrink}
                    type={drink.strAlcoholic}
                    image={drink.strDrinkThumb}
                    ing1={drink.strIngredient1}
                    ing2={drink.strIngredient2}
                    ing3={drink.strIngredient3}
                    ing4={drink.strIngredient4}
                    ing5={drink.strIngredient5}
                    ing6={drink.strIngredient6}
                    ing7={drink.strIngredient7}
                    ing8={drink.strIngredient8}
                    ing9={drink.strIngredient9}
                    ing10={drink.strIngredient10}
                    ing11={drink.strIngredient11}
                    ing12={drink.strIngredient12}
                    ing13={drink.strIngredient13}
                    ing14={drink.strIngredient14}
                    ing15={drink.strIngredient15}
                    measure1={drink.strMeasure1}
                    measure2={drink.strMeasure2}
                    measure3={drink.strMeasure3}
                    measure4={drink.strMeasure4}
                    measure5={drink.strMeasure5}
                    measure6={drink.strMeasure6}
                    measure7={drink.strMeasure7}
                    measure8={drink.strMeasure8}
                    measure9={drink.strMeasure9}
                    measure10={drink.strMeasure10}
                    measure11={drink.strMeasure11}
                    measure12={drink.strMeasure12}
                    measure13={drink.strMeasure13}
                    measure14={drink.strMeasure14}
                    measure15={drink.strMeasure15}
                    instructions={drink.strInstructions}
                    glass={drink.strGlass}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
      <ToTopButton />
    </div>
  );
};

export default AllCocktails;
