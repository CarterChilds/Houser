SELECT * FROM properties 
WHERE user_id = $1 and desired_rent > $2;