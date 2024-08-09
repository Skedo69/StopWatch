let strt = 0;
let running = false;
let net = 0;
let xw = NaN;
let motivational_messages = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream big and dare to fail.",
  "Don’t wait for opportunity. Create it.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The way to get started is to quit talking and begin doing.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success is not for the lazy.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream bigger. Do bigger.",
  "Don’t stop until you’re proud.",
  "If you feel like giving up, just look back on how far you are already.",
  "Doubt kills more dreams than failure ever will.",
  "Work hard in silence, let your success be your noise.",
  "When you feel like quitting, think about why you started.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream it. Believe it. Build it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "It always seems impossible until it’s done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Don’t limit your challenges. Challenge your limits.",
  "You are so much stronger than you think.",
  "The expert in anything was once a beginner.",
  "Sometimes later becomes never. Do it now.",
  "If you can dream it, you can do it.",
  "Don’t wait for the perfect moment. Take the moment and make it perfect.",
  "The only place where success comes before work is in the dictionary.",
  "If you want it, work for it.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Dream big and dare to fail.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Believe in yourself and all that you are.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Your only limit is you.",
  "Push yourself because no one else is going to do it for you.",
  "Don’t stop until you’re proud.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "You are capable of amazing things.",
  "Do something today that your future self will thank you for.",
  "You don’t have to be perfect to be amazing.",
  "It’s not about being the best. It’s about being better than you were yesterday.",
  "The only way to do great work is to love what you do.",
  "The best view comes after the hardest climb.",
  "You are stronger than you think.",
  "Don’t let yesterday take up too much of today.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "The only way to do great work is to love what you do.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "It always seems impossible until it’s done.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Dream big and dare to fail.",
  "The best way to predict the future is to create it.",
  "You are never too old to set another goal or to dream a new dream.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "You don’t have to be great to start, but you have to start to be great.",
  "The only place where success comes before work is in the dictionary.",
  "If you want it, work for it.",
  "Hard work beats talent when talent doesn’t work hard.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Believe in yourself and all that you are.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Your only limit is you.",
  "Push yourself because no one else is going to do it for you.",
  "Don’t stop until you’re proud.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "You are capable of amazing things.",
  "Do something today that your future self will thank you for.",
  "You don’t have to be perfect to be amazing.",
  "It’s not about being the best. It’s about being better than you were yesterday.",
  "The only way to do great work is to love what you do.",
  "The best view comes after the hardest climb.",
  "You are stronger than you think.",
  "Don’t let yesterday take up too much of today.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears."
];
function alo(){
  if(!running){
    strt = Date.now() - net;
    xw = setInterval(upd,10)
    bw = setInterval(msg,50000)
    document.getElementById("stop").style.backgroundColor = "#f96d00";
    document.getElementById("start").style.backgroundColor = "white";
    running = true;
  }
}
function wait(){
  if(running){
    clearInterval(xw);
    clearInterval(bw)
    net = Date.now() - strt;
    running = false;
    document.getElementById("start").style.backgroundColor = "#f96d00";
    document.getElementById("stop").style.backgroundColor = "white";
  }
}
function bye(){
  clearInterval(xw);
  clearInterval(bw)
  strt = 0;
  net =0;
  running = false;
  document.getElementById("counter").textContent = `00:00:00:00`
  document.getElementById("title").textContent = `Stop Watch`
  document.getElementById("start").style.backgroundColor = "#f96d00";
  document.getElementById("stop").style.backgroundColor = "#f96d00";
}

function upd(){
  let net = Date.now()-strt;
  document.getElementById("counter").textContent = `${Math.floor(net/(1000*60*60)).toString().padStart(2,0)}:${Math.floor(net/(1000*60)%60).toString().padStart(2,0)}:${Math.floor(net/(1000)%60).toString().padStart(2,0)}:${Math.floor(net%1000/10).toString().padStart(2,0)}`
  document.getElementById("title").textContent = `${Math.floor(net/(1000*60*60)).toString().padStart(2,0)}:${Math.floor(net/(1000*60)%60).toString().padStart(2,0)}:${Math.floor(net/(1000)%60).toString().padStart(2,0)}`
}
function msg(){
  let net = Date.now()-strt;
  
  if (net > 1800000 && net < 2100000){
    document.getElementById("title2").textContent = motivational_messages[Math.floor(Math.random()*100+1)]
  }
  else if (net > 3600000 && net < 3900000){
    document.getElementById("title2").textContent = motivational_messages[Math.floor(Math.random()*100+1)]
  }
  else if (net > 7200000 && net < 7800000){
    document.getElementById("title2").textContent = motivational_messages[Math.floor(Math.random()*100+1)]
  }
  else{
    document.getElementById("title2").textContent = "Stop Watch!"
  }
}