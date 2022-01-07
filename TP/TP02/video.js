
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        video = document.getElementById('video'),
        button = document.getElementById('myBtn');

    //Play and Pause video
    button.addEventListener("click", function(){
        if(video.paused){
            video.play();
            button.innerHTML = "Pause";
        }else{
            video.pause();
            button.innerHTML = "Play";
        }
    })
    //Access video
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then((stream)=> {
        video.srcObject = stream;
    }).catch((err)=> {
       console.log('navigator.mediaDevices.getUserMedia error: ',err.message,err.name);
    });
    //Loop drawing video
    (function loop(){
        if(playing){
            canvas.getContext('2d').drawImage(video,0,0,canvas.Width,canvas.height);
            setTimeout(loop,1000/30);
        }    
    });