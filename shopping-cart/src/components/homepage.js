import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavbarDarkExample from "./navbar";
import ProductCard from "./productcard";
const HomePage = () => {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg",
      name: "Apple iPhone 14 Pro Max",
      description: "128 GB | Deep Purple",
      price: "1,27,999",
    },
    {
      id: 2,
      imageUrl:"https://m.media-amazon.com/images/I/61BGE6iu4AL._SL1500_.jpg",
      name: "iPhone 14 Plus",
      description: "128 GB | Blue",
      price: "80,999",
    },
    {
        id: 3,
        imageUrl:"https://m.media-amazon.com/images/I/61TOWf11+jL._SL1500_.jpg",
        name: "Apple iPhone SE",
        description: "64 GB | Midnight",
        price: "49,900",
      },
      {
        id: 4,
        imageUrl:"https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg",
        name: "Apple iPhone 13",
        description: "256 GB | Red",
        price: "71,999",
      },
      {
        id: 5,
        imageUrl:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
        name: "iPhone 14 Pro",
        description: "128 GB | Deep Purple",
        price: "1,27,999",
      },
      {
        id: 6,
        imageUrl:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
        name: "iPhone 14 Pro",
        description: "128 GB | Deep Purple",
        price: "1,27,999",
      },
  ];
  return (
    <div>
      <NavbarDarkExample></NavbarDarkExample>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",justifyContent:"center",margin:"2rem"}}>
        {products.map((phone) => (
          <ProductCard
            id={phone.id}
            imageUrl={phone.imageUrl}
            name={phone.name}
            description={phone.description}
            price={phone.price}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
