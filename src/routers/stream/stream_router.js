const express = require("express")
const bodyParse = require("body-parser")
const router = express.Router();
const auth = require("../../config/auth.js")

router.use(bodyParse.json())


router.get("/video",  auth.validateToken, async (req, res) => {
    const range = req.headers.range;
    const videoPath = "src/assets/olimpiadas.mp4";
    const videoSize = fs.statSync(videoPath).size;

    const chunkSize = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chunkSize, videoSize - 1);

    const contentLength = end - start + 1; 

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,	
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };


    res.writeHead(206, headers);

    const stream = fs.createReadStream(videoPath, { start, end });
    stream.pipe(res);
});


module.exports = router;
