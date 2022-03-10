// ========================== KEYBOARD CONTROL ===================================

function keyboard(srcattr,keypress){
    
    keypress.classList.add('white-key-clicked')
    setTimeout(function(){
        keypress.classList.remove('white-key-clicked')
    },100);
    var sound1=document.createElement('audio');
    var audio_attr = document.createAttribute("src");
    var audio_autoplay_attr = document.createAttribute("autoplay");
    var audio_ctrl_attr = document.createAttribute('control');
    audio_attr.value=srcattr; 
    sound1.setAttributeNode(audio_ctrl_attr);
    sound1.setAttributeNode(audio_attr);
    sound1.setAttributeNode(audio_autoplay_attr);
    keypress.appendChild(sound1);
    return sound1;
}

var key= document.getElementById("white-key1"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "a" || e.key === "A"){
        keyboard('24-piano-keys/key01.mp3',key)
    }
    
})
var key2= document.getElementById("white-key2"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "s" || e.key === "S"){
        keyboard('24-piano-keys/key02.mp3',key2)
    }
   
    
})
var key3= document.getElementById("white-key3"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "d" || e.key === "D"){
        keyboard('24-piano-keys/key03.mp3',key3)
    }
   
    
})
var key4= document.getElementById("white-key4"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "f" || e.key === "F"){
        keyboard('24-piano-keys/key04.mp3',key4)
    }
   
    
})
var key5= document.getElementById("white-key5"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "g" || e.key === "G"){
        keyboard('24-piano-keys/key05.mp3',key5)
    }
    
})
var key6= document.getElementById("white-key6"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "h" || e.key === "H"){
        keyboard('24-piano-keys/key06.mp3',key6)
    }
   
    
})
var key7= document.getElementById("white-key7"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "j" || e.key === "J"){
        keyboard('24-piano-keys/key07.mp3',key7)
    }
   
    
})
var key8= document.getElementById("white-key8"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "k"  || e.key === "K"){
        keyboard('24-piano-keys/key08.mp3',key8)
    }
   
    
})
var key9= document.getElementById("white-key9"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "l" || e.key === "L"){
        keyboard('24-piano-keys/key09.mp3',key9)
    }
    
})
var key10= document.getElementById("white-key10"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === ";"){
        keyboard('24-piano-keys/key02.mp3',key10)
    }
   
    
})
var key11= document.getElementById("white-key11"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "'"){
        keyboard('24-piano-keys/key11.mp3',key11)
    }
   
    
})
var key12= document.getElementById("white-key12"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "\\"){
        keyboard('24-piano-keys/key12.mp3',key12)
    }
   
    
})

var blackkey= document.getElementById("black-key1"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "q" || e.key === "Q"){
        keyboard('24-piano-keys/key12.mp3',blackkey)
    }
    
})
var blackkey2= document.getElementById("black-key2"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "w" || e.key === "W"){
        keyboard('24-piano-keys/key14.mp3',blackkey2)
    }
   
    
})
var blackkey3= document.getElementById("black-key3"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "e" || e.key === "E"){
        keyboard('24-piano-keys/key15.mp3',blackkey3)
    }
   
    
})
var blackkey4= document.getElementById("black-key4"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "r" || e.key === "R"){
        keyboard('24-piano-keys/key16.mp3',blackkey4)
    }
   
    
})
var blackkey5= document.getElementById("black-key5"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "t" || e.key === "T"){
        keyboard('24-piano-keys/key17.mp3',blackkey5)
    }
    
})
var blackkey6= document.getElementById("black-key6"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "y" || e.key === "Y"){
        keyboard('24-piano-keys/key18.mp3',blackkey6)
    }
   
    
})
var blackkey7= document.getElementById("black-key7"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "u" || e.key === "U"){
        keyboard('24-piano-keys/key19.mp3',blackkey7)
    }
   
    
})
var blackkey8= document.getElementById("black-key8"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "i"  || e.key === "I"){
        keyboard('24-piano-keys/key20.mp3',blackkey8)
    }
   
    
})
var blackkey9= document.getElementById("black-key9"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "o" || e.key === "O"){
        keyboard('24-piano-keys/key21.mp3',blackkey9)
    }
    
})
var blackkey10= document.getElementById("black-key10"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "p" || e.key === "P"){
        keyboard('24-piano-keys/key22.mp3',blackkey10)
    }
   
    
})
var blackkey11= document.getElementById("black-key11"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "["){
        keyboard('24-piano-keys/key23.mp3',blackkey11)
    }
   
    
})
var blackkey12= document.getElementById("black-key12"); 
document.body.addEventListener('keydown', function(e){ 
    if(e.key === "]"){
        keyboard('24-piano-keys/key24.mp3',blackkey12)
    }
   
    
})



// =========================== MOUSE CONTROL ======================================
function clicks(srcattr,keypress){
    
    keypress.classList.add('white-key-clicked')
    setTimeout(function(){
        keypress.classList.remove('white-key-clicked')
    },100);
    var sound1=document.createElement('audio');
    var audio_attr = document.createAttribute("src");
    var audio_autoplay_attr = document.createAttribute("autoplay");
    var audio_ctrl_attr = document.createAttribute('control');
    audio_attr.value=srcattr; 
    sound1.setAttributeNode(audio_ctrl_attr);
    sound1.setAttributeNode(audio_attr);
    sound1.setAttributeNode(audio_autoplay_attr);
    keypress.appendChild(sound1);
    return sound1;
}
// var myclick =  clicking{}

var white_key1= document.getElementById("white-key1"); 
white_key1.addEventListener('click', function(){
    clicks('24-piano-keys/key01.mp3',white_key1)
})

var white_key2= document.getElementById("white-key2"); 
white_key2.addEventListener('click', function(){
    clicks('24-piano-keys/key02.mp3', white_key2)
})
var white_key3= document.getElementById("white-key3"); 
white_key3.addEventListener('click', function(){
    clicks('24-piano-keys/key03.mp3',white_key3)
})
var white_key4= document.getElementById("white-key4"); 
white_key4.addEventListener('click', function(){
    clicks('24-piano-keys/key04.mp3',white_key4)
})
var white_key5= document.getElementById("white-key5"); 
white_key5.addEventListener('click', function(){
    clicks('24-piano-keys/key05.mp3',white_key5)
})
var white_key6= document.getElementById("white-key6"); 
white_key6.addEventListener('click', function(){
    clicks('24-piano-keys/key06.mp3',white_key6)
})
var white_key7= document.getElementById("white-key7"); 
white_key7.addEventListener('click', function(){
    clicks('24-piano-keys/key07.mp3',white_key7)
})
var white_key8= document.getElementById("white-key8"); 
white_key8.addEventListener('click', function(){
    clicks('24-piano-keys/key08.mp3',white_key8)
})
var white_key9= document.getElementById("white-key9"); 
white_key9.addEventListener('click', function(){
    clicks('24-piano-keys/key09.mp3',white_key9)
})
var white_key10= document.getElementById("white-key10"); 
white_key10.addEventListener('click', function(){
    clicks('24-piano-keys/key10.mp3',white_key10)
})
var white_key11= document.getElementById("white-key11"); 
white_key11.addEventListener('click', function(){
    clicks('24-piano-keys/key11.mp3',white_key11)
})
var white_key12= document.getElementById("white-key12"); 
white_key12.addEventListener('click', function(){
    clicks('24-piano-keys/key12.mp3',white_key12)
})

// ===================BLACK KEYS===============================

var black_key1= document.getElementById("black-key1"); 
black_key1.addEventListener('click', function(){
    clicks('24-piano-keys/key13.mp3',black_key1)
})

var black_key2= document.getElementById("black-key2"); 
black_key2.addEventListener('click', function(){
    clicks('24-piano-keys/key14.mp3',black_key2)
})
var black_key3= document.getElementById("black-key3"); 
black_key3.addEventListener('click', function(){
    clicks('24-piano-keys/key15.mp3',black_key3)
})
var black_key4= document.getElementById("black-key4"); 
black_key4.addEventListener('click', function(){
    clicks('24-piano-keys/key16.mp3',black_key4)
})
var black_key5= document.getElementById("black-key5"); 
black_key5.addEventListener('click', function(){
    clicks('24-piano-keys/key17.mp3',black_key5)
})
var black_key6= document.getElementById("black-key6"); 
black_key6.addEventListener('click', function(){
    clicks('24-piano-keys/key18.mp3',black_key6)
})
var black_key7= document.getElementById("black-key7"); 
black_key7.addEventListener('click', function(){
    clicks('24-piano-keys/key19.mp3',black_key7)
})
var black_key8= document.getElementById("black-key8"); 
black_key8.addEventListener('click', function(){
    clicks('24-piano-keys/key20.mp3',black_key8)
})
var black_key9= document.getElementById("black-key9"); 
black_key9.addEventListener('click', function(){
    clicks('24-piano-keys/key21.mp3',black_key9)
})
var black_key10= document.getElementById("black-key10"); 
black_key10.addEventListener('click', function(){
    clicks('24-piano-keys/key22.mp3',black_key10)
})
var black_key11= document.getElementById("black-key11"); 
black_key11.addEventListener('click', function(){
    clicks('24-piano-keys/key23.mp3',black_key11)
})
var black_key12= document.getElementById("black-key12"); 
black_key12.addEventListener('click', function(){
    clicks('24-piano-keys/key24.mp3',black_key12)
})