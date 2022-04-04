let videos = require('../data/videos')
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(videos)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const video = videos.find((p) => p.id === id)
        resolve(video)
    })
}

function create(video) {
    return new Promise((resolve, reject) => {
        const newVideo = { id: uuidv4(), ...video }
        videos.push(newVideo)
        writeDataToFile('./data/videos.json', videos)
        resolve(newVideo)
    })
}

function update(id, video) {
    return new Promise((resolve, reject) => {
        const index = videos.findIndex((p) => p.id === id)
        videos[index] = { id, ...video }
        writeDataToFile('./data/videos.json', videos)
        resolve(videos[index])
    })
}


module.exports = {
    findAll,
    findById,
    create,
    update
}