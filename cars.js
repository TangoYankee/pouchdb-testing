const username = env.COUCHDB_USERNAME || 'firstObserver'
const password = env.COUCHDB_PASSWORD || 'firstObserverPassword'
const domain = env.COUCHDB_DOMAIN || 'localhost'
const port = 3000

// TODO: Prod/Dev protocol needs to changed between http and https
const carsDBR = new PouchDB(`http://${domain}:${port}/cars`,
    {
        // Whether to include basic authorization changes depending on whether there is an origin
        auth:
        {
            "username": username,
            "password": password
        },
        fetch: (url, opts) => {
            // Whether to include credentials changes when there is an origin
            opts.credentials = 'omit'
            return PouchDB.fetch(url, opts)
        }
    })

// const carsDBR = new PouchDB(`http://${username}:${password}@${domain}:${port}/cars`)

var carsButton = document.getElementById("cars-btn")
carsButton.onclick = helloCars

function helloCars() {
    carsDBR.info()
        .then(info => console.log(info))
        .catch(err => console.warn(err))
}
