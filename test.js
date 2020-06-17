var db = new PouchDB('test')

db.info()
.then(info=> {
    console.log(info)
})
.catch(err => {
    console.warn(err)
})


const username = env.COUCHDB_USERNAME || 'firstObserver'
const password = env.COUCHDB_PASSWORD || 'firstObserverPassword'
const domain = env.COUCHDB_DOMAIN || 'localhost'
const port = env.COUCHDB_PORT || 5984

let headers = new Headers()
headers.set('Content-Type', 'application/json')
// headers.set('Authorization', 'Basic ' + btoa(username + ":" + password))

const authData = {
    name: username,
    password: password
}

const options = {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(authData)
}
fetch(`http://${domain}:${port}/_session`, options)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.warn('Error', err))
