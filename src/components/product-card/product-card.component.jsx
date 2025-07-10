import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  AddButton
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>Rs. {price.toFixed(2)}</ProductPrice>
      </ProductInfo>
      <AddButton
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={addProductToCart}
      >
        🛒 Add to Cart
      </AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
