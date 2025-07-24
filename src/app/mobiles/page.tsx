"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./header";
import { MobileProduct } from "@/types/producttype";

export default function MobilesPage() {
  const [products, setProducts] = useState<MobileProduct[]>([]);

  useEffect(() => {
    fetch("/mockdata/mobiles.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-md-3">
          <div className="bg-white p-3 border">
            <h5 className="mb-3">Filters</h5>
          </div>
        </div>

        <div className="col-md-9">
          <div className="bg-white p-3 border">
            <Header />

            {products.map((item) => (
              <div
                key={item.id}
                className="row border-bottom py-3 d-flex align-items-stretch"
                style={{ minHeight: "160px" }}
              >

                <div className="col-2 d-flex flex-column align-items-center justify-content-between h-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    style={{ objectFit: "contain" }}
                    className="img-fluid"
                  />
                  <div className="form-check mt-2">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Add to Compare</label>
                  </div>
                </div>

                <div className="col-7 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h6 className="fw-bold">{item.title}</h6>
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-success me-2">
                        {item.rating} ★
                      </span>
                      <span className="text-muted">{item.reviews}</span>
                    </div>
                    <ul className="mb-2" style={{ fontSize: "14px" }}>
                      {item.specs.map((spec: string, index: number) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ fontSize: "14px" }}>{item.warranty}</div>
                </div>

                <div className="col-3 d-flex flex-column justify-content-between text-end h-100">
                  <div>
                    <h5>₹{item.price}</h5>
                    <div>
                      <span className="text-muted text-decoration-line-through">
                        ₹{item.originalPrice}
                      </span>
                      <span className="text-success ms-2">
                        {item.discount} off
                      </span>
                    </div>
                    <div className="text-success fw-semibold">{item.offer}</div>
                  </div>
                  <div style={{ fontSize: "14px" }}>
                    {item.coins ? (
                      <>
                        Or Pay <strong>₹{item.price - 48}</strong> +{" "}
                        {item.coins} coins
                      </>
                    ) : (
                      item.exchange && <span>{item.exchange}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
