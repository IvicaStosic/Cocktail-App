import React from "react";
import "../../styles/style.css";

const RenderOneDetailed = ({
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
      <p>({type})</p>
      <img src={image} alt="not found" className="imgLarge"></img>
      <table className="table">
        <thead className="thead">
          <tr>
            <td>Ingredient</td>
            <td>Measure</td>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td>{ing1}</td>
            <td>{measure1}</td>
          </tr>
          <tr>
            <td>{ing2}</td>
            <td>{measure2}</td>
          </tr>
          <tr>
            <td>{ing3}</td>
            <td>{measure3}</td>
          </tr>
          <tr>
            <td>{ing4}</td>
            <td>{measure4}</td>
          </tr>
          <tr>
            <td>{ing5}</td>
            <td>{measure5}</td>
          </tr>
          <tr>
            <td>{ing6}</td>
            <td>{measure6}</td>
          </tr>
          <tr>
            <td>{ing7}</td>
            <td>{measure7}</td>
          </tr>
          <tr>
            <td>{ing8}</td>
            <td>{measure8}</td>
          </tr>
          <tr>
            <td>{ing9}</td>
            <td>{measure9}</td>
          </tr>
          <tr>
            <td>{ing10}</td>
            <td>{measure10}</td>
          </tr>
          <tr>
            <td>{ing11}</td>
            <td>{measure11}</td>
          </tr>
          <tr>
            <td>{ing12}</td>
            <td>{measure12}</td>
          </tr>
          <tr>
            <td>{ing13}</td>
            <td>{measure13}</td>
          </tr>
          <tr>
            <td>{ing14}</td>
            <td>{measure14}</td>
          </tr>
          <tr>
            <td>{ing15}</td>
            <td>{measure15}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">{instructions}</td>
          </tr>

          <tr>
            <td colSpan="2">Serve in {glass}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default RenderOneDetailed;
