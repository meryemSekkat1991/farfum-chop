import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import Footer from '../Footer/Footer';
import "./SingleProduct.css";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    // Static data provided instead of fetching from an endpoint
    const staticData = {
      "id":1,
      "title":"YVES SAINT LAURENT",
      "oldPrice": 3000,
      "price":1965,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://i.ibb.co/fnhB4bD/IMG-7921.jpg",
      "rating":{"rate":3.9,"count":120}
    };
    setProduct(staticData);
  }, []);

  return (
    <>
      <div className="Product-card">
        <div className="Product-Img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="Product-Details">
          <h2>{product.title}</h2>
          <p id="Product-description">{product.description}</p>
          <p id="Product-price">${product.price}</p>
          <button onClick={() => addProduct(product)}>Add To Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
