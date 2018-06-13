insert into houser_users(username, password)
values($1, $2
)
returning *;