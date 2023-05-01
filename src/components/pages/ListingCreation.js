import React, { useState, useRef } from "react";
import "../../css/ListingCreation.css";
import TextInput from "../elements/TextInput";
import axios from "axios";

function ListingCreation() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [listings, setListings] = useState([]);

  const fileInput = useRef(null);
  const itemNameInputRef = useRef(null);
  const itemPriceInputRef = useRef(null);
  const itemCategoryInputRef = useRef(null);
  const itemDescriptionInputRef = useRef(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const HandleCreateListing = () => {
    const itemName = itemNameInputRef.current.getText();
    const itemPrice = itemPriceInputRef.current.getText();
    const itemCategory = itemCategoryInputRef.current.getText();
    const itemDescription = itemDescriptionInputRef.current.getText();

    const formData = new FormData();
    formData.append("productName", itemName);
    formData.append("price", itemPrice);
    formData.append("category", itemCategory);
    formData.append("description", itemDescription);
    formData.append("image", selectedFile);

    // axios
    //   .get("http://localhost:5000/DeleteListings")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.error(err));

    axios
      .post("http://localhost:5000/CreateListing", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:5000/SelectListings")
      .then((res) => {
        console.log(res.data);
        setListings(res.data);
      })
      .catch((err) => console.error(err));

    console.log("axios call done");
    console.log(listings);
  };

  const getImage = (path) => {
    console.log(path.split("/").slice(-1));
    return path.split("/").slice(-1);
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="PictureSection">
        <div style={{ marginTop: "20px" }}>
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected file"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "";
              }}
            />
          ) : (
            <div className="PicturePlaceholder" />
          )}
          <button className="submitPicture">upload</button>
          <button className="submitPicture" onClick={handleClick}>
            Select Image
          </button>
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TextInput label="Item Name " ref={itemNameInputRef} />
        <TextInput label="Price " ref={itemPriceInputRef} />
        <TextInput label="Category " ref={itemCategoryInputRef} />
        <TextInput label="Description " ref={itemDescriptionInputRef} />
        <button onClick={HandleCreateListing}>Create Listing</button>
      </div>
      <div>
        <h1>Listings</h1>
        <ul>
          {listings.map((listing) => (
            <li key={listing.id}>
              <h2>{listing.PRODUCT_NAME}</h2>
              <p>{listing.DESCRIPTION}</p>
              <p>{listing.PRICE}</p>
              <p>{listing.CATEGORY}</p>
              <p>{listing.DATE_LISTED}</p>
              <img
                src={require(`C:\Users\max\Documents\GitHub\wizardcatalog\src\components\images${getImage(
                  listing.IMAGE.replace(/\\/g, "/")
                )}`)}
                alt="PICTURE HERE"
              />
              <p>{`${listing.IMAGE.replace(/\\/g, "/")}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListingCreation;
