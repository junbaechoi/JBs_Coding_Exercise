// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker
var w = 640,
    h = 480;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

var backgroundPixels;

function resetBackground() {
    backgroundPixels = undefined;
}

function getRadioValue(name) {
    var inputs = selectAll('input');
    for (var i = 0; i < inputs.length; i++) {
        var x = inputs[i];
        if (name == x.elt.name && x.elt.checked) {
            return x.elt.value;
        }
    }
}

function copyImage(src, dst) {
    var n = src.length;
    if (!dst || dst.length != n) {
        dst = new src.constructor(n);
    }
    while (n--) {
        dst[n] = src[n];
    }
    return dst;
}

function draw() {
    capture.loadPixels();
    if (capture.pixels.length > 0) { // don't forget this!
        if (!backgroundPixels) {
            backgroundPixels = copyImage(capture.pixels, backgroundPixels);
        }
        var i = 0;
        var pixels = capture.pixels;
        var thresholdAmount = select('#thresholdAmount').value() * 255. / 100.;
        var thresholdType = getRadioValue('thresholdType');
        if (thresholdType === 'rgb') {
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    pixels[i] = pixels[i] - backgroundPixels[i] > thresholdAmount ? 255 : 0;
                    i++;
                    pixels[i] = pixels[i] - backgroundPixels[i] > thresholdAmount ? 255 : 0;
                    i++;
                    pixels[i] = pixels[i] - backgroundPixels[i] > thresholdAmount ? 255 : 0;
                    i++;
                    i++; // skip alpha
                }
            }
            select('#presence').elt.innerText = 'Not applicable';
        } else if (thresholdType === 'bw') {
            var total = 0;
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    // another common type of background thresholding uses absolute difference, like this:
                    // var total = Math.abs(pixels[i+0] - backgroundPixels[i+0] > thresholdAmount) || ...
                    var rdiff = Math.abs(pixels[i + 0] - backgroundPixels[i + 0]) > thresholdAmount;
                    var gdiff = Math.abs(pixels[i + 1] - backgroundPixels[i + 1]) > thresholdAmount;
                    var bdiff = Math.abs(pixels[i + 2] - backgroundPixels[i + 2]) > thresholdAmount;
                    var anydiff = rdiff || gdiff || bdiff;
                    var output = 0;
                    if (anydiff) {
                        output = 255;
                        total++;
                    }
                    pixels[i++] = output;
                    pixels[i++] = output;
                    pixels[i++] = output;
                    i++; // skip alpha
                }
            }
            var n = w * h;
            var ratio = total / n;
            select('#presence').elt.innerText = int(100 * ratio) + '%';
        } else {
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    pixels[i] = pixels[i] - backgroundPixels[i];
                    i++;
                    pixels[i] = pixels[i] - backgroundPixels[i];
                    i++;
                    pixels[i] = pixels[i] - backgroundPixels[i];
                    i++;
                    i++; // skip alpha
                }
            }
            select('#presence').elt.innerText = 'Not applicable';
        }
    }
    capture.updatePixels();
    image(capture, 0, 0, w, h);

    //----------- from here Face Tracking

    var positions = tracker.getCurrentPosition();

    textSize(20);
    textStyle(BOLD);
    fill(125, 255, 125);
    noStroke()
    
    text("Please reset background", 30, 30)
    text("Move your mouse to move eyeballs", 30, 60)
    text("Press any key to see tracking points", 30, 90)

    if (keyIsPressed){
        noFill();
        stroke(255);
        strokeWeight(1);
        beginShape();
        for (var i = 0; i < positions.length; i++) {
            vertex(positions[i][0], positions[i][1]);
        }
        endShape();
    
        noStroke();
        for (var i = 0; i < positions.length; i++) {
            fill(map(i, 0, positions.length, 0, 360), 50, 100);
            ellipse(positions[i][0], positions[i][1], 4, 4);
            text(i, positions[i][0], positions[i][1]);
        }
    }
    
   

    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // Eye glasses
        noStroke();
        fill(0,255,255);
        var xl = positions[24][0];
        var yl = positions[24][1];
        var xr = positions[29][0];
        var yr = positions[29][1];
        ellipse(xl, yl, 50, 50);
        ellipse(xr, yr, 50, 50);
        strokeWeight(10);
        stroke(0,255,255);
        line(positions[24][0], positions[24][1],positions[29][0], positions[29][1]);1
        noStroke()
        // Eye balls
        fill(0);
        ellipse(xl, yl, 30, 30);
        ellipse(xr, yr, 30, 30);
        // Left eyeball
        x1 = map(mouseX, 0, width, xl-8, xl+8, true);
        y1 = map(mouseY, 0, height, yl-8, yl+8, true);
        x2 = map(mouseX, 0, width, xr-8, xr+8, true);
        y2 = map(mouseY, 0, height, yr-8, yr+8, true);
        fill(255);
        ellipse(x1, y1, 16, 16);
        ellipse(x2, y2, 16, 16);
        
        
        // Nose
        var xn = positions[62][0];
        var yn = positions[62][1];
        
        noStroke();
        fill(138, 87, 72);
        ellipse(xn, yn, 50, 50);

        //Nostrils
        fill(0);
        ellipse(xn-10, yn+10, 12, 12);
        ellipse(xn+10, yn+10, 12, 12);

        //Mouth
        stroke(0, 255, 255);
        strokeWeight(30);
        line(positions[44][0], positions[44][1], positions[50][0], positions[50][1]);
        stroke(0)
        strokeWeight(10);
        line(positions[56][0], positions[56][1], positions[58][0], positions[58][1]);

        

    }
}
