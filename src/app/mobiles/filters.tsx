"use client";
import React from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import Image from "next/image";

const Filters = () => {
  return (
    <div
      className="bg-white border rounded p-3"
      style={{
        width: "250px",
        height: "calc(100vh - 100px)",
        overflowY: "auto",
        position: "sticky",
        top: "80px",
      }}
    >
      <h5 className="fw-semibold mb-3">Filters</h5>

      <div className="pb-3 mb-3 border-bottom">
        <p className="text-uppercase text-muted small mb-1">CATEGORIES</p>
        <p className="mb-1 text-secondary" style={{ fontSize: "14px" }}>
          <span className="me-2" style={{ fontSize: "16px" }}>
            {"<"}
          </span>
          Mobiles & Accessories
        </p>
        <p className="fw-medium m-0">Mobiles</p>
      </div>

      <div className="pb-3 mb-3 border-bottom">
        <p className="text-uppercase text-muted small mb-1">PRICE</p>
        <div className="d-flex align-items-center gap-2 mb-2">
          <select className="form-select form-select-sm">
            <option>Min</option>
            <option>₹10000</option>
            <option>₹15000</option>
            <option>₹20000</option>
            <option>₹30000+</option>
          </select>
          <span className="mx-1">to</span>
          <select className="form-select form-select-sm">
            <option>₹30000+</option>
            <option>₹30000</option>
            <option>₹20000</option>
            <option>₹15000</option>
            <option>₹10000</option>
          </select>
        </div>
      </div>

      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">BRAND</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
        <div className="input-group input-group-sm mb-2">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch size={12} />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search Brand"
            style={{ fontSize: "13px" }}
          />
        </div>
        {["Apple", "Google", "MOTOROLA", "vivo", "OPPO", "Infinix"].map(
          (brand) => (
            <div className="form-check mb-1" key={brand}>
              <input className="form-check-input" type="checkbox" id={brand} />
              <label
                className="form-check-label"
                htmlFor={brand}
                style={{ fontSize: "14px" }}
              >
                {brand}
              </label>
            </div>
          )
        )}
      </div>

      <div className="pb-3 mb-3 border-bottom">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="assured" />
          <label
            className="form-check-label d-flex align-items-center gap-1"
            htmlFor="assured"
          >
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
              alt="Flipkart Assured"
              width={77}
              height={21}
            />
          </label>
        </div>
      </div>

      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            CUSTOMER RATINGS
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
        {["4★ & above", "3★ & above"].map((rating, index) => (
          <div className="form-check mb-1" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`rating-${index}`}
            />
            <label
              className="form-check-label"
              htmlFor={`rating-${index}`}
              style={{ fontSize: "14px" }}
            >
              {rating}
            </label>
          </div>
        ))}
      </div>

      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            GST INVOICE AVAILABLE
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            id="gst-invoice"
          />
          <label
            className="form-check-label"
            htmlFor="gst-invoice"
            style={{ fontSize: "14px" }}
          >
            GST Invoice Available
          </label>
        </div>
      </div>

      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">RAM</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
        {[
          "4 GB",
          "3 GB",
          "2 GB",
          "1 GB and Below",
          "8 GB and Above",
          "6 GB",
          "6 GB and Above",
        ].map((rating, index) => (
          <div className="form-check mb-1" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`rating-${index}`}
            />
            <label
              className="form-check-label"
              htmlFor={`rating-${index}`}
              style={{ fontSize: "14px" }}
            >
              {rating}
            </label>
          </div>
        ))}
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            INTERNAL STORAGE
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            BATTERY CAPACITY
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">SCREEN SIZE</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">PRIMARY CAMERA</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            SECONDARY CAMERA
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            PROCESSOR BRAND
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">SPECIALITY</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            RESOLUTION TYPE
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            OPERATING SPEED
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">NETWORK TYPE</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">SIM TYPE</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">OFFERS</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">FEATURES</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">TYPE</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            NUMBER OF CORES
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">AVAILABILTY</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">DISCOUNT</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">
            OPERATING SYTEM VERSION NAME
          </p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
      <div >
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-uppercase text-muted small mb-1">CLOCK SPEED</p>
          <FaAngleDown size={12} color="#878787" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
