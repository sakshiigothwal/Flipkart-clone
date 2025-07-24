"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white p-3 border mb-3">
      <div className="mb-2 d-flex gap-1 text-secondary small flex-wrap">
        <Link href="/" className="text-decoration-none text-secondary">
          Home
        </Link>
        <span>&gt;</span>
        <Link href="#" className="text-decoration-none text-secondary">
          Mobiles & Accessories
        </Link>
        <span>&gt;</span>
        <Link href="#" className="text-decoration-none text-secondary">
          Mobiles
        </Link>
      </div>

      <div className="mb-2" style={{ fontSize: "20px", fontWeight: 500 }}>
        Showing 1 – 24 of 11,503 results for <strong>&quot;mobile&quot;</strong>
      </div>

      <div className="d-flex gap-3 align-items-center flex-wrap">
        <span style={{ fontWeight: 500 }}>Sort By</span>

        {[
          "Relevance",
          "Popularity",
          "Price -- Low to High",
          "Price -- High to Low",
          "Newest First",
        ].map((option, index) => (
          <button
            key={index}
            className={`btn p-0 border-0 bg-transparent ${
              option === "Relevance"
                ? "text-primary border-bottom border-primary"
                : "text-dark"
            }`}
            style={{
              fontWeight: option === "Relevance" ? 500 : 400,
              borderWidth: option === "Relevance" ? "2px" : "0",
              borderRadius: 0,
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
