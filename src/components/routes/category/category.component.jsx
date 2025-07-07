import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../../components/product-card/product-card.component';
import { CategoriesContext } from '../../../context/categories.context';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category] || []);

  useEffect(() => {
    setProducts(categoriesMap[category] || []);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
