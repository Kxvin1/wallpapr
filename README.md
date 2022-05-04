# Wallpapr

Inspired by Flickr, Wallpapr is an image sharing app where users can share their favorite desktop wallpapers as well as view other users' uploads and profiles. Users can interact with other users by leaving comments on their profile.

- [Live Site](https://wall-papr.herokuapp.com/)
- [MVP Feature List](https://github.com/Kxvin1/wallpapr/wiki/MVP-Feature-List)
- [Database Schema](https://github.com/Kxvin1/wallpapr/wiki/Database-Schema)

# Technologies Used

#### Backend

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

#### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# Getting started

1. Clone this repository

   `git clone git@github.com:Kxvin1/wallpapr.git`

2. Install dependencies in the `backend` directory

   `npm install`

3. Install dependencies in the `frontend` directory

   `npm install`

4. Create a .env file based on the .env.example given

5. Create a User in PSQL based on your .env DB_USERNAME

   `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

6. Create the database, migrate, and then seed

   `npx dotenv sequelize db:create`

   `npx dotenv sequelize db:migrate`

   `npx dotenv sequelize db:seed:all`

7. Start a server in both the `backend` and `frontend` directories by running:

   `npm start`
