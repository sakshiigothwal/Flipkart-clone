"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import {
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaStore,
  FaEllipsisV,
  FaAngleDown,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  const [showLogin, setShowLogin] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <nav
      className={`px-4 py-2 shadow-sm ${isCartPage ? "bg-primary" : "bg-white"}`}
      style={{ fontSize: "12px" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-2 d-flex align-items-center">
            <Link href="/" className="d-flex align-items-center">
              <Image
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                alt="Flipkart Logo"
                width={160}
                height={40}
                style={{
                  objectFit: "contain",
                  filter: isCartPage ? "brightness(0) invert(1)" : "none",
                }}
              />
            </Link>
          </div>

          <div className="col-md-5">
            <form className="w-100">
              <div
                className="d-flex align-items-center rounded px-3 py-2"
                style={{
                  backgroundColor: "#f0f5ff",
                  height: "42px",
                  borderRadius: "8px",
                }}
              >
                <FaSearch
                  className="text-muted"
                  size={16}
                  style={{ marginRight: "10px" }}
                />
                <input
                  type="text"
                  placeholder="Search for Products, Brands and More"
                  className="form-control border-0 shadow-none bg-transparent p-0"
                  style={{
                    fontSize: "14px",
                    color: isCartPage ? "white" : "black",
                  }}
                />
              </div>
            </form>
          </div>

          <div className="col-md-5 ps-3">
            <div className="d-flex align-items-center justify-content-end gap-4">
              <div
                className="position-relative"
                onMouseEnter={() => setShowLogin(true)}
                onMouseLeave={() => setShowLogin(false)}
              >
                <div
                  className="d-flex align-items-center gap-2 cursor-pointer"
                  style={{
                    fontSize: "16px",
                    padding: "8px 12px",
                    color: isCartPage ? "white" : "black",
                  }}
                >
                  <FaUserCircle size={20} />
                  <span className="fw-medium d-flex align-items-center gap-1">
                    {isCartPage ? "My Account" : "Login"}{" "}
                    <FaAngleDown size={12} />
                  </span>
                </div>
                {showLogin && (
                  <div
                    className="dropdown-menu show mt-2 shadow-sm"
                    style={{ position: "absolute", top: "100%" }}
                  >
                    <button className="dropdown-item">My Profile</button>
                    <button className="dropdown-item">SuperCoin Zone</button>
                    <button className="dropdown-item">Flipkart Plus Zone</button>
                    <button className="dropdown-item">Orders</button>
                    <button className="dropdown-item">Coupons</button>
                    <button className="dropdown-item">Gift Cards</button>
                    <button className="dropdown-item">Notifications</button>
                    <button className="dropdown-item">Log Out</button>
                  </div>
                )}
              </div>

              {!isCartPage && (
                <>
                  <Link
                    href="/cart"
                    className="d-flex align-items-center gap-2 text-decoration-none text-dark"
                    style={{ fontSize: "16px", padding: "8px 12px" }}
                  >
                    <FaShoppingCart size={20} />
                    <span>Cart</span>
                  </Link>
                  <div
                    className="d-flex align-items-center gap-2 cursor-pointer"
                    style={{ fontSize: "16px", padding: "8px 12px" }}
                  >
                    <FaStore size={20} />
                    <span>Become a Seller</span>
                  </div>

                  <div
                    className="position-relative"
                    onMouseEnter={() => setShowMore(true)}
                    onMouseLeave={() => setShowMore(false)}
                  >
                    <div
                      className="d-flex align-items-center cursor-pointer"
                      style={{ padding: "8px 12px" }}
                    >
                      <FaEllipsisV size={18} />
                    </div>
                    {showMore && (
                      <div
                        className="dropdown-menu show mt-2 shadow-sm"
                        style={{ position: "absolute", top: "100%", right: 0 }}
                      >
                        <button className="dropdown-item">Notification Preferences</button>
                        <button className="dropdown-item">24X7 Customer Care</button>
                        <button className="dropdown-item">Advertise</button>
                        <button className="dropdown-item">Download App</button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
