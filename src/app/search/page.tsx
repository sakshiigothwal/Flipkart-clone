import ProductCard from '@/components/Productcard';
import { Product } from '@/types/producttype';
import data from '../../../public/mockdata/mobiles.json';

export default function SearchPage() {
  const products: Product[] = data;

  return (
    <>
      <h2>Search Results for &quot;mobile&quot;</h2>

      <hr />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
