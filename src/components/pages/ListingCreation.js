import React, { useState, useRef } from "react";
import "../../css/ListingCreation.css";
import TextInput from "../elements/TextInput";

function ListingCreation() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInput = useRef(null);
  const itemNameInputRef = useRef(null);
  const itemPriceInputRef = useRef(null);
  const itemCategoryInputRef = useRef(null);
  const itemDescriptionInputRef = useRef(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCreateListing = () =>{
    const itemName = itemNameInputRef.current.getText();
    const itemPrice = itemPriceInputRef.current.getText();
    const itemCategory = itemCategoryInputRef.current.getText();
    const itemDescription = itemDescriptionInputRef.current.getText();

    console.log("Input Name: ", itemName, "; Price: ", itemPrice,
    "; Item Category: ", itemCategory, "; Item Description: ", itemDescription);
  }


  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="PictureSection">
        <div style={{ marginTop: "20px" }}>

        {selectedFile ? (
        <img src={URL.createObjectURL(selectedFile)} alt="Selected file" onError={(e) => {e.target.onerror = null; e.target.src="";}}/>
      ) : (
        <div className="PicturePlaceholder" />
      )}
          <button className="submitPicture">upload</button>
          <button className="submitPicture" onClick={handleClick}>Select Image</button>
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "row" }}>
      <TextInput label="Item Name " ref={itemNameInputRef}/>
      <TextInput label="Price " ref={itemPriceInputRef}/>
      <TextInput label="Category " ref={itemCategoryInputRef}/>
      <TextInput label="Description " ref={itemDescriptionInputRef}/>
      <button onClick={handleCreateListing}>Create Listing</button>
      </div>
    </div>
  );
}

export default ListingCreation;
