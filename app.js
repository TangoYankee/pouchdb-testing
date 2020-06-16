const PouchDB = require('pouchdb')

const carsDB = new PouchDB('cars')

const username = process.env.CARSRDB_USERNAME || 'firstObserver'
const password = process.env.CARSRDB_PASSWORD || 'firstObserverPassword'
// Remote Database
const carsRDB = new PouchDB('http://localhost:5984/cars',
    {
        "auth":
        {
            "username": username,
            "password": password
        }
    })

// https://stackoverflow.com/a/51264150/13729626
const cookiesDB = new PouchDB('http://localhost:5984/basic',{
    fetch: (url, opts) => fetch(url, {...opts, credentials: 'same-origin'})
})

cookiesDB.info()

carsRDB.info()
    .then((info) => {
        console.log(info)
    })
    .catch(err => {
        console.warn(err)
    })

// How to load packages into the browser via the console
// https://stackoverflow.com/a/15954779/13729626
// var jq = document.createElement('script');
// jq.src = "/path/to/jQuery.min.js";
// document.getElementsByTagName('head')[0].appendChild(jq);
// jQuery.noConflict();
