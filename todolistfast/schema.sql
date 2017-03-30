DROP TABLE IF EXISTS todoitems;
CREATE TABLE IF NOT EXISTS todoitems(
  id SERIAL PRIMARY KEY,
  itemName VARCHAR(255),
  itemDescription VARCHAR(255),
  completed BOOLEAN DEFAULT FALSE,
  archived DATE
)