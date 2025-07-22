import Link from 'next/link';
import { Product } from '../types/producttype';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text text-success">{product.price}</p>
            <p className="card-text"><small className="text-muted">{product.rating} ★</small></p>
            <Link href={`/product/${product.id}`} className="btn btn-primary btn-sm">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
