import "../../css/CategoryPost.css";

function CategoryPost(props) {
  function handleClick() {
    console.log(
      `Clicked on ${props.CategoryName}, TODO: implement functionality such that we are now taken to this category page.`
    );
  }

  return (
    <div className="CategoryContainer" onClick={handleClick}>
      <p className="Category">{props.CategoryName}</p>
    </div>
  );
}

export default CategoryPost;
