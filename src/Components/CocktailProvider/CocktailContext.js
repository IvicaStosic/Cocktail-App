import React, { useState, useEffect, createContext } from "react";

export const CocktailContext = createContext();

export const CocktailProvider = props => {
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const [c, setC] = useState([]);
  const [d, setD] = useState([]);
  const [e, setE] = useState([]);
  const [f, setF] = useState([]);
  const [g, setG] = useState([]);
  const [h, setH] = useState([]);
  const [i, setI] = useState([]);
  const [j, setJ] = useState([]);
  const [k, setK] = useState([]);
  const [l, setL] = useState([]);
  const [m, setM] = useState([]);
  const [n, setN] = useState([]);
  const [o, setO] = useState([]);
  const [p, setP] = useState([]);
  const [q, setQ] = useState([]);
  const [r, setR] = useState([]);
  const [s, setS] = useState([]);
  const [t, setT] = useState([]);
  const [u, setU] = useState([]);
  const [v, setV] = useState([]);
  const [w, setW] = useState([]);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [z, setZ] = useState([]);

  //console.log("test");

  useEffect(() => {
    const letter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    const getCoktails = async () => {
      let data = [];

      for (let i = 0; i < letter.length; i++) {
        let response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter[i]}`
        );
        data.push(await response.json());

        //console.log(data);
      }
      //console.log(data.length);
      setA(data[0].drinks);
      setB(data[1].drinks);
      setC(data[2].drinks);
      setD(data[3].drinks);
      setE(data[4].drinks);
      setF(data[5].drinks);
      setG(data[6].drinks);
      setH(data[7].drinks);
      setI(data[8].drinks);
      setJ(data[9].drinks);
      setK(data[10].drinks);
      setL(data[11].drinks);
      setM(data[12].drinks);
      setN(data[13].drinks);
      setO(data[14].drinks);
      setP(data[15].drinks);
      setQ(data[16].drinks);
      setR(data[17].drinks);
      setS(data[18].drinks);
      setT(data[19].drinks);
      setU(data[20].drinks);
      setV(data[21].drinks);
      setW(data[22].drinks);
      setX(data[23].drinks);
      setY(data[24].drinks);
      setZ(data[25].drinks);
    };
    //console.log("test");
    getCoktails();
  }, []);

  /*const providerValue = useMemo(
      () => ({
        a,
        setA,
        b,
        setB
      }),
      [a, b]
    );*/
  return (
    <CocktailContext.Provider
      value={{
        A: [a, setA],
        B: [b, setB],
        C: [c, setC],
        D: [d, setD],
        E: [e, setE],
        F: [f, setF],
        G: [g, setG],
        H: [h, setH],
        I: [i, setI],
        J: [j, setJ],
        K: [k, setK],
        L: [l, setL],
        M: [m, setM],
        N: [n, setN],
        O: [o, setO],
        P: [p, setP],
        Q: [q, setQ],
        R: [r, setR],
        S: [s, setS],
        T: [t, setT],
        U: [u, setU],
        V: [v, setV],
        W: [w, setW],
        X: [x, setX],
        Y: [y, setY],
        Z: [z, setZ]
      }}
    >
      {props.children}{" "}
    </CocktailContext.Provider>
  );
};
