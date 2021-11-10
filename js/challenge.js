let seconds = 0;
let counter = document.getElementById('counter'); 

document.addEventListener('DOMContentLoaded',(e)=> {
    e.preventDefault();
    timer = setInterval(increaseSec,1000);
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const like = document.getElementById('heart')
    const pause = document.getElementById('pause')
    const submit = document.getElementById('submit')
    
    minus.addEventListener ('click', (e)=>{
        seconds -= 1;
        counter.innerText = seconds;
    })
    plus.addEventListener('click', (e)=>{
        seconds += 1;
        counter.innerText = seconds;
    })
    let countlikes = 0;
    like.addEventListener('click',(e)=>{   
        let likearray = {
            'number' :'' ,
            'likes' : ''
        }
        countlikes +=1;
        likearray.likes = countlikes;
        likearray.number = counter.innerText;
        console.log(`answer ${likearray.number} and ${likearray.likes}` )
        countlikes = 0;
    })
    pause.addEventListener('click', (e) =>{
        if (pause.id === 'pause'){
        clearInterval(timer);
        plus.disabled = true;
        minus.disabled = true;
        like.disabled = true;
        pause.innerText = 'resume'
        pause.id = 'resume'
        }
        else if (pause.innerText = 'resume') {
        plus.disabled = false;
        minus.disabled = false;
        like.disabled = false;
        counter.innerText = 0 ;
        pause.innerText = 'pause'
        seconds = 0
        setInterval(increaseSec,1000)
        }
    })
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
        addComment(document.getElementById('comment-input').value)
    })


  
})
function addComment(com){
    let p = document.createElement('p');
    p.textContent = com;
    document.querySelector('#list').appendChild(p)
}

function increaseSec(){
    seconds += 1;
    counter.innerText = seconds;
}
