* * *

#### Description

One of my first React applications. I've made this while studying with the
OpenClassrooms as one of my projects. I designed the interface and sourced data
from Google to show local restaurants and their respective reviews.

#### Skills and technology

Stack:
- [ReactJS](https://reactjs.org/)
- [Semantic UI React](https://react.semantic-ui.com/)
- JS, CSS3, HTML5

I initially wrote this application with class components and minor functional
components. Then hooks showed up in the React world, and I learned the power of 
adding simple state into functional components. This sparkled a refactoring, and 
I re-wrote the application using local state and Context API. I've recently taken
the application to Firebase and made it slightly more robust with the use of 
cloud functions.

#### Links

[Github Repo](https://github.com/akdsco/foodie-b)

[Live App](https://foodie-b.herokuapp.com/)

#### Code examples

A custom hook to help with state management (saving previous object key/values)

```javascript
import { useState } from 'react'

export default function useObjectState(initialState) {
  const [data, setData] = useState(initialState);

  function saveNewData(value) {
    setData(prevData => ({
      ...prevData,
      ...value
    }));
  }
  
  return [data, saveNewData]
}
```

A custom hook to save value from form field

```javascript
import { useState } from "react";

export default function useUpdate(initialState) {
  const [data, setData] = useState(initialState);

  function handleData(e, value) {
    setData(value);
  }
  
  return [data, handleData];
}
```

Function that loads google restaurants

```javascript
const loadGooglePlacesRestaurants = () => {
    const { center, searchRadius, restaurants } = this.state;
    const restaurantsFromFile = restaurants
      .slice()
      .filter((restaurant) => restaurant.isFromFile);
    
    fetch(FIREBASE_LOAD_RESTAURANTS, {
      method: "POST",
      body: JSON.stringify({
        center: center,
        searchRadius: searchRadius,
        count: restaurantsFromFile.length,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { restaurants } = JSON.parse(data.body);
        this.setState((prevState) => ({
          restaurants: [...restaurantsFromFile, ...restaurants],
          flags: {
            ...prevState.flags,
            isLoadingRestaurants: false,
          },
        }));
      })
      .catch((err) =>
        console.log(
          "Error in loadGooglePlacesRestaurants fetch function: ",
          err
        )
      );
  };
```

Cloud function that handles API fetch

```javascript
const functions = require("firebase-functions");
const express = require("express");
const fetch = require("node-fetch");
const send = require("../send.js");
const cors = require("cors")({ origin: "*" });

function loadRestaurants(req, res) {
  const { center, searchRadius, count } = JSON.parse(req.body);
  const { lat, lng } = center;
  
  async function fetchGoogleImage(data) {
    return await Promise.all(
      data.map(async (restaurant) => {
        const googlePhotoUrl =
          `https://maps.googleapis.com/maps/api/place/photo?` +
          `maxwidth=150` +
          `&photoreference=${restaurant.photo_reference}` +
          `&key=${functions.config().foodieb.mapkey}`;

        const res = await fetch(googlePhotoUrl, {
          method: "GET",
        });

        const { photo_reference, ...rest } = restaurant;
        
        return {
          ...rest,
          thumb_photo_url: res.url,
        };
      })
    );
  }


  const googlePlaceUrl =
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?` +
    `location=${lat},${lng}` +
    `&radius=${searchRadius}` +
    `&type=restaurant` +
    `&key=${functions.config().foodieb.mapkey}`;

  function fetchGoogleData() {
    let idNumber = count - 1;
    return fetch(googlePlaceUrl, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.results.map((r) => {
          idNumber += 1;

          return {
            id: idNumber,
            photo_reference: r.photos[0] ? r.photos[0].photo_reference : "",
            place_id: r.place_id,
            isFromFile: false,
            numberOfReviews: r.user_ratings_total > 5 ? 5 : r.user_ratings_total,
            avgRating: r.rating,
            restaurantName: r.name,
            address: r.vicinity,
            lat: r.geometry.location.lat,
            lng: r.geometry.location.lng,
            open: r.opening_hours ? r.opening_hours.open_now : true,
            loadedDetails: false,
          };
        });
      })
      .catch((err) => {
        console.log("Problem when fetching from Google Places API: ", err);
      });
  }

  async function getData() {
    const googleRestaurants = await fetchGoogleData();
    const restaurantsWithImageLink = await fetchGoogleImage(googleRestaurants);
    send(res, 200, { restaurants: restaurantsWithImageLink });
  }


  getData()
    .then(() => console.log("Job done successfully."))
    .catch((err) => console.log("Sorry, error in function getData(): ", err));
}


const app = express();
app.use(cors);

app.post("/", (req, res) => {
  // Catch any unexpected errors to prevent crashing
  try {
    loadRestaurants(req, res);
  } catch (err) {
    console.log("Error in express catch: ", err);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`,
    });
  }
});

module.exports = app;
```
* * *

