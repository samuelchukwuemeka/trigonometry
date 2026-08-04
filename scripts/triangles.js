// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.com
// www.samdomforpeace.appspot.com
// www.trigonometry.appspot.com/triangles.html

"use strict";

// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

// Answers to the Questions
function answers(answer) {
    var e = document.getElementById(answer);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

// Calculations on Triangles
// Right Triangle
// Given: Height and Base
// To Find: Hypotenuse, Area, Perimeter
document.getElementById("triangleRT1st").addEventListener("submit", triangleRT1st);

function triangleRT1st(event) {
    event.preventDefault();
    event.stopPropagation();

    var heightRT1st = parseFloat(document.getElementById("heightRT1st").value, 10),
        baseRT1st = parseFloat(document.getElementById("baseRT1st").value, 10),
        hypotenuseRT1st,
        areaRT1st,
        perimeterRT1st;

        hypotenuseRT1st = Math.sqrt(Math.pow(heightRT1st, 2) + Math.pow(baseRT1st, 2));
        
        areaRT1st = (baseRT1st * heightRT1st) / 2;

        perimeterRT1st = heightRT1st + baseRT1st + hypotenuseRT1st;
        
        document.getElementById("hypotenuseRT1st").value = hypotenuseRT1st;
        document.getElementById("areaRT1st").value = areaRT1st;
        document.getElementById("perimeterRT1st").value = perimeterRT1st;
}

// Given: Height and Hypotenuse
// To Find: Base, Area, Perimeter
document.getElementById("triangleRT2nd").addEventListener("submit", triangleRT2nd);

function triangleRT2nd(event) {
    event.preventDefault();
    event.stopPropagation();

    var heightRT2nd = parseFloat(document.getElementById("heightRT2nd").value, 10),
        hypotenuseRT2nd = parseFloat(document.getElementById("hypotenuseRT2nd").value, 10),
        baseRT2nd,
        areaRT2nd,
        perimeterRT2nd;

        baseRT2nd = Math.sqrt(Math.pow(hypotenuseRT2nd, 2) - Math.pow(heightRT2nd, 2));
        
        areaRT2nd = (baseRT2nd * heightRT2nd) / 2;

        perimeterRT2nd = heightRT2nd + baseRT2nd + hypotenuseRT2nd;
        
        document.getElementById("baseRT2nd").value = baseRT2nd;
        document.getElementById("areaRT2nd").value = areaRT2nd;
        document.getElementById("perimeterRT2nd").value = perimeterRT2nd;
}

// Given: Base and Hypotenuse
// To Find: Height, Area, Perimeter
document.getElementById("triangleRT3rd").addEventListener("submit", triangleRT3rd);

function triangleRT3rd(event) {
    event.preventDefault();
    event.stopPropagation();

    var baseRT3rd = parseFloat(document.getElementById("baseRT3rd").value, 10),
        hypotenuseRT3rd = parseFloat(document.getElementById("hypotenuseRT3rd").value, 10),
        heightRT3rd,
        areaRT3rd,
        perimeterRT3rd;

        heightRT3rd = Math.sqrt(Math.pow(hypotenuseRT3rd, 2) - Math.pow(baseRT3rd, 2));
        
        areaRT3rd = (baseRT3rd * heightRT3rd) / 2;

        perimeterRT3rd = heightRT3rd + baseRT3rd + hypotenuseRT3rd;
        
        document.getElementById("heightRT3rd").value = heightRT3rd;
        document.getElementById("areaRT3rd").value = areaRT3rd;
        document.getElementById("perimeterRT3rd").value = perimeterRT3rd;
}

// Given: Area and Perimeter
// To Find: Hypotenuse, Base, Height
document.getElementById("triangleRT4th").addEventListener("submit", triangleRT4th);

function triangleRT4th(event) {
    event.preventDefault();
    event.stopPropagation();

    var areaRT4th = parseFloat(document.getElementById("areaRT4th").value, 10),
        perimeterRT4th = parseFloat(document.getElementById("perimeterRT4th").value, 10),
        hypotenuseRT4th,
        base1RT4th,
        base2RT4th,
        height1RT4th,
        height2RT4th;

        hypotenuseRT4th = (Math.pow(perimeterRT4th, 2) - (4 * areaRT4th)) / (2 * perimeterRT4th); 

        base1RT4th = ((perimeterRT4th - hypotenuseRT4th) + Math.sqrt((Math.pow((hypotenuseRT4th - perimeterRT4th), 2)) - (8 * areaRT4th))) / 2;

        base2RT4th = ((perimeterRT4th - hypotenuseRT4th) + Math.sqrt((Math.pow((hypotenuseRT4th - perimeterRT4th), 2)) - (8 * areaRT4th))) / 2;

        height1RT4th = (2 * areaRT4th) / base1RT4th;

        height2RT4th = (2 * areaRT4th) / base2RT4th;
        
        document.getElementById("hypotenuseRT4th").value = hypotenuseRT4th;
        document.getElementById("base1RT4th").value = base1RT4th;
        document.getElementById("base2RT4th").value = base2RT4th;
        document.getElementById("height1RT4th").value = height1RT4th;
        document.getElementById("height2RT4th").value = height2RT4th;
}

// Given: Three Sides
// To Find: Perimeter, Area 
document.getElementById("triangleT2nd").addEventListener("submit", triangleT2nd);

function triangleT2nd(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstSideT2nd = parseFloat(document.getElementById("firstSideT2nd").value, 10),
        secondSideT2nd = parseFloat(document.getElementById("secondSideT2nd").value, 10),
        thirdSideT2nd = parseFloat(document.getElementById("thirdSideT2nd").value, 10),
        semiperimeterT2nd,
        areaT2nd,
        perimeterT2nd;
       
        perimeterT2nd = firstSideT2nd + secondSideT2nd + thirdSideT2nd;

        semiperimeterT2nd = perimeterT2nd / 2;

        areaT2nd = Math.sqrt(semiperimeterT2nd * (semiperimeterT2nd - firstSideT2nd) * (semiperimeterT2nd - secondSideT2nd) * (semiperimeterT2nd - thirdSideT2nd));
        
        document.getElementById("perimeterT2nd").value = perimeterT2nd;
        document.getElementById("areaT2nd").value = areaT2nd;
}


// ASA
// Sine Law is used
// To Find: other details
document.getElementById("sineLawASA").addEventListener("submit", sineLawASA);

function sineLawASA(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstAngleASA = parseFloat(document.getElementById("firstAngleASA").value, 10) || 0,
        commonSideASA = parseFloat(document.getElementById("commonSideASA").value, 10),
        secondAngleASA = parseFloat(document.getElementById("secondAngleASA").value, 10) || 0,
        firstAngleASAconverted,
        secondAngleASAconverted,
        thirdAngleASA,
        thirdAngleASAconverted,
        firstSideASA,
        secondSideASA;
        
        firstAngleASAconverted = firstAngleASA * (Math.PI / 180);
        
        secondAngleASAconverted = secondAngleASA * (Math.PI / 180);
        
        thirdAngleASA = 180 - (firstAngleASA + secondAngleASA);
        
        thirdAngleASAconverted = thirdAngleASA * (Math.PI / 180);

        firstSideASA = (commonSideASA * Math.sin(firstAngleASAconverted)) / Math.sin(thirdAngleASAconverted);
        
        secondSideASA = (commonSideASA * Math.sin(secondAngleASAconverted)) / Math.sin(thirdAngleASAconverted);

        document.getElementById("thirdAngleASA").innerHTML = "The Third Angle is " + thirdAngleASA + " degrees";

        document.getElementById("firstSideASA").innerHTML = "The Side facing the First Angle is " + firstSideASA;
        
        document.getElementById("secondSideASA").innerHTML = "The Side facing the Second Angle is " + secondSideASA;
}


// SAA
// Sine Law is used
// To Find: other details
document.getElementById("sineLawSAA").addEventListener("submit", sineLawSAA);

function sineLawSAA(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstSideSAA = parseFloat(document.getElementById("firstSideSAA").value, 10),
        firstAngleSAA = parseFloat(document.getElementById("firstAngleSAA").value, 10) || 0,
        secondAngleSAA = parseFloat(document.getElementById("secondAngleSAA").value, 10) || 0,
        firstAngleSAAconverted,
        secondAngleSAAconverted,
        thirdAngleSAA,
        thirdAngleSAAconverted,
        secondSideSAA,
        thirdSideSAA;
        
        firstAngleSAAconverted = firstAngleSAA * (Math.PI / 180);
        
        secondAngleSAAconverted = secondAngleSAA * (Math.PI / 180);
        
        thirdAngleSAA = 180 - (firstAngleSAA + secondAngleSAA);
        
        thirdAngleSAAconverted = thirdAngleSAA * (Math.PI / 180);

        secondSideSAA = (firstSideSAA * Math.sin(secondAngleSAAconverted)) / Math.sin(firstAngleSAAconverted);
        
        thirdSideSAA = (firstSideSAA * Math.sin(thirdAngleSAAconverted)) / Math.sin(firstAngleSAAconverted);

        document.getElementById("thirdAngleSAA").innerHTML = "The Third Angle is " + thirdAngleSAA + " degrees";

        document.getElementById("secondSideSAA").innerHTML = "The Side facing the Second Angle is " + secondSideSAA;
        
        document.getElementById("thirdSideSAA").innerHTML = "The Side facing the Third Angle is " + thirdSideSAA;
}


// SSA
// Sine Law is used
// To Find: other details
document.getElementById("sineLawSSA").addEventListener("submit", sineLawSSA);

function sineLawSSA(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstSideSSA = parseFloat(document.getElementById("firstSideSSA").value, 10),
        secondSideSSA = parseFloat(document.getElementById("secondSideSSA").value, 10),
        firstAngleSSA = parseFloat(document.getElementById("firstAngleSSA").value, 10) || 0,
        firstAngleSSAconverted,
        secondAngleCase2SSA,
        thirdAngleCase2SSA,
        thirdSideCase2SSA,
        thirdAngleCase2SSAconverted,
        secondAngleCase3SSAconverted,
        secondAngleCase3SSA,
        thirdAngleCase3SSA,
        thirdSideCase3SSA,
        thirdAngleCase3SSAconverted,
        secondAngle1Case4SSAconverted,
        secondAngle1Case4SSA,
        thirdAngle1Case4SSA,
        thirdSide1Case4SSA,
        thirdAngle1Case4SSAconverted,
        secondAngle2Case4SSA,
        thirdAngle2Case4SSA,
        thirdSide2Case4SSA,
        thirdAngle2Case4SSAconverted;
        
        firstAngleSSAconverted = firstAngleSSA * (Math.PI / 180);
        
        if(firstSideSSA < (secondSideSSA * Math.sin(firstAngleSSAconverted))){
            alert("No Triangle is formed \nThere is no solution");
            quit();
        }
        
        if(firstSideSSA === Math.round((secondSideSSA * Math.sin(firstAngleSSAconverted)))){
            alert("One Right Triangle is formed");
            secondAngleCase2SSA = 90;
            document.getElementById("secondAngleCase2SSA").innerHTML = "The Angle facing the Second Side is " + secondAngleCase2SSA + " degrees";
            thirdAngleCase2SSA = 180 - (firstAngleSSA + secondAngleCase2SSA);
            document.getElementById("thirdAngleCase2SSA").innerHTML = "The Angle facing the Third Side is " + thirdAngleCase2SSA + " degrees";
            thirdAngleCase2SSAconverted = thirdAngleCase2SSA * (Math.PI / 180);
            thirdSideCase2SSA = (firstSideSSA * Math.sin(thirdAngleCase2SSAconverted)) / Math.sin(firstAngleSSAconverted);
            document.getElementById("thirdSideCase2SSA").innerHTML = "The Third Side is " + thirdSideCase2SSA;
        }
        
        if((firstSideSSA > (secondSideSSA * Math.sin(firstAngleSSAconverted))) && (firstSideSSA > secondSideSSA)){
            alert("One Triangle is formed");
            secondAngleCase3SSAconverted = Math.asin((secondSideSSA * Math.sin(firstAngleSSAconverted))/firstSideSSA);
            secondAngleCase3SSA = secondAngleCase3SSAconverted * (180 / Math.PI);
            document.getElementById("secondAngleCase3SSA").innerHTML = "The Angle facing the Second Side is " + secondAngleCase3SSA + " degrees";
            thirdAngleCase3SSA = 180 - (firstAngleSSA + secondAngleCase3SSA);
            document.getElementById("thirdAngleCase3SSA").innerHTML = "The Angle facing the Third Side is " + thirdAngleCase3SSA + " degrees";
            thirdAngleCase3SSAconverted = thirdAngleCase3SSA * (Math.PI / 180);
            thirdSideCase3SSA = (firstSideSSA * Math.sin(thirdAngleCase3SSAconverted)) / Math.sin(firstAngleSSAconverted);
            document.getElementById("thirdSideCase3SSA").innerHTML = "The Third Side is " + thirdSideCase3SSA;
        } 
        
        if((firstSideSSA > (secondSideSSA * Math.sin(firstAngleSSAconverted))) && (firstSideSSA < secondSideSSA)){
            alert("Two Triangles (One Obtuse Triangle and One Acute Triangle) are formed");
            secondAngle1Case4SSAconverted = Math.asin((secondSideSSA * Math.sin(firstAngleSSAconverted))/firstSideSSA);
            secondAngle1Case4SSA = secondAngle1Case4SSAconverted * (180 / Math.PI);
            document.getElementById("secondAngle1Case4SSA").innerHTML = "<b>First Triangle:</b> The Angle facing the Second Side is " + secondAngle1Case4SSA + " degrees";
            thirdAngle1Case4SSA = 180 - (firstAngleSSA + secondAngle1Case4SSA);
            document.getElementById("thirdAngle1Case4SSA").innerHTML = "<b>First Triangle:</b> The Angle facing the Third Side is " + thirdAngle1Case4SSA + " degrees";
            thirdAngle1Case4SSAconverted = thirdAngle1Case4SSA * (Math.PI / 180);
            thirdSide1Case4SSA = (firstSideSSA * Math.sin(thirdAngle1Case4SSAconverted)) / Math.sin(firstAngleSSAconverted);
            document.getElementById("thirdSide1Case4SSA").innerHTML = "<b>First Triangle:</b> The Third Side is " + thirdSide1Case4SSA;
            secondAngle2Case4SSA = 180 - secondAngle1Case4SSA;
            document.getElementById("secondAngle2Case4SSA").innerHTML = "<b>Second Triangle:</b> The Angle facing the Second Side is " + secondAngle2Case4SSA + " degrees";
            thirdAngle2Case4SSA = 180 - (firstAngleSSA + secondAngle2Case4SSA);
            document.getElementById("thirdAngle2Case4SSA").innerHTML = "<b>Second Triangle:</b> The Angle facing the Third Side is " + thirdAngle2Case4SSA + " degrees";
            thirdAngle2Case4SSAconverted = thirdAngle2Case4SSA * (Math.PI / 180);
            thirdSide2Case4SSA = (firstSideSSA * Math.sin(thirdAngle2Case4SSAconverted)) / Math.sin(firstAngleSSAconverted);
            document.getElementById("thirdSide2Case4SSA").innerHTML = "<b>Second Triangle:</b> The Third Side is " + thirdSide2Case4SSA;
        }
}


// SAS
// Cosine Law is used
// To Find: other details
document.getElementById("cosineLawSAS").addEventListener("submit", cosineLawSAS);

function cosineLawSAS(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstSideSAS = parseFloat(document.getElementById("firstSideSAS").value, 10),
            secondAngleSAS = parseFloat(document.getElementById("secondAngleSAS").value, 10) || 0,
            thirdSideSAS = parseFloat(document.getElementById("thirdSideSAS").value, 10),
            secondAngleSASconverted,
            secondSideSAS,
            firstAngleSASconverted,
            firstAngleSAS,
            thirdAngleSAS;

    secondAngleSASconverted = secondAngleSAS * (Math.PI / 180);

    secondSideSAS = Math.sqrt((firstSideSAS * firstSideSAS) + (thirdSideSAS * thirdSideSAS) - (2 * firstSideSAS * thirdSideSAS * Math.cos(secondAngleSASconverted)));

    firstAngleSASconverted = Math.asin((firstSideSAS * Math.sin(secondAngleSASconverted)) / secondSideSAS);

    firstAngleSAS = firstAngleSASconverted * (180 / Math.PI);

    thirdAngleSAS = 180 - (firstAngleSAS + secondAngleSAS);

    document.getElementById("secondSideSAS").innerHTML = "The Second Side (the Side facing the Second Angle/Included Angle) is " + secondSideSAS;
    document.getElementById("firstAngleSAS").innerHTML = "The Angle facing the First Side is " + firstAngleSAS + " degrees";
    document.getElementById("thirdAngleSAS").innerHTML = "The Angle facing the Third Side is " + thirdAngleSAS + " degrees";
}


// SSS
// Cosine Law is used
// To Find: other details
document.getElementById("cosineLawSSS").addEventListener("submit", cosineLawSSS);

function cosineLawSSS(event) {
    event.preventDefault();
    event.stopPropagation();

    var     firstSideSSS = parseFloat(document.getElementById("firstSideSSS").value, 10),
            secondSideSSS = parseFloat(document.getElementById("secondSideSSS").value, 10),
            thirdSideSSS = parseFloat(document.getElementById("thirdSideSSS").value, 10),
            firstAngleSSSconverted,
            firstAngleSSS,
            secondAngleSSSconverted,
            secondAngleSSS,
            thirdAngleSSSconverted,
            thirdAngleSSS;

    firstAngleSSSconverted = Math.acos(((secondSideSSS * secondSideSSS) + (thirdSideSSS * thirdSideSSS) - (firstSideSSS * firstSideSSS)) / (2 * secondSideSSS * thirdSideSSS));

    firstAngleSSS = firstAngleSSSconverted * (180 / Math.PI);

    secondAngleSSSconverted = Math.acos(((firstSideSSS * firstSideSSS) + (thirdSideSSS * thirdSideSSS) - (secondSideSSS * secondSideSSS)) / (2 * firstSideSSS * thirdSideSSS));

    secondAngleSSS = secondAngleSSSconverted * (180 / Math.PI);
    
    thirdAngleSSSconverted = Math.acos(((firstSideSSS * firstSideSSS) + (secondSideSSS * secondSideSSS) - (thirdSideSSS * thirdSideSSS)) / (2 * firstSideSSS * secondSideSSS));

    thirdAngleSSS = thirdAngleSSSconverted * (180 / Math.PI);

    document.getElementById("firstAngleSSS").innerHTML = "The Angle facing the First Side is " + firstAngleSSS + " degrees";
    document.getElementById("secondAngleSSS").innerHTML = "The Angle facing the Second Side is " + secondAngleSSS + " degrees";
    document.getElementById("thirdAngleSSS").innerHTML = "The Angle facing the Third Side is " + thirdAngleSSS + " degrees";
}


// Modal
// Select the button using the class selector
const closeBtn = document.querySelector('.close-button');

// Select the modal using the class selector
const modal = document.querySelector('.modal');

// Make sure main content exists (if it should be shown after the modal closes)
const mainContent = document.querySelector('.main-content');

// Add an event listener to the button
closeBtn.addEventListener('click', () => {
  if (modal) {
    modal.style.display = 'none'; // Hide the modal
  }
  if (mainContent) {
    mainContent.style.display = 'block'; // Show the main content (if it exists)
  }
});