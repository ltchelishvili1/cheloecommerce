import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  OutOfStock,
} from "./preview-product-card.styles";

const PreviewCard = (props) => {
  const  navigate = useNavigate();
  const { cartItems, addProductToCart } = useContext(CartContext);
  const [randomImage, setRandomImage] = useState("");
  const { product } = props;

  const handleClick = () => {
    navigate(`/item/${product.id}`)
  };

  useEffect(() => {
    setRandomImage(
      product.gallery[Math.floor(Math.random() * product.gallery.length)]
    );
  }, []);

  return (
    <ProductCartContainer>
      <img
        src={`${randomImage}`}
        alt={`${product.name}`}
        style={!product.inStock ? { opacity: "0.3" } : null}
      />
      <Footer style={!product.inStock ? { opacity: "0.3" } : null}>
        <Name>{product.name}</Name>
        <Price>{product.prices[0].amount}</Price>
      </Footer>
      {/*product.inStock*/ true ? (
        <Button onClick={handleClick}>SEE MORE</Button>
      ) : (
        <OutOfStock>OUT OF STOCK</OutOfStock>
      )}
    </ProductCartContainer>
  );
};

export default PreviewCard;
