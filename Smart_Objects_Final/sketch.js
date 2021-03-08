let light;
let increment;
let mult;
let back;
let serial;
let inData;
let portName = '/dev/tty.usbserial-01D952EC';

function setup() {
 serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
  
  createCanvas(700,700, WEBGL);
  angleMode(DEGREES);
   _text = createGraphics(300, 300);
}





function draw() {


  
  back= map(inData, 1900, 2300, 0, 255);
  
  if (back < 70){
    increment = 72;
    mult = 7;
  } else if (back >=70 && back < 170){
    increment = 40;
    mult = 5;
  } else {
     increment = 10;
    mult = 3;
  }
  
  let r = map(inData, 1900, 2300, 250, 0);
  let g = map(inData, 1900, 2300, 150, 0);
  let b = map(inData, 1900, 2300, 250, 0);
  background(r, g, b);
  

  rotateX(60);
  noFill();
  
  for (let i=0; i < 90; i++){
    
    let r = map(sin(inData), -1, 1, 200, 0);
    let g = map(i, 0, 50, 0, 200);
    let b = map(cos(inData), -1, 1, 200, 0);
    stroke(r, g, b);
    
    rotate(inData / 2000)
    
    beginShape();
    for (let j=0; j<360; j+=increment){
      let radius = i * 3;
      let x = radius * cos(j);
      let y = radius * sin(j);
      let z = sin(frameCount * mult + i*5) * 50;
      vertex(x, y, z+50)
    }
    endShape(CLOSE);
  }
}






// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
  
function serialEvent() {
   let inString = serial.readLine();
  if (inString.length > 0){
    inData = Number(inString);
    light = map(inData, 1900, 2300, 0, 100);
  }
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}
