"use client";

import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  return (
    <div
      className="bg-light"
      style={{ minHeight: "100vh", paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div
        className="mx-auto bg-white shadow rounded px-3 px-md-5"
        style={{
          maxWidth: "1200px",
          padding: "60px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="Empty Cart"
          width={200}
          height={200}
          className="mb-4"
          style={{ width: "100%", height: "auto", maxWidth: "200px" }}
        />

        <h5 className="fw-semibold mb-2" style={{ fontSize: "20px" }}>
          Your cart is empty!
        </h5>
        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
          Add items to it now.
        </p>
        <Link href="/">
          <button className="btn btn-primary px-4 py-2">Shop now</button>
        </Link>
      </div>

      <hr className="my-4" style={{ borderColor: "#bdbdbd", height: "1px" }} />

      <div className="container text-muted" style={{ fontSize: "15px" }}>
        <div className="row align-items-center">
          <div className="col-md-6 mb-2">
            Policies: <span className="text-dark">Returns Policy</span> |{" "}
            <span className="text-dark">Terms of use</span> |{" "}
            <span className="text-dark">Security</span> |{" "}
            <span className="text-dark">Privacy</span> &nbsp; &nbsp; © 2007-2025
            Flipkart.com
          </div>
          <div className="col-md-6 mb-2 text-md-end">
            Need help? Visit the{" "}
            <a href="#" className="text-primary text-decoration-none">
              Help Center
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary text-decoration-none">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
