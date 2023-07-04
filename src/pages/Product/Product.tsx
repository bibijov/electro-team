import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { products } from "../../utils";
import { Category, CategorySubGroup } from "../../utils";
import Lightbulb from "../../images/ledbulb.png";
import Street from "../../images/street.jpg";
import Lights2 from "../../images/lights2.jpg";

import "./styles.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import { url } from "inspector";

interface Props {}

const Product = (props: Props) => {
  window.scrollTo(0, 0);
  let { categoryId, productId } = useParams<string>();
  const navigate = useNavigate();
  const [thisCategory, setCategory] = useState<Category>({
    brands: [],
    groups: [],
    id: "",
    title: "",
    bg: "",
    bgThumb: "",
  });
  const [thisGroup, setGroup] = useState<CategorySubGroup>({
    id: "",
    title: "",
  });

  useEffect(() => {
    const c = _.find(products, { id: categoryId });
    setCategory(c as Category);
  }, []);

  useEffect(() => {
    if (thisCategory.id === "") return;
    const g = _.find(thisCategory.groups, { id: productId });
    if (g === undefined) return;
    setGroup(g as CategorySubGroup);
  }, [productId, thisCategory]);

  return (
    <div className="productPage">
      <div
        className="productContainer"
        style={{
          backgroundImage: `url(${thisCategory.bg})`,
        }}
      >
        <h1 className="headerTwo">{thisGroup.title}</h1>
        <div className="productInfo">
          <img src={thisGroup.source} alt={`${thisGroup.title}`} />
          {!!thisGroup.textDescription && (
            <div className="tableWrapper">
              <table>
                {!!thisGroup.textDescription &&
                  thisGroup.textDescription.map((text) => {
                    return (
                      <tr>
                        <td>{text}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          )}
          {!!thisGroup.attributesTitles && (
            <div className="tableWrapper">
              <table>
                <tr>
                  {thisGroup?.attributesTitles &&
                    thisGroup.attributesTitles.map((aTitle) => {
                      return <th>{aTitle}</th>;
                    })}
                </tr>
                {thisGroup?.listAttributes &&
                  thisGroup.listAttributes.map((listAttribute) => {
                    return (
                      <tr>
                        {listAttribute.map((att) => {
                          return <td>{att}</td>;
                        })}
                      </tr>
                    );
                  })}
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="findOut">
        <h1 className="headerTwo">Pošaljite nam upit</h1>
        <ContactForm />
      </div>
      <div
        className="productContainer"
        style={{
          backgroundImage: `url(${Lights2})`,
        }}
      >
        <div className="headerTwo">Slični proizvodi</div>
        <div className="categoriesBox">
          {thisCategory.groups &&
            thisCategory.groups.map((group) => {
              if (group.id !== thisGroup.id)
                return (
                  <div
                    className="categoryBox"
                    onClick={() => {
                      navigate(`../product/${thisCategory.id}/${group.id}`);
                    }}
                  >
                    <img src={Lightbulb} alt={`${group.title}`} />
                    <p>{group.title}</p>
                  </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
