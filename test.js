var db = new PouchDB('test')

db.info()
.then(info=> {
    console.log(info)
})
.catch(err => {
    console.warn(err)
})
