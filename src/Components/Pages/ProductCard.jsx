import React, { useState } from "react";
import Products from "./Products";
import { Link } from 'react-router-dom';
import "./Products.css";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Static product data
  const staticData = [
    {
      "id":1,
      "title":"Instance and Gucci",
      "oldPrice": 3000,
      "price":1965,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://i.ibb.co/fnhB4bD/IMG-7921.jpg",
      "rating":{"rate":3.9,"count":120}
    },
    {
      "id":2,
      "title":"YVES SAINT LAURENT",
      "price": 41,
      "oldPrice": 92.70,
      "description":"Collection the king of Parfum",
      "category":"men's clothing",
      "image":"https://i.ibb.co/YbhdLRQ/Screenshot-from-2024-03-23-02-21-08.png",
      "rating":{"rate":4.1,"count":259}
    },
    {
      "id":3,
      "title":"GISSAH",
      "price":55.99,
      "description":"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://i.ibb.co/168jpXk/Screenshot-from-2024-03-23-02-25-46.png",
      "rating":{"rate":4.7,"count":500}
    },
    {
      "id":1,
      "title":"Instance and Gucci",
      "oldPrice": 3000,
      "price":1965,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://i.ibb.co/fnhB4bD/IMG-7921.jpg",
      "rating":{"rate":3.9,"count":120}
    },
    {
      "id":2,
      "title":"YVES SAINT LAURENT",
      "price": 41,
      "oldPrice": 92.70,
      "description":"Collection the king of Parfum",
      "category":"men's clothing",
      "image":"https://i.ibb.co/YbhdLRQ/Screenshot-from-2024-03-23-02-21-08.png",
      "rating":{"rate":4.1,"count":259}
    },
    {
      "id":3,
      "title":"GISSAH",
      "price":55.99,
      "description":"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://i.ibb.co/168jpXk/Screenshot-from-2024-03-23-02-25-46.png",
      "rating":{"rate":4.7,"count":500}
    },
    {
      "id":1,
      "title":"Instance and Gucci",
      "oldPrice": 3000,
      "price":1965,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://i.ibb.co/fnhB4bD/IMG-7921.jpg",
      "rating":{"rate":3.9,"count":120}
    },
    {
      "id":2,
      "title":"YVES SAINT LAURENT",
      "price": 41,
      "oldPrice": 92.70,
      "description":"Collection the king of Parfum",
      "category":"men's clothing",
      "image":"https://i.ibb.co/YbhdLRQ/Screenshot-from-2024-03-23-02-21-08.png",
      "rating":{"rate":4.1,"count":259}
    },
    {
      "id":3,
      "title":"GISSAH",
      "price":55.99,
      "description":"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://i.ibb.co/168jpXk/Screenshot-from-2024-03-23-02-25-46.png",
      "rating":{"rate":4.7,"count":500}
    },
    {
      "id":1,
      "title":"Instance and Gucci",
      "oldPrice": 3000,
      "price":1965,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://i.ibb.co/fnhB4bD/IMG-7921.jpg",
      "rating":{"rate":3.9,"count":120}
    },
    {
      "id":2,
      "title":"YVES SAINT LAURENT",
      "price": 41,
      "oldPrice": 92.70,
      "description":"Collection the king of Parfum",
      "category":"men's clothing",
      "image":"https://i.ibb.co/YbhdLRQ/Screenshot-from-2024-03-23-02-21-08.png",
      "rating":{"rate":4.1,"count":259}
    },
    {
      "id":3,
      "title":"GISSAH",
      "price":55.99,
      "description":"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://i.ibb.co/168jpXk/Screenshot-from-2024-03-23-02-25-46.png",
      "rating":{"rate":4.7,"count":500}
    },
    {
      "id":1,
      "title":"Instance and Gucci",
      "oldPrice": 3000,
      "price":1965,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://i.ibb.co/fnhB4bD/IMG-7921.jpg",
      "rating":{"rate":3.9,"count":120}
    },
    {
      "id":2,
      "title":"YVES SAINT LAURENT",
      "price": 41,
      "oldPrice": 92.70,
      "description":"Collection the king of Parfum",
      "category":"men's clothing",
      "image":"https://i.ibb.co/YbhdLRQ/Screenshot-from-2024-03-23-02-21-08.png",
      "rating":{"rate":4.1,"count":259}
    },
    {
      "id":3,
      "title":"GISSAH",
      "price":55.99,
      "description":", suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://i.ibb.co/168jpXk/Screenshot-from-2024-03-23-02-25-46.png",
      "rating":{"rate":4.7,"count":500}
    },
    {
      "id":1,
      "title":"Instance and Gucci",
      "oldPrice": 3000,
      "price":1965,
      "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category":"men's clothing",
      "image":"https://i.ibb.co/fnhB4bD/IMG-7921.jpg",
      "rating":{"rate":3.9,"count":120}
    },
    {
      "id":2,
      "title":"YVES SAINT LAURENT",
      "price": 41,
      "oldPrice": 92.70,
      "description":"Collection the king of Parfum",
      "category":"men's clothing",
      "image":"https://i.ibb.co/YbhdLRQ/Screenshot-from-2024-03-23-02-21-08.png",
      "rating":{"rate":4.1,"count":259}
    },
    {
      "id":3,
      "title":"GISSAH",
      "price":55.99,
      "description":"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category":"men's clothing",
      "image":"https://i.ibb.co/168jpXk/Screenshot-from-2024-03-23-02-25-46.png",
      "rating":{"rate":4.7,"count":500}
    },

  ];

  return (
    <div>
      <h2 className="Category_title">Les Produits</h2>
      <div className="Category_Container">
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory('all')}>Tous les produits</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory("men's clothing")}>Parfin Homme</button>
        </div>
        <div className="Category_Items">
          <button onClick={() => setSelectedCategory("women's clothing")}>Parfin Femme</button>
        </div>
      </div>

      <div className="Container">
        <div className="Row">
          {selectedCategory === 'all' && staticData.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
          {/* Add similar blocks for other categories */}
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
