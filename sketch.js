const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var wall,wall2,wall3,wall4;
var labCell,labCellImg;
var pathwall1Maze1,pathwall2Maze1,pathwall3Maze1,pathwall4Maze1,pathwall5Maze1,pathwall6Maze1,pathwall7Maze1,pathwall8Maze1,pathwall9Maze1,pathwall10Maze1,
pathwall11Maze1,pathwall12Maze1,pathwall13Maze1,pathwall4Maze1,pathwall5Maze1,pathwall6Maze1,pathwall17Maze1,pathwall18Maze1,pathwall19Maze1,pathwall20Maze1,
pathwall21Maze1,pathwall22Maze1,pathwall23Maze1,pathwall24Maze1,pathwall25Maze1,pathwall26Maze1,pathwall27Maze1,pathwall28Maze1,pathwall29Maze1,pathwall30Maze1,
pathwall31Maze1,pathwall32Maze1,pathwall33Maze1;

var pathwall1,pathwall2,pathwall3,pathwall4,pathwall5,pathwall6,pathwall7,pathwall8,pathwall9,pathwall10,
pathwall11,pathwall12,pathwall13,pathwall4,pathwall5,pathwall6,pathwall17,pathwall18,pathwall19,pathwall20,
pathwall21,pathwall22,pathwall23,pathwall24,pathwall25,pathwall26,pathwall27,pathwall28,pathwall29,pathwall30,
pathwall31,pathwall32,pathwall33;

function preload()
{
  labCellImg = loadImage("images/LabCell.png")
}

function setup() {
  var canvas = createCanvas(1366,730);
  engine = Engine.create();
  world = engine.world;

  wall = new Wall(2,390,5,1366);
  wall2 = new Wall(690,729,1386,5);
  wall3 = new Wall(690,2,1386,5);
  wall4 = new Wall(1363,200,5,1200);

  labCell = new Wall(50,50,100,100);

  
  pathwall1Maze1 = new Wall(30,125,5,100);
  pathwall2Maze1 = new Wall(72,125,5,100);
  pathwall3Maze1 = new Wall(120,175,100,5);
  pathwall4Maze1 = new Wall(170,150,5,50);
  pathwall5Maze1 = new Wall(105,195,130,5);
  pathwall6Maze1 = new Wall(20,175,25,5);
  pathwall7Maze1 = new Wall(10,450,5,550);
  pathwall8Maze1 = new Wall(40,317,5,250);
  pathwall9Maze1 = new Wall(137,445,200,5);
  pathwall10Maze1 = new Wall(157,475,250,5);
  pathwall11Maze1 = new Wall(237,422,5,50);
  pathwall12Maze1 = new Wall(280,435,5,77);
  pathwall13Maze1 = new Wall(357,400,150,5);
  pathwall14Maze1 = new Wall(160,400,150,5);
  pathwall15Maze1 = new Wall(435,390,5,25);
  pathwall16Maze1 = new Wall(85,390,5,25);
  pathwall17Maze1 = new Wall(157,375,150,5);
  pathwall18Maze1 = new Wall(360,375,150,5);
  pathwall19Maze1 = new Wall(235,340,5,75);
  pathwall20Maze1 = new Wall(285,340,5,75);
  pathwall21Maze1 = new Wall(162,300,150,5);
  pathwall22Maze1 = new Wall(385,300,200,5);
  pathwall23Maze1 = new Wall(87,290,5,25);
  pathwall24Maze1 = new Wall(260,275,350,5);
  pathwall25Maze1 = new Wall(485,195,5,215);
  pathwall26Maze1 = new Wall(435,185,5,180);
  pathwall27Maze1 = new Wall(1316,675,100,100);
  pathwall28Maze1 = new Wall(485,150,5,50);
  pathwall29Maze1= new Wall();
  pathwall30Maze1 = new Wall();
  pathwall31Maze1 = new Wall();
  pathwall32Maze1= new Wall();
  pathwall33Maze1 = new Wall();
}

function draw() {
  background(211,211,211);  
  
  pathwall1Maze1.display();
  pathwall2Maze1.display();
  pathwall3Maze1.display();
  pathwall4Maze1.display();
  pathwall5Maze1.display();
  pathwall6Maze1.display();
  pathwall7Maze1.display();
  pathwall8Maze1.display();
  pathwall9Maze1.display();
  pathwall10Maze1.display();
  pathwall11Maze1.display();
  pathwall12Maze1.display();
  pathwall13Maze1.display();
  pathwall14Maze1.display();
  pathwall15Maze1.display();
  pathwall16Maze1.display();
  pathwall17Maze1.display();
  pathwall18Maze1.display();
  pathwall19Maze1.display();
  pathwall20Maze1.display();
  pathwall21Maze1.display();
  pathwall22Maze1.display();
  pathwall23Maze1.display();
  pathwall24Maze1.display();
  pathwall25Maze1.display();
  pathwall26Maze1.display();
  pathwall27Maze1.display();
  pathwall28Maze1.display();
  pathwall29Maze1.display();
  pathwall30Maze1.display();
  labCell.display();
  wall.display();
  wall2.display();
  wall3.display();
  wall4.display();
  drawSprites();
}