'use strict'
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));


var c;
var availableOfColors = ["yellow", "green", "red", "blue"]
var x = 0
var y = 0
var z = 50
var downDirection = true;
var backward = false;

//function for delay
async function delay(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

//function for go down
async function goDown()
{
    c = Shape.Rectangle(0,0,700,500);
    c.fillColor = "white"
    y += 5
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "red"
    paper.view.draw();
}

//function for go Up
async function goUp()
{
    c = Shape.Rectangle(0,0,700,500);
    c.fillColor = "white"
    y -= 5
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "green"
    paper.view.draw();
}

//right from down
async function goRightFromDown()
{
    y += 10
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "red"
    paper.view.draw();
    c = Shape.Rectangle(0,0,700,800);
    c.fillColor = "white"
    await delay(15);
    x += 50;
    y = 355;
    c = Shape.Rectangle(x,y-5,z,z);
    c.fillColor = "green"
    paper.view.draw();
    downDirection = false
}

//right from up
async function goRightFromUp()
{
    y = 0;
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "green"
    paper.view.draw();
    c = Shape.Rectangle(0,0,700,800);
    c.fillColor = "white"
    await delay(15);
    x += 50;
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "green"
    paper.view.draw();
    downDirection = true
}

//left from down
async function goLeftFromDown()
{
    y -= 10
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "red"
    paper.view.draw();
    c = Shape.Rectangle(0,0,700,800);
    c.fillColor = "white"
    await delay(15);
    x -= 50;
    y = 355;
    c = Shape.Rectangle(x,y-5,z,z);
    c.fillColor = "green"
    paper.view.draw();
    downDirection = false
}

//left from up
async function goLeftFromUp()
{
    y = 0;
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "green"
    paper.view.draw();
    c = Shape.Rectangle(0,0,700,800);
    c.fillColor = "white"
    await delay(15);
    x -= 50;
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "green"
    paper.view.draw();
    downDirection = true
}


async function drawShape()
{
    await delay(1000);
    c = Shape.Rectangle(x,y,z,z);
    c.fillColor = "red"
    paper.view.draw();

    for(var i=1; i>0; i++)
    {
        if(downDirection)
        {
            await delay(15);
            goDown()
            if(y==350 && !backward)
            {
                await goRightFromDown()
            }
            else if(y==350 && backward)
            {
                await goLeftFromDown()
            }
            if(x==550)
            {
                x = 555
            }
            if(x==550 && y==5)
            {
                backward = true
                downDirection = true
            }
            if(x==55 && y==345)
            {
                x = 50
            }
            if(x<=0 && y<=5)
            {
                backward = false
                downDirection = true
            }
            
        }
        else
        {
            await delay(15);
            goUp()
            if(y<=0 && !backward)
            {
                await goRightFromUp()
            }
            else if(y<=0 && backward)
            {
                await goLeftFromUp()
            }
            if(x==550)
            {
                x = 555
            }
            if(x==555 && y==5)
            {
                y=0
                c = Shape.Rectangle(x,y,z,z);
                c.fillColor = "green"
                paper.view.draw();
                backward = true
                downDirection = true
            }
            if(x==55 && y==5)
            {
                x = 50
            }
            if(x==0 && y==0)
            {
                c = Shape.Rectangle(x,y,z,z);
                c.fillColor = "green"
                paper.view.draw();
                backward = false
            }
            if(x<=0 && y<=5)
            {
                backward = false
                downDirection = true
            }

        }
        console.log(x,y)
    }
}
drawShape()