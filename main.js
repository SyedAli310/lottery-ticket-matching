

const div = document.querySelector('#dyn-array')

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')


const time = document.querySelector('#time')
const msg = document.querySelector('.msg')
const timeUp = document.querySelector('.timeUp')

const startBtn = document.querySelector('#start')
const showToken = document.querySelector('.token')

let token = [34,53,45,67,99]

let score = []
let points = 0

matched = false




function start(){

    function matchToken(){

        if(arr[0] == token[0] && arr[1] == token[1] ){
            if(score.includes('1,2') == false){
                one.style.animation='greenFlash 1s ease '
                two.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    one.style.animation = ''
                    two.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span class='matched-info'>(1,2)</span>`
                score.push('1,2')
                points+=5
                console.log(score)
            }  
        }
        else if(arr[0] == token[0] && arr[2] == token[2]){
            if(score.includes('1,3') == false){
                one.style.animation='greenFlash 1s ease '
                three.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    one.style.animation = ''
                    three.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(1,3)</span>`  
                score.push('1,3')
                console.log(score)
            }  
        }
        else if(arr[0] == token[0] && arr[3] == token[3] ){
            if(score.includes('1,4') == false)  {
                one.style.animation='greenFlash 1s ease '
                four.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    one.style.animation = ''
                    four.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(1,4)</span>` 
                score.push('1,4')
                console.log(score)
            }
        }
        else if(arr[0] == token[0] && arr[4] == token[4] ){
            if(score.includes('1,5') == false){
                one.style.animation='greenFlash 1s ease '
                five.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    one.style.animation = ''
                    five.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(1,5)</span>` 
                score.push('1,5')
                console.log(score)
            }  
    
        }
        else if(arr[1] == token[1] && arr[2] == token[2]){
            if(score.includes('2,3') == false) {
                two.style.animation='greenFlash 1s ease '
                three.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    two.style.animation = ''
                    three.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(2,3)</span>` 
                score.push('2,3')
                points+=5
                console.log(score)
            } 
    
        }
        else if(arr[1] == token[1] && arr[3] == token[3] ){
            if(score.includes('2,4') == false){
                two.style.animation='greenFlash 1s ease '
                four.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    two.style.animation = ''
                    four.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(2,4)</span>`  
                score.push('2,4')
                console.log(score)
            }
        }
        else if(arr[1] == token[1] && arr[4] == token[4] ){
            if(score.includes('2,5') == false){
                two.style.animation='greenFlash 1s ease '
                five.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    two.style.animation = ''
                    five.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(2,5)</span>`
                score.push('2,5')
                console.log(score)
            }  
        }
        else if(arr[2] == token[2] && arr[3] == token[3] ){
            if(score.includes('3,4') == false){
                three.style.animation='greenFlash 1s ease '
                four.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    three.style.animation = ''
                    four.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(3,4)</span>`
                score.push('3,4')
                points+=5
                console.log(score)
            }  
        }
        else if(arr[2] == token[2] && arr[4] == token[4] ){
            if(score.includes('3,5') == false) {
                three.style.animation='greenFlash 1s ease '
                five.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    three.style.animation = ''
                    five.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(3,5)</span>` 
                score.push('3,5')
                console.log(score)
            } 
        }
        else if(arr[3] == token[3] && arr[4] == token[4] ){
            if(score.includes('4,5') == false){
                four.style.animation='greenFlash 1s ease '
                five.style.animation='greenFlash 1s ease '
                setTimeout(function() {
                    four.style.animation = ''
                    five.style.animation = ''
                }, 1000);
                msg.innerHTML += `<span  class='matched-info'>(4,5)</span>`
                score.push('4,5')
                points+=5
                console.log(score)
            }  
        }
        else if(arr == token){
            matched = true
            clearInterval(x)
            clearInterval(timer)
            counter = 0
            time.innerHTML = `<h2 class='text-center text-monospace'>${counter}</h2>`

            one.style.background='green'
            two.style.background='green'
            three.style.background='green'
            four.style.background='green'
            five.style.background='green'

            one.style.animation='enlarge 2s ease infinite'
            two.style.animation='enlarge 2s ease infinite'
            three.style.animation='enlarge 2s ease infinite'
            four.style.animation='enlarge 2s ease infinite'
            five.style.animation='enlarge 2s ease infinite'

            msg.innerHTML = `<span style='color:green';'>All matched! <br> Congrats! You have won the lottery.</span>`
            msg.style.animation = 'enlarge 2s ease infinite'
        }
         
    }
    
    
    function generateRandomArray(){
        arr = []
        for(let i=0;i<5;i++){
            arr.push(Math.floor(Math.random()*100))
        }
    }
    
    
    function fillArray(){
        one.innerHTML = `${arr[0]}`
        two.innerHTML = `${arr[1]}`
        three.innerHTML = `${arr[2]}`
        four.innerHTML = `${arr[3]}`
        five.innerHTML = `${arr[4]}`
    }
    
    let x = setInterval(()=>{
        generateRandomArray()
        fillArray()
        matchToken()
    }, 5)
    
    
    var timer = setInterval(()=>{
        time.innerHTML = `<h2 class='text-center text-monospace'>${counter}</h2>`
        if(counter>0)
        counter--
    },1000)
    
    setTimeout(()=>{
        if(!matched){
            clearInterval(x)
            clearInterval(timer)
            counter = 0
            arr = ['_','_','_','_','_']
            fillArray()
            time.innerHTML = `<h2 class='text-center text-monospace'>${counter}</h2>`
            setTimeout(()=>{
                points=points+(score.length * 10)
                if(score.length>0){
                    timeUp.innerHTML = `<p style='color:red;'>Times Up!</p><p>You won <span style='color:green'>${(points)}</span> points. <p style='font-size:small !important;'> 10 points for each matching pair, and 5 bonus points for each consecutive matching pair</p></p>`
                }else{
                    timeUp.innerHTML = `<p style='color:red;'>Times Up!</p><p>Your won <span style='color:red'>${(points)}</span> points. <p style='font-size:small !important;'> Better luck next time☹️</p></p>`
                }
            },100)
        }
    },(counter * 1000)+2000)
    
}

function displayToken(){
    $('.token input:nth-child(1)').val(`${token[0]}`)
    $('.token input:nth-child(2)').val(`${token[1]}`)
    $('.token input:nth-child(3)').val(`${token[2]}`)
    $('.token input:nth-child(4)').val(`${token[3]}`)
    $('.token input:nth-child(5)').val(`${token[4]}`)
}
displayToken()
function regenerate(token){
    token.forEach((index,value)=>{
        token[value] = Math.floor(Math.random() * 100)
    })
    setTimeout(()=>{
        displayToken()
    },100)
}

$('.token input').on('change',(e)=>{
    if(!isNaN(parseInt($(e.target).val())) && parseInt($(e.target).val()) < 100 && parseInt($(e.target).val()) >= 0 ) {
        token[$(e.target).index()] = parseInt($(e.target).val())
    }
    if(parseInt($(e.target).val()) >= 100 || parseInt($(e.target).val()) < 0){
        $('.info-note').after(`<p class='text-danger text-center err'>Please enter numbers from 0 to 99</p>`)
        displayToken()
    }
})

     
startBtn.addEventListener('click',()=>{
    counter=20
    score = []
    points=0
    msg.innerHTML=``
    timeUp.innerHTML =``
    start()
    msg.innerHTML=`<h3 class='text-center text-success'>Matched</h3>`
    console.log('Lottery token: ',token)
})
 