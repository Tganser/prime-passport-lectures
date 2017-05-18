- Abby Sepple
- Amal angular-controlled-login-intro
- Tessa Ganser

Team Name: angular-controlled-login-intro

Username: NAME
Password: 123


![whiteboard](/image1.JPG?raw=true "whiteboard")

Planning
===========

View
----

- [x] **File Structure**

- [x] npm install express bootstrap body parser angular etc


**View Planning:**

- [ ] Home view
- [ ] User Edit View

**Sourcing**

- [x] bootstrap, client, angular, css

Client
-----

- [ ] set up controller
	- log in controller
	- shelf controller

[ ] create object
	- shelf object

[ ] GET route
	- get all items on shelf
[ ] POST route
	- post a new item to shelf

[ ] test


Server
-----

[ ] GET route

[ ] POST route

[ ] create DB

[ ] connect to DB


Database
----

[] test





Technologies
------------
* Mongo
* Express
* Angular
* Node
* Passport
* git
* github

Project Description
-------------------
Our client, **Prime Digital Academy: Room 1**, has asked for an app to simulate the behavior of their shelf. That is, a list of items placed on the classroom shelf.

Any visitor to the page can view the shelf, but only logged in users should be able to place objects on the shelf.

This will require some research, design, an implementation. Include a readme.md that includes the names of the group members and your team name/number. As well as any planning/docs. These can be in digital format or even pics of whiteboard/notebook sketches.

Shelf Object
------------
Items placed on the shelf should have the following data:

* description
* placer (user)
* image url (optional)

You're going to have to think about how/where to store this data. Recall that each item will have to be associated with a user!

Hard Mode
----------
* only logged in users can remove objects from the shelf
* styling

Pro Mode
--------
* logged in users can only remove their objects from the shelf
* show list of users only to logged in users

Super Mode
----------
* filter output by user (click on a user to only show items by that user)
* users can re-order shelf





=================
# Express/Passport Lecture Starting File
Download and run 'npm install' before the lecture as prep. In this lecture, we will build out a user registration page and allow our users to log into our application. Once they are logged in, we will see information returned to us, specific to the user.

## Branches
* `master`: Built using client-side routing with ngRoute instead of full HTML pages. Uses MongoDB.
* `sql_strategy`: Replaces master branch MongoDB with PostGRES for storage of user data. Maintains bcrypt functionality.


## OLD Branches

Historical record keeping, do not use these branches

* **DEPRECATED** `angular-complete`: Angular and MongoDB version as shown to Iota cohort.
* **DEPRECATED** `angular-controlled-login-intro`: Introduces Angular as the login handler. All server communication is handled in an Angular Controller and updates the route/page based on success or failure. Intended for an alternate intro lecture to Passport (as seen in angular-complete and sql_strategy). Uses MongoDB.
* **DEPRECATED** `angular-ctrl-with-routes`: Like `angular-controlled-login-intro` but is built using client-side routing with ngRoute instead of full HTML pages. Uses MongoDB.
