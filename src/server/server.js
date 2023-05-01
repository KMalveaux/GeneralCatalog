const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `../images`); // set the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // keep the original filename
  },
});
const upload = multer({ storage: storage });

const db = new sqlite3.Database("../database/WizardCatalog.db");

db.run(
  `
CREATE TABLE IF NOT EXISTS "Listings" (
    "PRODUCT_NAME"  TEXT,
    "PRICE" INTEGER,
    "CATEGORY" TEXT,
    "DESCRIPTION" TEXT,
    "DATE_LISTED" INTEGER,
    "IMAGE" TEXT,
    "STARS_ONE" INTEGER,
    "STARS_TWO" INTEGER,
    "STARS_THREE" INTEGER,
    "STARS_FOUR" INTEGER,
    "STARS_FIVE" INTEGER
  );`,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Table created successfully");
    }
  }
);

app.get("/DeleteListings", (req, res) => {
  // Drop the table
  db.run("DROP TABLE Listings", function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Table Listings has been dropped");
    }
  });
});

app.get("/SelectListings", (req, res) => {
  db.all("SELECT * FROM Listings", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      res.json(rows);
    }
  });
});

app.post("/CreateListing", upload.single("image"), (req, res) => {
  const { productName, price, category, description } = req.body;
  const dateListed = Date.now(); // or however you want to generate the date
  const picturePath = req.file.path; // get the path of the uploaded image

  const query =
    "INSERT INTO Listings (PRODUCT_NAME, PRICE, CATEGORY, DESCRIPTION, DATE_LISTED, IMAGE) VALUES (?, ?, ?, ?, ?, ?)";
  db.run(
    query,
    [productName, price, category, description, dateListed, picturePath],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Internal server error");
      } else {
        res.status(201).send(`Listing ${this.lastID} created`);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
