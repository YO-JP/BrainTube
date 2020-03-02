const express = require ('express');
const router = express.Router();
const uuid = require ('uuid');
const videos = require ('../../Videos.js');
const mainvideo = require ('../../MainVideo.js');


//Get VideoList
router.get('/', (req, res) => res.json(videos));

//Get MainVideo
router.get('/:id', (req,res) => {
    res.json(mainvideo.find(video => video.id === req.params.id))
});
//add if to see if req.params.id exists in MainVideo list

//Post Comments
router.post('/:id', (req,res) => {
    const timePost = new Date ();
    const newCommentScript=(req.body.newCommentData).comment;
    const newComment = {
        name: 'BrainStation TA',
        comment: newCommentScript,
        id: uuid.v4(),
        likes:0,
        timestamp: timePost
    };
    (mainvideo.find(video => video.id ===req.params.id)).comments.push(newComment);
    res.json(mainvideo.find(video => video.id === req.params.id));
})

//Upload Video
router.post('/', (req,res) => {
    const staticUUID = uuid.v4();
    const timeNow = new Date();
    const newTitle= (req.body.uploadDetail).title;
    const newDescription = (req.body.uploadDetail).description;
    const channelHardCode = "BrainStation"

    const newvid ={
        id: staticUUID,
        title: newTitle,
        channel: channelHardCode,
        image: "https://i.imgur.com/UZFOMzL.jpeg"
    }
    videos.push(newvid);
    const newVideo = {
        id: staticUUID,
        title: newTitle,
        channel: channelHardCode,
        image: 'https://i.imgur.com/UZFOMzL.jpeg',
        description: newDescription,
        views: '420',
        likes: '69',
        duration: '4:20',
        video: 'https://project-2-api.herokuapp.com/stream',
        timestamp: timeNow,
        comments: [
        {
        name: 'Micheal Lyons',
        comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.',
        id: '1ab6d9f6-da38-456e-9b09-ab0acd9ce818',
        likes: '0',
        timestamp: '1545162149000'
        },
        {
        name: 'Gary Wong',
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
        id: 'cc6f173d-9e9d-4501-918d-bc11f15a8e14',
        likes: '0',
        timestamp: '1544595784046'
        },
        {
        name: 'Theodore Duncan',
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
        id: '993f950f-df99-48e7-bd1e-d95003cc98f1',
        likes: '0',
        timestamp: '1542262984046'
        }
        ]
    }
    mainvideo.push(newVideo);
    res.json(mainvideo);
    })

    //Like Video
    router.put('/:id/likes', (req,res) => {
        const targetVideoData =((mainvideo.find(video => video.id ===req.params.id)));
        const countLike = parseFloat(targetVideoData.likes.replace(",",""))
        console.log(countLike)
        const updatedAccount = (countLike+1) 
        console.log(updatedAccount)
        const updatedAccountTrue = updatedAccount.toLocaleString('en-US');
        console.log(updatedAccountTrue);

        targetVideoData.likes = updatedAccountTrue;

        res.json(mainvideo.find(video => video.id === req.params.id));
    })
    

module.exports = router;        