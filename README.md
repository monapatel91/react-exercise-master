# Instructions
Link to finished app: https://react-exercise.now.sh/

Your task is to build a “typeahead” search functionality for US cities in JavaScript and React. See the finished app in the link above for how the app should function and look like.

Typeahead is also known as autocomplete or autosuggest. As the user types out a query in an input search bar, a typeahead dropdown menu appears with predictions of what the user is searching for. While the predicted results may be very sophisticated, the goal of this exercise is to show the names of cities that contain a match to the string that the user typed out.

You have freedom to implement this app using any component tree structure and hierarchy as you see fit while adhering to JavaScript and React best practices. You may `npm install` any libraries to help your development within reason, i.e. do not install a typeahead component that someone else already made. The only hard requirements are to use React, and you may take advantage of any feature of the React API (this app uses React v16.13.1 bootstrapped from `create-react-app`; we also **strongly encourage the use of React Hooks and modularly breaking down large components into smaller ones**).

## Requirements
- Main Requirements:
	- [ ] App dynamically shows list of US cities whose names have partial match to the user search input.
	- [ ] Search results show the city’s name, country, and number of likes
	- [ ] Clicking on a city from the results opens a sidebar containing the city’s details: name, country, number of likes, latitude, and longitude.
- Bonus:
	- [ ] 	App is styled similarly to the finished app.
	- [ ] 	Accomplish the above requirements with Redux.
	- [ ] Implement frontend tests using Jest, React Testing Library, and/or Enzyme.

## Notes
- To start the app, run `npm install` to install dependencies and `npm start` to start the local server at http://localhost:3000.
- For your data, you can import a static JSON file of US cities located in `src/us-cities.json`. Therefore, you will **not** have to request data from a remote server.
- You can use Chrome Developer Tools, including React Developer Tools. You may also consult documentation online. Please explain your debug process to us out loud whenever you hit an obstacle.
