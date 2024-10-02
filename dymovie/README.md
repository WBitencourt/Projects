<h1 align="center">
  <img alt="Rocketseat" height="80" title="DYMOVIE" src="dymovie-mobile/src/assets/logo264x262-noback.png" />
  <br/>
  DYMOVIE
</h1>

```diff
@@ Project under development @@
```

## 💻 Project
An app developed with the goal of allowing people to rate movies and share their experiences,
leading other users to watch them too, regardless of the streaming platform the movie is on.

## 🤓 Personal Goal
My initial goal with this project is not to create a product to be released to the market,
but rather to develop skills related to React, from the beginning to the end of an application
covering as many resources offered by this framework as possible and to be entirely of my own authorship.

## 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/file/OxBAc8sDO8JssN8c72oSmu/DYMOVIE?node-id=0%3A1). 
An account on [Figma](http://figma.com/) is required to access it.
<br />
Developed by Wendell Bitencourt(@wbitencourt).

## ✨ Technologies

# Mobile
- Figma
- React Native
- JavaScript
- Context API
- Babel
- Eslint
- Jest
- Styled Components
- Axios
- Postman
- React Navigation
- React Vector Icons (Font Awesome)

# Back-end
- Express
- JavaScript
- TypeScript
- Prisma
- Jest
- PostgreSQL
- MongoDB
- Migrations
- SWC
- Cors

## :hammer_and_wrench: Features 

# Mobile
-   [ ] User must log in or register on the platform.
-   [ ] The system provides 4 shortcuts of screens in the bottom menu. 🏠 | 🔍 | ⭐ | 🙍‍♂️
-   [ ] 🏠 Home: Displays three categories "Popular in the community", "Top rated", "Least rated".
-   [ ] 🏠 Home >> Popular in the community: Shows the most commented movies in the community.
-   [ ] 🏠 Home >> Top rated: Shows the highest rated movies in the community, i.e., movies with a rating of 4 or higher.
-   [ ] 🏠 Home >> Least rated: Shows the least rated movies in the community, i.e., movies with a rating of 3 or lower.
-   [ ] 🔍 Search: Directs the user to the search screen, where they can search for a movie, touch it, and be directed to the information screen.
-   [ ] ⭐ Favorites: Allows searching and viewing movies marked as favorite, if the cards are touched, the information screen will open.
-   [ ] Information: Allows viewing the movie's rating within the community, as well as marking as favorite, watched, adding a comment, viewing the synopsis, and rating from 1 to 5.
-   [ ] 🙍‍♂️ Profile: Allows changing the photo that is public when a comment is made, as well as viewing your notifications, account data, seeing application data, and exiting the system.
-   [ ] Notifications: Allows the user to see data from the likes received.
-   [ ] Account: Allows changing account data.
-   [ ] About: Allows checking the application version.
-   [ ] Exit: Performs the app logoff by clearing session data, requiring login again.

# Back-end
-   [ ] Back-end built on a REST application base.
-   [ ] Allows registering signup data and movie rating flow via HTTP POST method.
-   [ ] Allows consulting the movie ratings and user data via HTTP GET method.
-   [ ] Has unit tests (npm run test).
-   [ ] Adheres to SOLID principles.
-   [ ] Uses the ORM Prisma as intermediaries when performing database operations.
-   [ ] Developed with PostgreSQL and MongoDB
-   [ ] Configured to transpile TypeScript code to JavaScript, command "npm build".

## Running the project

# Mobile
For the steps below to work correctly, it is necessary that the entire development environment is correctly configured.
Therefore, check or follow the steps by clicking [this link](https://reactnative.dev/docs/environment-setup).

Use **yarn** or **npm install** to install the project dependencies.
Then, start the metro.

Step 1:
```cl
npm install
```
or

```cl
yarn install
```

Step 2:
```cl
npx react-native start
```
or

```cl
yarn react-native start
```

After the Metro starts, open a new terminal and execute the command to open the emulator.

Step 3:
 ```cl
emulator -no-snapshot -avd <Your emulator name here>
```

Step 4:
 ```cl
npx react-native run-android
```
or

 ```cl
yarn react-native run-android
```

## 📄 License

This project was developed by Wendell Bitencourt.

<br />

---
