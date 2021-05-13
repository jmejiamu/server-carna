# server-carna
### Instruction
#### Clone the repo - 
```
   git clone https://github.com/jmejiamu/server-carna.git

   cd to /server-carna/server and do npm i to install all the dependencies

```



#### Creating Database

```
    cd to /back-end-products/server/DB and login to postgreSQL - psql -U username

    Once log in create a database - CREATE DATABASE carna_db; and enter into the database \c carna_db

    Then run the scripts \i create_tables.sql, then if you like to drop the table run \i drop_table.sql

```


#### Create a .env file
```
   Create a .env in the root dir where the server.js lives. 
   In the .env file include:
   HOSTNAME = localhost
   USERNAMEPG = yourusername
   PASSWORD = yourpassword 
   DATABASE = carna_db

    URL = localhost
```
#### Run and install dependencies
```
   npm install
   npm start
```

#### Technologies used
* NodeJS
* Express
* Knexjs
* PostgreSQL
