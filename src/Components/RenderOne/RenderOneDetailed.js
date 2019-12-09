import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

const RenderOneDetailed = ({
  id,
  name,
  type,
  image,
  ing1,
  ing2,
  ing3,
  ing4,
  ing5,
  ing6,
  ing7,
  ing8,
  ing9,
  ing10,
  ing11,
  ing12,
  ing13,
  ing14,
  ing15,
  measure1,
  measure2,
  measure3,
  measure4,
  measure5,
  measure6,
  measure7,
  measure8,
  measure9,
  measure10,
  measure11,
  measure12,
  measure13,
  measure14,
  measure15,
  instructions,
  glass
}) => {
  return (
    <div className="renderOneDetailed">
      <h4>{name}</h4>
      <p className="tableLink">
        (
        <Link to={`/all/type/${type}`} key="id">
          {type}
        </Link>
        )
      </p>
      <img src={image} alt="not found" className="imgLarge"></img>
      <table className="table">
        <thead className="thead">
          <tr>
            <td id="thleft">Ingredient</td>
            <td id="thright">Measure</td>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td>
              <Link to={`/all/ing/${ing1}`} className="tableLink">
                {ing1}
              </Link>
            </td>
            <td>{measure1}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing2}`} className="tableLink">
                {ing2}
              </Link>
            </td>
            <td>{measure2}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing3}`} className="tableLink">
                {ing3}
              </Link>
            </td>
            <td>{measure3}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing4}`} className="tableLink">
                {ing4}
              </Link>
            </td>
            <td>{measure4}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing5}`} className="tableLink">
                {ing5}
              </Link>
            </td>
            <td>{measure5}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing6}`} className="tableLink">
                {ing6}
              </Link>
            </td>
            <td>{measure6}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing7}`} className="tableLink">
                {ing7}
              </Link>
            </td>
            <td>{measure7}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing8}`} className="tableLink">
                {ing8}
              </Link>
            </td>
            <td>{measure8}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing9}`} className="tableLink">
                {ing9}
              </Link>
            </td>
            <td>{measure9}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing10}`} className="tableLink">
                {ing10}
              </Link>
            </td>
            <td>{measure10}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing11}`} className="tableLink">
                {ing11}
              </Link>
            </td>
            <td>{measure11}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing12}`} className="tableLink">
                {ing12}
              </Link>
            </td>
            <td>{measure12}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing13}`} className="tableLink">
                {ing13}
              </Link>
            </td>
            <td>{measure13}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing14}`} className="tableLink">
                {ing14}
              </Link>
            </td>
            <td>{measure14}</td>
          </tr>
          <tr>
            <td>
              <Link to={`/all/ing/${ing15}`} className="tableLink">
                {ing15}
              </Link>
            </td>
            <td>{measure15}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">{instructions}</td>
          </tr>

          <tr>
            <td colSpan="2" id="tf">
              Serve in{" "}
              <Link to={`/all/glass/${glass}`} key={id} className="tableLink">
                {glass}
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RenderOneDetailed;
