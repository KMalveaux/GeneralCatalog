import "./ProductPost.css";

function ProductPost(props){
    function handleClick() {
        console.log(`Clicked on ${props.itemName}, TODO: implement functionality such that we are now taken to this items store page.`);
    }

    return(
    <div className="productContainer" onClick={handleClick}>
        
        <p className="name">
            {props.itemName}
        </p>
        <p className="price">
            {props.itemPrice}
        </p>
    </div>   
    );
}

export default ProductPost;