
function updateStatus(){
  if(navigator.onLine){
    // $('main').css('display','none');
    $('body').before().html('<div class="rounded bg-dark mx-3 mx-md-4 mx-sm-4 p-2 text-center text-success">Back Online</div>')
    $('.internet-status-container').css('display','block');
  }else{
    // $('main').css('display','none');
    $('body').before().html('<div class="rounded bg-dark mx-3 mx-md-4 mx-sm-4 p-2 text-center text-danger"><i class="fas fa-wifi"></i><br>Your are currently offline</div>')
    $('.internet-status-container').css('display','block'); 
  }
}
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);



const spinner=`<div class="text-center"><div class="spinner-border spinner-dark" role="status"></div></div>`



const playArea= document.querySelector('#play-area')

var divPop = $('<button class=" btn rounded-lg " id="random" onclick="playPopSound()"></button>');

const BgCollection= ['#455954','#9d7463','yellow','#dfdbd8','#A3845A','#6DF0AF','#9839A3','#BB2020','#06111C','#FFEB4D','#90CBFB','#4B3617','#D94C1A','#A6341B','#60371E'];


var popSound = document.getElementById("pop");
var missSound = document.getElementById("miss");
        

var game;

var score=0;

var prevScores= ['__','__','__','__','__'];

$('#prev-scores').html(`<div class='col h4'>${prevScores.map(function(val){ return `<span class='text-success badge badge-dark p-2'>${val}</span>`; }).join(' ')}</div>`);

if( localStorage.getItem('prevScores') !== null){
    const prevScoresFromLocalStorage = localStorage.getItem('prevScores')
    if (prevScoresFromLocalStorage && prevScoresFromLocalStorage.length) {
    const prevScoresLS = JSON.parse(prevScoresFromLocalStorage);
    $('#prev-scores').html(`<div class='col h4'>${prevScoresLS.map(function(val){ return `<span class='text-success badge badge-dark p-2'>${val}</span>`; }).join(' ')}</div>`);
}
}

// if(localStorage.getItem('prevScores') != null ){
//     prevScores = localStorage.getItem('prevScore');
// }else{
//     prevScores= [];
// }




var duration='unset';

var difficulty;

var roundTime='unset'

$('#score #last-score').html(`${localStorage.getItem('lastScore')}`);



function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
}


function setDifficulty(){
    duration = $('input[name="inlineRadioOptions"]:checked').val();
    console.log(duration);

    if(duration=='1500'){
        difficulty = 'easy';
    }
    if(duration=='1000'){
        difficulty = 'normal';
    }
    if(duration=='700'){
        difficulty = 'hard';
    }
}

function setTime(){
    roundTime = $('input[name="inlineRadioOptions2"]:checked').val();
    console.log(roundTime);
}



function playPopSound(){
    //console.log('played sound')
    popSound.play();
}
function playMissSound(){
    //console.log('played sound')
    missSound.play();
}

function changeBg(){
    var randomBg = BgCollection[Math.floor(Math.random()*BgCollection.length)]
    $('#random').css('background',randomBg);
}
 

 function randomDivShow(){
    divPop.css({
        top: Math.random() * ($('#play-area').height() - divPop.height()-30) + 'px',
        left: Math.random() * ($('#play-area').width() - divPop.width()-30) + 'px',
    })
    changeBg();
    $('#play-area').html(divPop);

    $('#random').on('click',(e)=>{
        //console.log('score+')
        score+=2;
        changeBg();
        $('#curr-score').html(`${score}`);
        e.stopPropagation();
    })
   
}


$('#play-area').on('click',()=>{
    console.log('score-')
    if(score>0){
        --score;
        playMissSound();
        $('#curr-score').html(`${score}`);
    }
})


$('#start').on('click', ()=>{
    
     score=0;
     clearInterval(game);
     if(duration=='unset' || roundTime=='unset'){
         $('#errModal').modal();
     }
     else{
        openFullscreen();
        $('.play-area-container').addClass('show-before');
        $('.live-score').css('display','block');
        // $('#difficulty').html(`<h4><span class='badge badge-secondary text-light'>${difficulty}</span></h4>`);
        
        $('html,body').animate(
            {
            scrollTop: $(".play-area-container").offset().top - 50 +'%'
            }, 500);

           

        setTimeout(()=>{
            $('#stop').css('opacity','1');
            $('#stop').css('display','inline');
            $('#stop').attr('disabled','disabled');
            $('#stop').removeClass('btn-danger');
            $('#stop').addClass('btn-secondary');

            $('#start').css('opacity','0');
            $('#start').css('display','none');
        },100)

        $('#play-area').html(`<span class="info-msg h3 text-white" id='dots'>Starting</span>`)

        setTimeout(() => {
            
            game = setInterval(randomDivShow , duration);

            mins=roundTime;
            secs= mins * 60;

            Countdown();

            setTimeout(()=>{
                $('#stop').removeAttr("disabled");
                $('#stop').removeClass('btn-secondary');
                $('#stop').addClass('btn-danger');
            },900)

        }, 1500); 
     }
})


$('#stop').on('click', ()=>{
    mins=-1;
    secs= mins * 60;
    //stopGame();
});


function stopGame(){
    closeFullscreen();
    $('.play-area-container').removeClass('show-before');
    $('.live-score').css('display','none');
    clearInterval(game);

    $('#play-area').html('<span class="info-msg h3 text-danger"><img src="./img/game-over.png" style="height:90px; width:90px;" /><br>Game Over</span>');
    $('#curr-score').html(`0`);
    localStorage.setItem('lastScore', score);

    //console.log(prevScores);
    prevScores.unshift(localStorage.getItem('lastScore')); 
    if(prevScores.length>5){
        prevScores.pop(); //
    }
    $('#score #last-score').html(`${localStorage.getItem('lastScore')}`);
    $('#prev-scores').html(`<div class='col h4'>${prevScores.map(function(val){ return `<span class='text-success badge badge-dark p-2'>${val}</span>`; }).join(' ')}</div>`);
    localStorage.setItem('prevScores', JSON.stringify(prevScores))
    //$('#prev-scores').html(`${localStorage.getItem('prevScores').toString()}`);
    score=0;
    setTimeout(()=>{
        $('#stop').css('opacity','0');
        $('#stop').css('display','none');

        $('#start').css('opacity','1');
        $('#start').css('display','inline');
        $('#start').html('<i class="fas fa-redo-alt"></i> Play again');
    },100);

    $('#scoreModal').modal({backdrop: 'static', keyboard: false});


    $('#score-modal-body #performance-msg').html(`${spinner}`);
    $('#score-modal-body #modal-last-score').html(``);
    $('#score-modal-body #modal-last-level').html(``);
    $('#score-modal-body #credit-msg').html(``);

    setTimeout(() => {    
        
        $('#score-modal-body #modal-last-score').html(`
        <img src="./img/trophy.png" alt="Points" style="height: 20px; width: 20px;">
        &nbsp;&nbsp;${localStorage.getItem('lastScore')}
        `);

        $('#score-modal-body #modal-last-level').html(`
        <img src="./img/level.png" alt="Points" style="height: 20px; width: 20px;">
        &nbsp;&nbsp;${difficulty}
        `);

        $('#modal-last-time').html(`&nbsp;- ${roundTime} min`)

        let credit = parseInt(localStorage.getItem('credit')) 
        let newCredit = credit + Math.floor(parseInt(localStorage.getItem('lastScore'))/5)
        
        localStorage.setItem('credit', newCredit)

        $('#score-modal-body #credit-msg').html(`$${Math.floor(parseInt(localStorage.getItem('lastScore'))/5)} credit has been added to your lottery match.<br><br><a href='../index.html' class='btn btn-sm btn-secondary'>Go back to lottery</a>`);

    
        if(localStorage.getItem('lastScore')>100){
            $('#score-modal-body #performance-msg')
            .html(`
            <img class='rounded p-2' src='./img/congo.gif' />
            <br>
            <h4 class='text-success'>Congratulations on scoring 100+ points!</h4>
            `)
        }else if(localStorage.getItem('lastScore')==0){
            $('#score-modal-body #performance-msg')
            .html(`
            <img class='rounded p-2' src='./img/oops.gif' />
            <br>
            <span class='h4 text-danger'>Oops, Aim for above zero next time.</span>`)
        }
        else{
            $('#score-modal-body #performance-msg')
            .html(`
            <img class='rounded p-2' src='./img/notbad.gif' />
            <br>
            <span class='h4 text-dark'>Not bad, Keep popping those pops.</span>`)
        }
    }, 1500);

}


//Countdown for different rounds
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

//Decrement function decrement the value.
function Countdown() {
                    console.log(secs);
                    //if less than a minute remaining
                    //Display only seconds value.
                   

                    if (seconds < 59) {
                        seconds.value = secs;
                    }
                    //Display both minutes and seconds
                    //getminutes and getseconds is used to
                    //get minutes and seconds
                    else {
                        if(getminutes()<10){
                            minutes.value = '0'+getminutes();
                        }else{
                            minutes.value = getminutes();
                        }
                        if(getseconds()<10){
                            seconds.value = '0'+getseconds();
                        }else{
                            seconds.value = getseconds();
                        }
                    }
                    //when less than a minute remaining
                    //colour of the minutes and seconds
                    //changes to red
                    if (secs < 10) {
                        minutes.style.color = "red";
                        seconds.style.color = "red";
                        //seconds.value = '0'+seconds.value;
                    }else{
                        minutes.style.color = "white";
                        seconds.style.color = "white"; 
                    }

                    // if(mins<10){
                    //     minutes.value = '0'+minutes.value;
                    // }

                    //if seconds becomes zero,
                    //then page alert time up
                    if (secs < 0) {
                        stopGame();
                        minutes.value = 0;
                        seconds.value = 0;
                    }
                    //if seconds > 0 then seconds is decremented
                    else {
                        secs--;
                        setTimeout('Countdown()', 1000);
                    }
}
    
function getminutes() {
                    mins = Math.floor(secs / 60);
                    return mins;
}

function getseconds() {
                    return secs - Math.round(mins * 60);
}
    
setInterval(()=>{
    $('#dice-loader').toggleClass('fa-dice-d6 fa-dice-d20')
},1500)
















   
