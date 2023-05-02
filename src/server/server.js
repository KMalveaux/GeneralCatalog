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
    cb(null, `D:/LocalDevApps/wizardshop/src/components/images`); // set the destination folder
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

db.run(
  `
CREATE TABLE IF NOT EXISTS "Cart" (
  "itemID" INTEGER
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

app.get("/DeleteCart", (req, res) => {
  // Drop the table
  db.run("DROP TABLE Cart", function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Table Cart has been dropped");
    }
  });
});

app.post("/removeAllCart", (req, res) => {
  const sql = "DELETE FROM Cart";
  db.run(sql, [], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      res.send("All rows deleted from the cart");
    }
  });
});

app.get("/SelectListings", (req, res) => {
  db.all("SELECT rowid, * FROM Listings", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      res.json(rows);
    }
  });
});

app.get("/SelectCart", (req, res) => {
  db.all("SELECT itemID FROM Cart", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      res.json(rows);
    }
  });
});

app.get("/GetCategories", (req, res) => {
  db.all("SELECT DISTINCT CATEGORY FROM Listings", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      const categories = rows.map((row) => row.CATEGORY);
      res.json(categories);
    }
  });
});

app.get("/SelectListingsCategories", (req, res) => {
  db.all(
    "SELECT FROM Listings WHERE CATEGORY = " + req.body.category,
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal server error");
      } else {
        res.json(rows);
      }
    }
  );
});

app.get("/SelectListingsByID", (req, res) => {
  const rowids = req.query.rowids.split(",");
  const placeholders = rowids.map(() => "?").join(",");
  const sql = `SELECT * FROM Listings WHERE rowid IN (${placeholders})`;
  db.all(sql, rowids, (err, rows) => {
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

app.post("/AddToCart", (req, res) => {
  const { itemID } = req.body;
  const query = "INSERT INTO Cart (itemID) VALUES (?)";
  db.run(query, itemID, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else {
      res.status(201).send(`Inserted itemid ${this.lastID} into cart`);
    }
  });
});

app.post("/DeleteListing", (req, res) => {
  const { productName } = req.body;
  console.log("DELETE FROM Listings WHERE PRODUCT_NAME = " + productName);
  const query = "DELETE FROM Listings WHERE PRODUCT_NAME = " + productName;
  db.run(query, [productName], function (err) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else {
      res.status(201).send(`Listing ${productName} deleted`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
