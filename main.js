var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;
var img1 = new Image();
img1.src = 'dsprite.png';
class Desert{
    constructor(){
        this.x = 2400;
        this.y = 360;
        this.width = 2400;
        this.height = 30
        ;
    }
    draw(){
        ctx.drawImage(img1,1,100,2400,30,this.x,this.y,this.width,this.height);

    }
    
}
class Dino{
    constructor(){
        this.x = 10;
        this.y = 300;
        this.width = 88;
        this.height = 94;
        
    }
    draw(e){
        if(e== 0){
            ctx.drawImage(img1,1854,2,88,94,this.x,this.y,this.width,this.height);  
        }
        else if(e == 1){
            ctx.drawImage(img1,1942,2,88,94,this.x,this.y,this.width,this.height);  

        }
        else if(e == 2){
            ctx.drawImage(img1,1678,2,88,94,this.x,this.y,this.width,this.height);
        }
        else if(e == 3){
            ctx.drawImage(img1,2206,2,118,94,this.x,this.y,this.width,this.height);

        }
        else if(e == 4){
            ctx.drawImage(img1,2324,2,118,94,this.x,this.y,this.width,this.height);

        }
        else if(e == 5){
            ctx.drawImage(img1,2030,2,88,94,this.x,this.y,this.width,this.height);
        }
    }
}
var runDino1 = new Dino();
class Cloud{
    constructor(e){
        this.x = 1500;
        this.y = e;
        this.width = 93;
        this.height = 36;
    }
    draw(){
        ctx.drawImage(img1,166,1,93,36,this.x,this.y,this.width,this.height);
    }
}



class lCactus {
    constructor(e1){
        this.x = 3000;
        this.y = 326 ; 
        this.width = 34;
        this.height = 70;
        this.sprite = 446;
        this.e = e1


    }
    draw(){

        if(this.e==0){
            ctx.drawImage(img1,446,2,34,70,this.x,this.y,this.width,this.height)
        }
        else if(this.e==1){
            ctx.drawImage(img1,480,2,34,70,this.x,this.y,this.width,this.height)
        }
        else if(this.e==2){
            ctx.drawImage(img1,514,2,34,70,this.x,this.y,this.width,this.height)
        }
        else if(this.e==3){
            ctx.drawImage(img1,548,2,34,70,this.x,this.y,this.width,this.height)
        }
        else if(this.e==4){
            ctx.drawImage(img1,582,2,34,70,this.x,this.y,this.width,this.height)
        }
        else if(this.e==5){
            ctx.drawImage(img1,618,2,34,70,this.x,this.y,this.width,this.height)
        }
    }
}

var cloud1 = new Cloud(200);
var cloudArr = [];
cloudArr.push(cloud1);
console.log(cloud1)
var score = 0;
var end = false;
var ????????? = false;
var ????????? = false; 
var ??????timer = 0;
var timer = 0;
var floorsArr = [];
var cactusarr = [];
var animation;
var feetchange = 0;
var ????????????????????? = 220;
var moveSpd = 10 ;
var floor1 = new Desert();
floorsArr.push(floor1);
var floor2 = new Desert();
floor2.x = 1;
floorsArr.push(floor2);
function ?????????????????????(){
    animation = requestAnimationFrame(?????????????????????)
    ctx.clearRect(0,0,canvas.width,canvas.height);
    timer++
    if(timer%????????????????????? === 0){
        for(var i = 0;i<Math.floor(Math.random()*3+1);i++){
            var cactus = new lCactus(Math.floor(Math.random()*6));
            cactus.x -= i*33;
            cactusarr.push(cactus)
        }
        var cloud1 = new Cloud(Math.floor(Math.random()*200)+50)
        cloudArr.push(cloud1);
        ????????????????????? = Math.floor(Math.random()*160)+140
        score += timer;
        console.log(score);
        timer = 0;
    }    
    cactusarr.forEach((a,i,o)=>{
        if(a.x < 0){
            o.splice(i,1)
        } 
        coll(runDino1,a)
        a.x -= 5;
        a.draw();
        
    })
    cloudArr.forEach((a)=>{
        a.x -=1.5 ;
        a.draw()
    })
    floorsArr.forEach((a,i,o)=>{
        if(fcoll(a)){
            o.splice(i,1)
            var floor = new Desert();
            floorsArr.push(floor);
        }
        a.x-=5;
        a.draw()
    })
    if(end == true){
        runDino1.draw(5);
    }
    else if(????????? == true){
        if(??????timer < 50  ){
            runDino1.y -= moveSpd;
            moveSpd -= 0.20;
            if(?????????==true){
                ??????timer =50;
                moveSpd = 0;
            }
            ??????timer++;
            runDino1.draw(2)
        }
        else if(??????timer >=50 && runDino1.y<300){
            runDino1.y += moveSpd;
            moveSpd += 0.20;
            if(?????????==true){
                runDino1.y += moveSpd;
            } 
            ??????timer++;
            runDino1.draw(2)
        }
        else{
            ????????? = false
            ??????timer = 0;
            moveSpd = 10;
            runDino1.y=300;
            runDino1.draw(2)
        }
        
    }  
    else if(????????? == false){
        if(timer%20 == 0){
            feetchange += 1;
        }
        if(?????????==true){
            if(feetchange%2 == 0){
                runDino1.draw(3);
            } else{
                runDino1.draw(4);
            }
        }
        else{
            if(feetchange%2 == 0){
                runDino1.draw(0);
            } else{
                runDino1.draw(1);
            }
        }
        
    }

    
}

?????????????????????()
function coll(runDino1, cactus){ 
    var xcoll = cactus.x - (runDino1.x + runDino1.width);
    var ycoll = cactus.y - (runDino1.y + runDino1.height);
    if(xcoll < 0 && ycoll < 0){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        end= true;
        cancelAnimationFrame(animation)
        
    }
}
function fcoll(flr){
    if(flr.x+flr.width <= 0){
        return true;
    }
    else{
        return false;
    }
}
var restart = document.getElementById('restart');

document.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        ????????? = true; 
        console.log('space')
    }
    if(e.code === 'ArrowDown'){
        console.log('arrdown')
        ????????? = true
    }
})
document.addEventListener('keyup',function(e){
    if(e.code === 'ArrowDown'){
        console.log('arrup')
        ????????? = false;
    }
})

