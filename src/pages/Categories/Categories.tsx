import React from "react";

import { useNavigate } from "react-router-dom";
import { products } from "../../utils";
import Prekidaci from "../../images/prekidaci.jpg";
import "./styles.scss";

interface Props {}

const Categories = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="categoriesPage">
      <h1 className="headerTwo">Kategorije proizvoda</h1>
      <div className="categoriesBox">
        {products.map((category) => {
          return (
            <div
              className="categoryBox"
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <img src={category.bgThumb} alt={category.title} />
              <p>{category.title}</p>
            </div>
          );
        })}
        <div
          className="categoryBox"
          onClick={() =>
            window.open(
              "https://www.aling-conel.com/sr/products/mode/categories/"
            )
          }
        >
          <img src={Prekidaci} alt="prekidaci" />
          <p>Prekidači</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
