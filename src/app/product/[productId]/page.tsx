import { Product } from '@/types/producttype';
import data from '../../../../public/mockdata/mobiles.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: Props) {
  const products: Product[] = data;
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} className="img-fluid" alt={product.title} />
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <h4 className="text-success">{product.price}</h4>
        <p><strong>Rating:</strong> {product.rating} ★</p>
        <p>{product.description}</p>
        <button className="btn btn-success">Buy Now</button>
      </div>
    </div>
  );
}
