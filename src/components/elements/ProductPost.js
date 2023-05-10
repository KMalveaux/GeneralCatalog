import "../../css/ProductPost.css";
import { useNavigate, Link, createSearchParams } from "react-router-dom";

function ProductPost(props) {
  const navigate = useNavigate();
  const openStorePage = () => {
    navigate({
      pathname: "/ProductPage",
      search: createSearchParams({
        Name: props.itemName,
        Image: props.itemImage,
        Price: props.itemPrice,
        Description: props.itemDescription,
      }).toString(),
    });
  };

  const getImage = (path) => {
    return path.split("/").slice(-1);
  };

  return (
    <div className="productContainer">
      <div
        style={{
          display: "flex",
          height: "75%",
          flexDirection: "column",
          borderWidth: "5px",
          borderStyle: "solid",
        }}
      >
        <img
          className="image"
          src={require("../images/" +
            getImage(props.itemImage.replace(/\\/g, "/")))}
          alt={props.itemName}
        />
        <p className="name">{props.itemName}</p>
        <p className="description">{props.itemDescription}</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "25%",
        }}
      >
        <p className="price">${props.itemPrice}</p>
        <button className="addToCartButton" onClick={openStorePage}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductPost;
