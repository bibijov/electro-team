import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { products } from "../../utils";
import { Category } from "../../utils";
import Lightbulb from "../../images/ledbulb.png";

import "./styles.scss";

interface Props {}

const CategoryPage = (props: Props) => {
  let { categoryId } = useParams<string>();
  const [thisCategory, setCategory] = useState<Category>({
    title: "",
    brands: [],
    groups: [],
    id: "",
    bg: "",
    bgThumb: "",
  });

  useEffect(() => {
    const t = _.find(products, { id: categoryId });
    setCategory(t as Category);
  }, []);
  const navigate = useNavigate();

  return (
    <div
      className="categoryPage"
      style={{
        backgroundImage: `url(${thisCategory.bg})`,
      }}
    >
      <h1 className="headerTwo">{thisCategory.title}</h1>
      <div className="categoriesBox">
        {thisCategory.groups &&
          thisCategory.groups.map((category) => {
            return (
              <div
                className="categoryBox"
                onClick={() => {
                  navigate(`../product/${thisCategory.id}/${category.id}`);
                }}
              >
                {category.source && (
                  <img src={category.source} alt={category.title} />
                )}
                <p>{category.title}</p>
              </div>
            );
          })}
        {!!thisCategory.text && (
          <table>
            {!!thisCategory.text &&
              thisCategory.text.map((text) => {
                return (
                  <tr>
                    <td>{text}</td>
                  </tr>
                );
              })}
          </table>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
