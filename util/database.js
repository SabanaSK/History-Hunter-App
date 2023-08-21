import * as SQLite from "expo-sqlite";

import Place from "../models/Place";



const db = SQLite.openDatabase("places.db");

export const initializeDBAsync = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places(
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }

      )

    })
  })
  return promise;
}

export const insertPlaceAsync = (place) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          console.log(result)
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }

      )

    })
  })
  return promise;
}

export const getAllPlacesAsync = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const allPlaces = result.rows._array.map((dp) => {
            console.log("Image URI:", dp.imageUri);
            return new Place(
              dp.title,
              dp.imageUri,
              {
                address: dp.address,
                lat: dp.lat,
                lng: dp.lng,
              },
              dp.id
            );
          })
          resolve(allPlaces);
        },
        (_, error) => {
          reject(error);
        }

      )

    })
  })
  return promise;
}