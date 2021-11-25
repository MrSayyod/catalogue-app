import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error", error);
      });
    console.log(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="menu_pdls">
      <div className="container_pdls">
        {/* <h2>Heey ProductListing</h2> */}
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
