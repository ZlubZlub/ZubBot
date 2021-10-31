const fs = require('fs');
const crypto = require('crypto');

const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const addRegisterUser = (userid, sender, age, time, serials) => {
  const daftarkan = []
  const obj = {
    id: userid,
    name: sender,
    age: age,
    time: time,
    serial: serials
  }
  daftarkan.push(obj)
  fs.writeFileSync('./database/user/registered.json', JSON.stringify(daftarkan))
}

const checkRegisterUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
    if (_registered[i].id === sender) {
    status = true
    }
  })
  return status
}

const getRegisterPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}