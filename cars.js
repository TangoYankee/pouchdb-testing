const username = env.COUCHDB_USERNAME || 'firstObserver'
const password = env.COUCHDB_PASSWORD || 'firstObserverPassword'
const domain = env.COUCHDB_DOMAIN || 'localhost'
const port = 8000

// const carsDBR = new PouchDB(
//     `http://${domain}:${port}/cars`,
//     {
//         auth: {
//             username: username,
//             password: password
//         }
//     })

const carsDBR = new PouchDB(`http://${username}:${password}@${domain}:${port}/cars`)

var carsButton = document.getElementById("cars-btn")
carsButton.onclick = helloCars

function helloCars() {
    carsDBR.info()
        .then(info => console.log(info))
        .catch(err => console.warn(err))
}
