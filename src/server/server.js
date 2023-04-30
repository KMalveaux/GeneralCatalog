const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('../database/WizardCatalog.db');

// db.run(`
// CREATE TABLE IF NOT EXISTS "Listings" (
//     "PRODUCT_NAME"  TEXT,
//     "PRICE" INTEGER,
//     "CATEGORY" INTEGER,
//     "DESCRIPTION" TEXT,
//     "DATE_LISTED" INTEGER,
//     "PICTURE_ID" INTEGER,
//     "STARS_ONE" INTEGER,
//     "STARS_TWO" INTEGER,
//     "STARS_THREE" INTEGER,
//     "STARS_FOUR" INTEGER,
//     "STARS_FIVE" INTEGER
//   );`, (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Table created successfully');
//   }
// });

app.get('/Listings', (req, res) => {
  db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Tables in the database:');
    rows.forEach((row) => {
      console.log(row.name);
    });
  });
});

// app.post('/users', (req, res) => {
//   const { name, email, password } = req.body;
//   const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//   db.run(query, [name, email, password], function(err) {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.status(201).send(`User ${this.lastID} created`);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});