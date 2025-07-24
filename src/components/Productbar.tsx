"use client";

import { FaAngleDown } from "react-icons/fa";

export default function ProductBar() {
  const categories = [
    "Electronics",
    "TVs & Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furniture",
    "Sports, Books & More",
  ];

  return (
    <div className="shadow-sm" style={{ backgroundColor: "#fff" }}>
      <div
        className="container d-flex justify-content-between align-items-center px-5"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          minHeight: "40px",
          whiteSpace: "nowrap",
        }}
      >
        {categories.map((item) => (
          <span
            key={item}
            className="d-flex align-items-center gap-1 cursor-pointer text-dark"
          >
            {item}
            <FaAngleDown style={{ fontSize: "10px" }} />
          </span>
        ))}

        <a
          className="text-decoration-none text-dark d-flex align-items-center"
          href="/travel/flights"
        >
          Flights
        </a>
        <a
          className="text-decoration-none text-dark d-flex align-items-center"
          href="/offers"
        >
          Offer Zone
        </a>
      </div>
    </div>
  );
}
