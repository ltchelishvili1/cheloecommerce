import React from "react";
import { AttributeCont, ValueCont } from "./attributes-styles";

const setAttributes = (id, name, type, items) => {
  return (
    <div>
      <p>{name}</p>
      <AttributeCont>
        {items.map((item) =>
          type === "swatch" ? (
            <ValueCont style={{backgroundColor:`${item.value}`}}></ValueCont>
          ) : (
            <ValueCont>{item.value}</ValueCont>
          )
        )}
      </AttributeCont>
    </div>
  );
};

const Attributes = ({ attributes }) => {
  return (
    <>
      {attributes.map((attribute) => {
        return setAttributes(
          attribute.id,
          attribute.name,
          attribute.type,
          attribute.items
        );
      })}
    </>
  );
};

export default Attributes;
