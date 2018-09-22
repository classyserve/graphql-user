# graphql-user

A graphql project depicting login/registration mutations

## Getting Started

Clone the project repository by running the command below 

```bash
git clone https://github.com/classyserve/graphql-user.git
```

After cloning, run:

```bash
npm install
```

Rename `.env.example` to `.env` then fill in your database detail and your JWT secret:

```txt
NODE_ENV=development
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=graphql_blog_cms
JWT_SECRET=somereallylongsecretkey
```

Then run the migration:

```bash
sequelize db:migrate
```

And finally, start the application:

```bash
npm start
```

Then visit [http://localhost:3000/graphiql](http://localhost:3000/graphiql) to see the application in action.

Then try out:

```txt
mutation{
    register(firstName: "firstname", lastName: "lastname", email: "emailid", password:"password){
        id, firstName, lastName, email
    }
}
```
