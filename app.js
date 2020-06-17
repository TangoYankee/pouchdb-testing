// const PouchDB = require('pouchdb')

const username = env.COUCHDB_USERNAME || 'firstObserver'
const password = env.COUCHDB_PASSWORD || 'firstObserverPassword'
const domain = env.COUCHDB_DOMAIN || 'localhost'
const port = env.COUCHDB_PORT || 5984
const carsDB = new PouchDB('cars')
// Basic Auth through PouchDB
const carsDBR = new PouchDB(`http://${domain}:${port}/cars`,
    {
        "auth":
        {
            "username": username,
            "password": password
        }
    })

// https://stackoverflow.com/a/51264150/13729626
// const cookiesDB = new PouchDB('http://localhost:5984/basic',{
//     fetch: (url, opts) => fetch(url, {...opts, credentials: 'same-origin'})
// })

carsDBR.info()
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

// Basic Auth through fetch
let basicAuthHeaders = new Headers()
basicAuthHeaders.set('Authorization', 'Basic ' + btoa(username + ":" + password))

// Cookie Auth through fetch
let cookieAuthHeaders = new Headers()
cookieAuthHeaders.set('Content-Type', 'application/json')

const authData = {
    name: username,
    password: password
}

const options = {
    method: 'POST',
    headers: cookieAuthHeaders,
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(authData)
}

fetch(`http://${domain}:${port}/_session`, options)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.warn('Error', err))


var welcomeButton = document.getElementById('welcome-button')
welcomeButton.onclick = getWelcomed

function getWelcomed() {
    fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(data => {
            alert(data.couchdb)
        })
        .catch(err => {
            console.warn(err)
        })
}
