import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  CategoryHeader,
  TitleLink,
  PreviewGrid,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryHeader>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </CategoryHeader>
      <PreviewGrid>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewGrid>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
