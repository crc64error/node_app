const Video = require('../models/videoModel')

const { getPostData } = require('../utils')

// @desc    Gets All Videos
// @route   GET /api/videos
async function getVideos(req, res) {
    try {
        const videos = await Video.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(videos))
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Single Video
// @route   GET /api/video/:id
async function getVideo(req, res, id) {
    try {
        const video = await Video.findById(id)

        if (!video) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Video Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(video))
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a video
// @route   POST /api/videos
async function createVideo(req, res) {
    try {
        const body = await getPostData(req)

        const { title, videoUrl, videoDescription, videoAuthor, dateAdded } = JSON.parse(body)

        const video = {
            title,
            videoUrl,
            videoDescription,
            videoAuthor,
            dateAdded
        }

        const newVideo = await Video.create(video)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newVideo))

    } catch (error) {
        console.log(error)
    }
}

// @desc    Update a video
// @route   PUT /api/videos/:id
async function updateVideo(req, res, id) {
    try {
        const video = await Video.findById(id)

        if (!video) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Video Not Found' }))
        } else {
            const body = await getPostData(req)

            const { title, videoUrl, videoDescription, videoAuthor, dateAdded } = JSON.parse(body)

            const videoData = {
                title: title || video.title,
                videoUrl: videoUrl || video.videoUrl,
                videoDescription: videoDescription || video.videoDescription,
                videoAuthor: videoAuthor || video.videoAuthor,
                dateAdded: dateAdded || video.dateAdded
            }

            const updVideo = await Video.update(id, videoData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updVideo))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getVideos,
    getVideo,
    createVideo,
    updateVideo
}