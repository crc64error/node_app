const http = require('http')
const { getVideos, getVideo, createVideo, updateVideo } = require('./controllers/videoController')

const server = http.createServer((req, res) => {
    if (req.url === '/api/videos' && req.method === 'GET') {
        getVideos(req, res)
    } else if (req.url.match(/\/api\/videos\/([a-z0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getVideo(req, res, id)
    } else if (req.url === '/api/videos' && req.method === 'POST') {
        createVideo(req, res)
    } else if (req.url.match(/\/api\/videos\/([a-z0-9]+)/) && req.method === 'PUT') {

        // update times out if multiple items are included with the post that are not updated in the current build.

        const id = req.url.split('/')[3]
        updateVideo(req, res, id)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})



const PORT = process.nextTick.PORT || 80

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))