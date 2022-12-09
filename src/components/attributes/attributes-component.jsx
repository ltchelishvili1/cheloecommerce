import React from "react";

import {
  AttContainer,
  AttributeCont,
  Border,
  Value,
  ValueCont,
} from "./attributes-styles";

const Attributes = (props) => {
  const { product, handleChange, atts } = props;
  const { attributes } = product;

  return (
    <AttContainer>
      {attributes.map((attribute) => {
        const { name, id, type, items } = attribute;
        return (
          <div>
            <p>{name}</p>
            <AttributeCont>
              {items.map((item) =>
                type === "swatch" ? (
                  <Border
                    style={
                      atts[name] === item.value
                        ? {
                            scale: "1.15",
                            background: "black",
                            border: `1px solid ${item.value}`,
                          }
                        : null
                    }
                    tabIndex="1"
                  >
                    <ValueCont
                      background={item.value}
                      onClick={() =>
                        handleChange(item.value, name, items, item)
                      }
                    ></ValueCont>
                  </Border>
                ) : (
                  <Border
                    style={
                      item.value === atts[name]
                        ? { scale: "1.15", background: "black", color: "#fff" }
                        : null
                    }
                    tabIndex="1"
                  >
                    <ValueCont
                      onClick={() => handleChange(item.value, name, items)}
                    >
                      <Value> {item.value}</Value>
                    </ValueCont>
                  </Border>
                )
              )}
            </AttributeCont>
          </div>
        );
      })}
    </AttContainer>
  );
};

export default Attributes;
