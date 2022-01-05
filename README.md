# TasteBook - SEI Project 3

# Overview
TasteBook is a Full-Stack MERN (MongoDB, Express, React and Node) application with CRUD functionality. The project was created over a one week period in a group of three ([Evelina Kireilyte](https://github.com/evelinakireilyte) and [Yin-wai Tse](https://github.com/yin-wai)). TasteBook is a recipe-based app with social media type features using our own RESTful API. 

## Deployed -> [Tastebook](https://tastebook-yem.herokuapp.com/)

For the purpose of ease of access, you may login using the below details to view the fully featured version of TasteBook:
* Username: `milo`
* Password: `pass`

## Code Installation:
Clone or download the repository and run the following within the terminal:
* Install the project’s dependencies `yarn install`
* Initialise the database `mongod --dbpath ~/data/db`
* Seed the back-end server using node `yarn seed`
* Initialise the back-end server with nodemon `yarn serve`
* Move into the front-end folder `cd front-end`
* Initialise the front-end using node `yarn start`
<img width="1541" alt="Screenshot 2021-12-29 at 14 41 31" src="https://user-images.githubusercontent.com/89992629/147673602-d9e20cd5-033b-4bdc-a8f8-3f3261c0dbda.png">

# The Brief
* **Build a full-stack application** by making your own backend and your own front-end.
* **Use an Express API** to serve your data from a Mongo database.
* **Consume your API with a separate front-end** built with React.
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models.
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut.
* **Be deployed online** so it’s publicly accessible.

# Technologies Used
### Back-End
* Node.js
* MongoDB
* Mongoose
* Express
* Nodemon
* Bcrypt
* JSON Web Token

### Front-End
* React
* CSS
* Axios
* Cloudinary (image uploading and hosting)
* React-Router-Dom
* React Rating Stars Component

### Development Tools
* Asana (project management)
* Figma (wireframing)
* Postman
* Git & GitHub
* Heroku (deployment)
* VS Code
* Yarn

# Approach

## 1) Planning
After agreeing on creating a recipe-based app, we determined the features that TasteBook should have, as well as creating various wireframes. It was decided that only two models (recipe and user) were actually needed, but with various embedded and reference relationships. In terms of functionality it was agreed that the full range of CRUD for recipes was a must, as well as additional features of the user being able to favourite, comment on, and rate each recipe. Obviously authentication was also a must, and that the user should be able to view the recipes that they have added to the web-app. Finally, pages for a custom shopping list generator and an about section were incorporated. 

#### Wireframe - Home Page
<img width="815" alt="Screenshot 2022-01-04 at 09 08 50" src="https://user-images.githubusercontent.com/89992629/148050525-3b9d1cdb-7cab-4d2c-8309-73749c932240.png">

#### Wireframe - Profile Page
<img width="815" alt="Screenshot 2022-01-04 at 09 09 14" src="https://user-images.githubusercontent.com/89992629/148050549-42a03a0a-2cde-4e5c-80c3-f7d5da898aab.png">

The final planning step was to split up the various tasks and create a timeline for their completion. Asana was used for this purpose.

#### Asana
<img width="1477" alt="Screenshot 2022-01-04 at 09 12 48" src="https://user-images.githubusercontent.com/89992629/148050567-4e1eca6b-e17f-46a8-8a7c-2b71fd16f1c5.png">

It was agreed that the back-end setup process should be worked through together due to the importance of fully understanding its structure. Naturally there then followed some tweaking by individuals to adjust to the front-end needs and mutating feature desires. My personal responsibilities will be outlined later on. Finally, we also agreed to do a stand up to begin and end the day to ensure we knew how each other were getting on, and if there was any way that we could help with any issues.

## 2) Back-End
The recipe and user models were set up with Mongoose, and they incorporated the following relationships attached to their schemas:

#### Recipe Model
* Owner (reference)
* Comments (embedded)
* Liked by (reference)

#### User Model
* Created recipes (virtual, reference)
* Liked recipes (virtual, reference)

#### Code Snippet - Recipe Model
<img width="666" alt="Screenshot 2022-01-04 at 09 24 29" src="https://user-images.githubusercontent.com/89992629/148050639-6befb45e-f7a2-4f6a-89bc-2a045aa90626.png">

A virtual field for a recipe’s average rating was also created to keep track of each comment’s accompanying star rating in the front-end.

#### Code Snippet - Average Rating Virtual Field
<img width="563" alt="Screenshot 2022-01-04 at 09 26 09" src="https://user-images.githubusercontent.com/89992629/148050680-105023d8-4e3d-4273-a748-e8c964c50c16.png">

A virtual field was also used for the password confirmation field as well as for the aforementioned relationships.
Bcrypt and JSON Web Token were utilised for user validation, authentication and password hashing.
The backend was seeded with a large number of recipes (125) using a Python script. A total of 12 RESTful API endpoints were created for the front-end to consume.

## 3) Front-End
My responsibilities within the front-end were as follows:

### Home Page with Featured Content
The creation of the home page required sorting all of the recipes for three differing displays. These were in order of most recent, top rated, and most liked. Implementing this by creating routes on the backend to get all the recipes sorted in each way was considered but I felt handling it on the front-end would be more time efficient. The recipe card component then renders each recipe within the home page.

#### Code Snippet - Most Liked Recipes
<img width="540" alt="Screenshot 2022-01-04 at 11 20 51" src="https://user-images.githubusercontent.com/89992629/148051808-3883473e-53d6-484d-911b-1c73387d8740.png">

### User Profile Page
The profile page was a similar task, and required displaying the current user’s username, their favourited recipes and their added recipes. For this the hard work was done by the back-end by populating the user JSON response with these recipes.

#### Code Snippet - User’s Liked Recipes
<img width="470" alt="Screenshot 2022-01-04 at 09 55 03" src="https://user-images.githubusercontent.com/89992629/148050805-94a593e3-cc57-4344-83f7-d2e1d0b81872.png">

### Favouriting Recipes
This functionality was handled by an Axios put request to handle favouriting and subsequently unfavouriting of recipes. The user’s ID would be pushed or removed from the recipe’s information, and the displayed number of likes and the icon would be updated accordingly. Additionally, the functionality to like would change to a ‘please login’ message depending on whether the user was currently logged in or not.

### Add, Edit and Delete Recipes
The handling of these CRUD operations required form inputs for edit and delete, which were sent using Axios to the backend to alter the database. The permission to edit or delete a recipe (i.e. the user being its owner) was verified on both the front and back-end, and neither icon is rendered if the current user is indeed not the owner.

### Shopping List
The shopping list page was built using three components. These were for the input, for the list generation (and removing items), and for showing the full shopping list page. 

#### Code Snippet - Shopping List Show
<img width="646" alt="Screenshot 2022-01-04 at 10 06 55" src="https://user-images.githubusercontent.com/89992629/148050881-6c5c3ce7-0c16-4405-8b95-856a36b3fd99.png">

### Nav Bar
The Nav Bar handled the user logging out, by removing the token from local storage and informing the rest of the web-app to recognise this. Logically, the Nav Bar dynamically shows the user’s options of logging out or logging in/registering.

## 4) Styling

We decided to use custom CSS and no libraries for the project in order to have full control over TasteBook’s look. We agreed on the logo, the font, and the colour scheme to apply. We then separated the tasks according to the front-end pages that we had built before meeting back together to review some finishing touches.

# TasteBook - Screenshot Walkthrough

#### Home Page
<img width="960" alt="Screenshot 2022-01-04 at 10 45 32" src="https://user-images.githubusercontent.com/89992629/148050989-2d834207-063f-4bfe-945c-4bf9911e5aca.png">

#### Browse Page
<img width="898" alt="Screenshot 2022-01-04 at 10 46 06" src="https://user-images.githubusercontent.com/89992629/148051003-43b69910-92a9-4dd0-85de-f862db895c22.png">

#### Recipe Show Page
<img width="885" alt="Screenshot 2022-01-04 at 10 46 33" src="https://user-images.githubusercontent.com/89992629/148051016-444f1364-53dd-4597-bd0a-45fc4455fa2b.png">

#### Comments
<img width="940" alt="Screenshot 2022-01-04 at 10 46 57" src="https://user-images.githubusercontent.com/89992629/148051040-3141ad0b-9684-4dc5-b904-23ecc3a771ba.png">

#### Shopping List Page
<img width="987" alt="Screenshot 2022-01-04 at 10 48 09" src="https://user-images.githubusercontent.com/89992629/148051053-061113cc-fb95-469f-99b1-830d40fccb0c.png">

#### About Page
<img width="925" alt="Screenshot 2022-01-04 at 10 48 35" src="https://user-images.githubusercontent.com/89992629/148051060-75ff1344-f84d-4721-87a3-fda189aac6f9.png">

#### Profile Page
<img width="698" alt="Screenshot 2022-01-04 at 10 49 06" src="https://user-images.githubusercontent.com/89992629/148051069-6e5e0419-c603-48b2-b23c-4511e1a9c257.png">

#### Login Page
<img width="534" alt="Screenshot 2022-01-04 at 10 49 52" src="https://user-images.githubusercontent.com/89992629/148051079-73e4e2d8-f15a-4d07-a6f6-6deae327f1fd.png">

# Wins & Blockers

### **Wins**
* Building a full-stack (MERN) project for the first time.
* The professional appearance of the web-app.
* Creating many relationships between back-end models to allow features such as favouriting and comments/ratings.

### **Blockers**
* Initially it took some time to figure out the best way to manifest the application’s relationships, namely with favouriting.  However, the ability to simply use JavaScript in manipulating the back-end greatly sped up the process.
* Unfortunately one of our team members was ill during half of the project, but this led to valuable experience in how to adapt to such unpredictable issues.

# Bugs
* The browse page is currently not fully responsive to mobile devices.
* The response of the icon state to switch between the favourite and unfavourite action sometimes has issues.

# Future Improvements
* Implement the search recipe function, including by category or other such queries.
* Improve the look of the form elements.

# Key Takeaways
Working in a group of three was a great way to learn about how to best communicate, plan and delegate responsibilities.  I really felt I pushed myself in terms of the personal responsibility I took on, and I was delighted to see it come to fruition at the end. Building a first full project using the MERN stack was highly enjoyable, and I will definitely seek out utilising it again due to its customisability and widespread use.
