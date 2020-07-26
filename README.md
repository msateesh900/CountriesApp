# Country App

The main goal of this application is to create a React Application to show a list of countries, and then showing for each country the data associated to it.

## Instructions

Fork the current repository and start the skeleton executing the following scripts:

```s
yarn install
yarn start
```

The application provides a basic setup using **Create React App** with a typescript template.

The description of the API is available [here](https://restcountries.eu/?ref=public-apis)

### Implemented Techs

1. Used Hooks and Functional Components
2. Implemented test Cases using Jest (Jest is already setup in the project and ready to be executed through the command `yarn test`)

### Functional Implementations

1. The main page will display the list of countries, allowing filtering and sorting by the population of the capital city of the country

2. Once we select the country, it shows the following information of the country:

   1. Capital City with the related info
   2. Language
   3. Currency

3. Provided a way to filter out countries by name or code

4. Provided a way to sort countries (ASC/DESC) by the population of its capital city

5. Added tests associated to the filter and sorting features

6. Added styles for displaying the items in a user friendly way
