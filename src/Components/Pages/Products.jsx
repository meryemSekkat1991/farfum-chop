import React from "react";


const Products = (props) => {
  let { title, image, price } = props;

  return (
        <div className="Card">
          <img src={image} className="card_img" alt="product_card" />
          <div className="card_body">
            <h5 className="card_title">{title}</h5>
            <p className="card_text">
              <del aria-hidden="true"><span className="woocommerce-Price-amount amount">${price}&nbsp;<span
                className="woocommerce-Price-currencySymbol">DH</span></span>
              </del>${price}</p>
          </div>
        </div>
  );
};

export default Products;
