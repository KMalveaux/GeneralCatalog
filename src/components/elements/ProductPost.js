import "./ProductPost.css";

function ProductPost(props){
    function handleClick() {
        console.log(`Clicked on ${props.itemName}, TODO: implement functionality such that we are now taken to this items store page.`);
    }

    function handleAddToCartClick(e) {
        e.stopPropagation();
        console.log(
          `Clicked on Add to Cart for ${props.itemName}, TODO: implement functionality to add item to cart.`
        );
      }

    return(
    <div className="productContainer" onClick={handleClick}>
        
        <p className="name">
            {props.itemName}
        </p>
        <p className="price">
            {props.itemPrice}
        </p>
        <button className="addToCartButton" onClick={handleAddToCartClick}>
            Buy
        </button>
    </div>   
    );
}

export default ProductPost;


// <div style={{height: "100%", width: "100%"}}>
// {/* <h1>Home Page</h1> */}
// <div className="sidescrolling-box">
//     <ProductPost itemName="Broom" itemPrice="$599.99"/>
//     <ProductPost itemName="Wand" itemPrice="$10.99"/>
//     <ProductPost itemName="Flask" itemPrice="$9.99"/>
//     <ProductPost itemName="Cats" itemPrice="$2.50"/>

// </div>

// </div>