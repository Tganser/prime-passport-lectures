# Angular Complete Branch
This branch updates `master` to use Angular as the client side library, removes Grunt, but maintains MongoDB as the database.

Requests are made directly to the server and does not have much error-handling. Uses default Passport auth flow and redirects.

# Express/Passport Lecture Starting File
Download and run 'npm install' before the lecture as prep. In this lecture, we will build out a user registration page and allow our users to log into our application. Once they are logged in, we will see information returned to us, specific to the user.

##Branches
* `master`: Original lecture code with jQuery, alt static file serving, Grunt, Mongoose/Mongo
* `angular-complete`: Angular and MongoDB version as shown to Iota cohort.
* `sql_strategy`: Replaces MongoDB with PostGRES for storage of user data. Maintains bcrypt functionality.
* `angular-controlled-login-intro`: Introduces Angular as the login handler. All server communication is handled in an Angular Controller and updates the route/page based on success or failure. Intended for an alternate intro lecture to Passport (as seen in angular-complete and sql_strategy). Uses MongoDB.
* `angular-ctrl-with-routes`: Like `angular-controlled-login-intro` but is built using client-side routing with ngRoute instead of full HTML pages. Uses MongoDB.
