import React from 'react';
import "./productcard.css";

const ProductCard=(props)=>{
    const {id, imageUrl, name, description, price} = props;

    return (
        <div
            key={id}
            className={"product"}
        >
            <img
                src={imageUrl}
                alt={`Image of ${name}`}
                className={"image-product"}
            />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>₹{price}</span>
            <div>
                <button
                    className="snipcart-add-item"
                    id={id}
                    image={imageUrl}
                    name={name}
                    url="/"
                    price={price}
                    onClick={showDetail}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

function showDetail(event){
    console.log(event.target.name);
}
export default ProductCard;