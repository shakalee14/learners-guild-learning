CREATE TABLE
	users (
  	id PRIMARY KEY
  	email VARCHAR(128)
  	encrypted_password VARCHAR(255)
	)

CREATE TABLE
  todo_list_items (
  	id PRIMARY KEY Not Null
  	user_id  INTEGER Not nNull
    description VARCHAR(255) Not Null
  	note TEXT
    rank  Integer Not Null
    due_date Datetime
	)

SELECT 
*
From
  todo_list_items
Where
  user_id=$1
Order By
  rank ASC


