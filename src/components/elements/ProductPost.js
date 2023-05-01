import "../../css/ProductPost.css";

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