// Copyright 2019 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.expressions-equations.appspot.com/calculators.html

"use strict";

// Calculations on Arcs: 1st
// Given: Radius, Angle (in degrees)
// To Find: Length of Arc
document.getElementById("lengthArc1st").addEventListener("submit", lengthArc1st);

function lengthArc1st(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusLOA1st = parseFloat(document.getElementById("radiusLOA1st").value, 10),
    angleLOA1st = parseFloat(document.getElementById("angleLOA1st").value, 10),
    lengthLOA1st1,
    lengthLOA1st2;

  lengthLOA1st1 = (44 * radiusLOA1st * angleLOA1st) / 2520;
  lengthLOA1st2 = (2 * radiusLOA1st * angleLOA1st) / 360;

  document.getElementById("lengthLOA1st1").value = lengthLOA1st1;
  document.getElementById("lengthLOA1st2").value = lengthLOA1st2;
}

// Calculations on Arcs: 2nd
// Given: Radius, Length of Arc
// To Find: Angle (in degrees)
document.getElementById("lengthArc2nd").addEventListener("submit", lengthArc2nd);

function lengthArc2nd(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusLOA2nd = parseFloat(document.getElementById("radiusLOA2nd").value, 10),
    lengthLOA2nd1 = parseFloat(document.getElementById("lengthLOA2nd1").value, 10),
    lengthLOA2nd2 = parseFloat(document.getElementById("lengthLOA2nd2").value, 10),
    angleLOA2nd;

  if (isFinite(lengthLOA2nd1)) 
  {
    angleLOA2nd = (630 * lengthLOA2nd1) / (11 * radiusLOA2nd);
  }

  if (isFinite(lengthLOA2nd2)) 
  {
    angleLOA2nd = 180 * lengthLOA2nd2 / radiusLOA2nd;
  }

  document.getElementById("angleLOA2nd").value = angleLOA2nd;
}

// Calculations on Arcs: 3rd
// Given: Angle (in degrees), Length of Arc
// To Find: Radius
document.getElementById("lengthArc3rd").addEventListener("submit", lengthArc3rd);

function lengthArc3rd(event) {
  event.preventDefault();
  event.stopPropagation();

  var angleLOA3rd = parseFloat(document.getElementById("angleLOA3rd").value, 10),
    lengthLOA3rd1 = parseFloat(document.getElementById("lengthLOA3rd1").value, 10),
    lengthLOA3rd2 = parseFloat(document.getElementById("lengthLOA3rd2").value, 10),
    radiusLOA3rd;

  if (isFinite(lengthLOA3rd1)) 
  {
    radiusLOA3rd = (630 * lengthLOA3rd1) / (11 * angleLOA3rd);
  }

  if (isFinite(lengthLOA3rd2)) 
  {
    radiusLOA3rd = 180 * lengthLOA3rd2 / angleLOA3rd;
  }

  document.getElementById("radiusLOA3rd").value = radiusLOA3rd;
}

// Calculations on Arcs: 4th
// Given: Radius, Angle (in radians)
// To Find: Length of Arc
document.getElementById("lengthArc4th").addEventListener("submit", lengthArc4th);

function lengthArc4th(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusLOA4th = parseFloat(document.getElementById("radiusLOA4th").value, 10),
    angleLOA4th1 = parseFloat(document.getElementById("angleLOA4th1").value, 10),
    angleLOA4th2 = parseFloat(document.getElementById("angleLOA4th2").value, 10),
    lengthLOA4th1,
    lengthLOA4th2;

  if (isFinite(angleLOA4th1)) 
  {
    lengthLOA4th1 = radiusLOA4th * angleLOA4th1;
    document.getElementById("lengthLOA4th1").value = lengthLOA4th1;
    document.getElementById("lengthLOA4th2").readOnly = true;
  }
  
  if (isFinite(angleLOA4th2)) 
  {
    lengthLOA4th2 = radiusLOA4th * angleLOA4th2;
    document.getElementById("lengthLOA4th1").readOnly = true;
    document.getElementById("lengthLOA4th2").value = lengthLOA4th2;
  }
}

// Calculations on Arcs: 5th
// Given: Radius, Length of Arc
// To Find: Angle (in radians)
document.getElementById("lengthArc5th").addEventListener("submit", lengthArc5th);

function lengthArc5th(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusLOA5th = parseFloat(document.getElementById("radiusLOA5th").value, 10),
    lengthLOA5th1 = parseFloat(document.getElementById("lengthLOA5th1").value, 10),
    lengthLOA5th2 = parseFloat(document.getElementById("lengthLOA5th2").value, 10),
    angleLOA5th1,
    angleLOA5th2;

  if (isFinite(lengthLOA5th1)) 
  {
    angleLOA5th1 = lengthLOA5th1 / radiusLOA5th;
    document.getElementById("angleLOA5th1").value = angleLOA5th1;
    document.getElementById("angleLOA5th2").readOnly = true;
  }
  
  if (isFinite(lengthLOA5th2)) 
  {
    angleLOA5th2 = lengthLOA5th2 / radiusLOA5th;
    document.getElementById("angleLOA5th1").readOnly = true;
    document.getElementById("angleLOA5th2").value = angleLOA5th2;
  }
}

// Calculations on Arcs: 6th
// Given: Angle (in radians), Length of Arc
// To Find: Radius
document.getElementById("lengthArc6th").addEventListener("submit", lengthArc6th);

function lengthArc6th(event) {
  event.preventDefault();
  event.stopPropagation();

  var angleLOA6th1 = parseFloat(document.getElementById("angleLOA6th1").value, 10),
    angleLOA6th2 = parseFloat(document.getElementById("angleLOA6th2").value, 10),
    lengthLOA6th1 = parseFloat(document.getElementById("lengthLOA6th1").value, 10),
    lengthLOA6th2 = parseFloat(document.getElementById("lengthLOA6th2").value, 10),
    radiusLOA6th;

  if (isFinite(angleLOA6th1) && isFinite(lengthLOA6th1)) 
  {
    radiusLOA6th = lengthLOA6th1 / angleLOA6th1;
  }
  
  if (isFinite(angleLOA6th2) && isFinite(lengthLOA6th2)) 
  {
    radiusLOA6th = lengthLOA6th2 / angleLOA6th2;
  }

  document.getElementById("radiusLOA6th").value = radiusLOA6th;
}

// Calculations on Arcs: 7th
// Given: Radius, Area of Sector
// To Find: Length of Arc
document.getElementById("lengthArc7th").addEventListener("submit", lengthArc7th);

function lengthArc7th(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusLOA7th = parseFloat(document.getElementById("radiusLOA7th").value, 10),
    areaSectorLOA7th = parseFloat(document.getElementById("areaSectorLOA7th").value, 10),
    lengthLOA7th;

  lengthLOA7th = (2 * areaSectorLOA7th) / radiusLOA7th;

  document.getElementById("lengthLOA7th").value = lengthLOA7th;
}

// Calculations on Arcs: 8th
// Given: Length of Arc, Area of Sector
// To Find: Radius
document.getElementById("lengthArc8th").addEventListener("submit", lengthArc8th);

function lengthArc8th(event) {
  event.preventDefault();
  event.stopPropagation();

  var lengthLOA8th = parseFloat(document.getElementById("lengthLOA8th").value, 10),
    areaSectorLOA8th = parseFloat(document.getElementById("areaSectorLOA8th").value, 10),
    radiusLOA8th;

  radiusLOA8th = (2 * areaSectorLOA8th) / lengthLOA8th;

  document.getElementById("radiusLOA8th").value = radiusLOA8th;
}




// Calculations on Sectors: 1st
// Given: Radius, Angle (in degrees)
// To Find: Area of Sector
document.getElementById("areaSector1st").addEventListener("submit", areaSector1st);

function areaSector1st(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusAOS1st = parseFloat(document.getElementById("radiusAOS1st").value, 10),
    angleAOS1st = parseFloat(document.getElementById("angleAOS1st").value, 10),
    areaAOS1st1,
    areaAOS1st2;

  areaAOS1st1 = (11 * radiusAOS1st * radiusAOS1st * angleAOS1st) / 1260;
  areaAOS1st2 = (radiusAOS1st * radiusAOS1st * angleAOS1st) / 360;

  document.getElementById("areaAOS1st1").value = areaAOS1st1;
  document.getElementById("areaAOS1st2").value = areaAOS1st2;
}

// Calculations on Sectors: 2nd
// Given: Radius, Area of Sector
// To Find: Angle (in degrees)
document.getElementById("areaSector2nd").addEventListener("submit", areaSector2nd);

function areaSector2nd(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusAOS2nd = parseFloat(document.getElementById("radiusAOS2nd").value, 10),
    areaAOS2nd1 = parseFloat(document.getElementById("areaAOS2nd1").value, 10),
    areaAOS2nd2 = parseFloat(document.getElementById("areaAOS2nd2").value, 10),
    angleAOS2nd;

  if (isFinite(areaAOS2nd1)) 
  {
    angleAOS2nd = (1260 * areaAOS2nd1) / (11 * radiusAOS2nd * radiusAOS2nd);
  }

  if (isFinite(areaAOS2nd2)) 
  {
    angleAOS2nd = (360 * areaAOS2nd2) / (radiusAOS2nd * radiusAOS2nd);
  }

  document.getElementById("angleAOS2nd").value = angleAOS2nd;
}

// Calculations on Sectors: 3rd
// Given: Angle (in degrees), Area of Sector
// To Find: Radius
document.getElementById("areaSector3rd").addEventListener("submit", areaSector3rd);

function areaSector3rd(event) {
  event.preventDefault();
  event.stopPropagation();

  var angleAOS3rd = parseFloat(document.getElementById("angleAOS3rd").value, 10),
    areaAOS3rd1 = parseFloat(document.getElementById("areaAOS3rd1").value, 10),
    areaAOS3rd2 = parseFloat(document.getElementById("areaAOS3rd2").value, 10),
    radiusAOS3rd;

  if (isFinite(areaAOS3rd1)) 
  {
    radiusAOS3rd = Math.sqrt((1260 * areaAOS3rd1) / (11 * angleAOS3rd));
  }

  if (isFinite(areaAOS3rd2)) 
  {
    radiusAOS3rd = Math.sqrt((360 * areaAOS3rd2) / angleAOS3rd);
  }

  document.getElementById("radiusAOS3rd").value = radiusAOS3rd;
}

// Calculations on Sectors: 4th
// Given: Radius, Angle (in radians)
// To Find: Area of Sector
document.getElementById("areaSector4th").addEventListener("submit", areaSector4th);

function areaSector4th(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusAOS4th = parseFloat(document.getElementById("radiusAOS4th").value, 10),
    angleAOS4th1 = parseFloat(document.getElementById("angleAOS4th1").value, 10),
    angleAOS4th2 = parseFloat(document.getElementById("angleAOS4th2").value, 10),
    areaAOS4th1,
    areaAOS4th2;

  if (isFinite(angleAOS4th1)) 
  {
    areaAOS4th1 = (radiusAOS4th * radiusAOS4th * angleAOS4th1) / 2;
    document.getElementById("areaAOS4th1").value = areaAOS4th1;
    document.getElementById("areaAOS4th2").readOnly = true;
  }
  
  if (isFinite(angleAOS4th2)) 
  {
    areaAOS4th2 = (radiusAOS4th * radiusAOS4th * angleAOS4th2) / 2;
    document.getElementById("areaAOS4th1").readOnly = true;
    document.getElementById("areaAOS4th2").value = areaAOS4th2;
  }
}

// Calculations on Sectors: 5th
// Given: Radius, Area of Sector
// To Find: Angle (in radians)
document.getElementById("areaSector5th").addEventListener("submit", areaSector5th);

function areaSector5th(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusAOS5th = parseFloat(document.getElementById("radiusAOS5th").value, 10),
    areaAOS5th1 = parseFloat(document.getElementById("areaAOS5th1").value, 10),
    areaAOS5th2 = parseFloat(document.getElementById("areaAOS5th2").value, 10),
    angleAOS5th1,
    angleAOS5th2;

  if (isFinite(areaAOS5th1)) 
  {
    angleAOS5th1 = (2 * areaAOS5th1) / (radiusAOS5th * radiusAOS5th);
    document.getElementById("angleAOS5th1").value = angleAOS5th1;
    document.getElementById("angleAOS5th2").readOnly = true;
  }
  
  if (isFinite(areaAOS5th2)) 
  {
    angleAOS5th2 = (2 * areaAOS5th2) / (radiusAOS5th * radiusAOS5th);
    document.getElementById("angleAOS5th1").readOnly = true;
    document.getElementById("angleAOS5th2").value = angleAOS5th2;
  }
}

// Calculations on Sectors: 6th
// Given: Angle (in radians), Area of Sector
// To Find: Radius
document.getElementById("areaSector6th").addEventListener("submit", areaSector6th);

function areaSector6th(event) {
  event.preventDefault();
  event.stopPropagation();

  var angleAOS6th1 = parseFloat(document.getElementById("angleAOS6th1").value, 10),
    angleAOS6th2 = parseFloat(document.getElementById("angleAOS6th2").value, 10),
    areaAOS6th1 = parseFloat(document.getElementById("areaAOS6th1").value, 10),
    areaAOS6th2 = parseFloat(document.getElementById("areaAOS6th2").value, 10),
    radiusAOS6th;

  if (isFinite(angleAOS6th1) && isFinite(areaAOS6th1)) 
  {
    radiusAOS6th = Math.sqrt((2 * areaAOS6th1) / angleAOS6th1);
  }
  
  if (isFinite(angleAOS6th2) && isFinite(areaAOS6th2)) 
  {
    radiusAOS6th = Math.sqrt((2 * areaAOS6th2) / angleAOS6th2);
  }

  document.getElementById("radiusAOS6th").value = radiusAOS6th;
}

// Calculations on Sectors: 7th
// Given: Radius, Length of Arc
// To Find: Area of Sector
document.getElementById("areaSector7th").addEventListener("submit", areaSector7th);

function areaSector7th(event) {
  event.preventDefault();
  event.stopPropagation();

  var radiusAOS7th = parseFloat(document.getElementById("radiusAOS7th").value, 10),
    lengthArcAOS7th = parseFloat(document.getElementById("lengthArcAOS7th").value, 10),
    areaAOS7th;

    areaAOS7th = (lengthArcAOS7th * radiusAOS7th) / 2;

  document.getElementById("areaAOS7th").value = areaAOS7th;
}

// Calculations on Sectors: 8th
// Given: Length of Arc, Area of Sector
// To Find: Radius
document.getElementById("areaSector8th").addEventListener("submit", areaSector8th);

function areaSector8th(event) {
  event.preventDefault();
  event.stopPropagation();

  var areaSectorAOS8th = parseFloat(document.getElementById("areaSectorAOS8th").value, 10),
    lengthAOS8th = parseFloat(document.getElementById("lengthAOS8th").value, 10),
    radiusAOS8th;

  radiusAOS8th = (2 * areaSectorAOS8th) / lengthAOS8th;

  document.getElementById("radiusAOS8th").value = radiusAOS8th;
}



// Calculations on Bearings: 1st
// Given: Bearing of Point B from Point A
// To Find: Bearing of Point A from Point B
document.getElementById("bearing1st").addEventListener("submit", bearing1st);

function bearing1st(event) {
  event.preventDefault();
  event.stopPropagation();

  var bearingBA1st = parseFloat(document.getElementById("bearingBA1st").value, 10) || 0,
    bearingAB1st;

    if ((bearingBA1st >= 0) && (bearingBA1st < 180))  
    {
      bearingAB1st = bearingBA1st + 180;
    }

    if ((bearingBA1st >= 180) && (bearingBA1st <= 360))  
    {
      bearingAB1st = bearingBA1st - 180;
    }

  document.getElementById("bearingAB1st").value = bearingAB1st;
}

// Calculations on Bearings: 2nd
// Given: Bearing of a Point 
// To Find: Compass Bearing
document.getElementById("bearing2nd").addEventListener("submit", bearing2nd);

function bearing2nd(event) {
  event.preventDefault();
  event.stopPropagation();

  var bearingPoint2nd = parseFloat(document.getElementById("bearingPoint2nd").value, 10),
    compassBearingPoint2nd1,
    compassBearingPoint2nd2,
    compassBearingPoint2nd3;

    if ((bearingPoint2nd > 0) && (bearingPoint2nd < 90))  
    {
      compassBearingPoint2nd1 = "N";
      compassBearingPoint2nd2 = bearingPoint2nd;
      compassBearingPoint2nd3 = "E";
    }

    if ((bearingPoint2nd > 90) && (bearingPoint2nd < 180))  
    {
      compassBearingPoint2nd1 = "S";
      compassBearingPoint2nd2 = 180 - bearingPoint2nd;
      compassBearingPoint2nd3 = "E";
    }

    if ((bearingPoint2nd > 180) && (bearingPoint2nd < 270))  
    {
      compassBearingPoint2nd1 = "S";
      compassBearingPoint2nd2 = bearingPoint2nd - 180;
      compassBearingPoint2nd3 = "W";
    }

    if ((bearingPoint2nd > 270) && (bearingPoint2nd < 360))  
    {
      compassBearingPoint2nd1 = "N";
      compassBearingPoint2nd2 = 360 - bearingPoint2nd;
      compassBearingPoint2nd3 = "W";
    }

  document.getElementById("compassBearingPoint2nd1").value = compassBearingPoint2nd1;
  document.getElementById("compassBearingPoint2nd2").value = compassBearingPoint2nd2;
  document.getElementById("compassBearingPoint2nd3").value = compassBearingPoint2nd3;
}

// Calculations on Bearings: 3rd
// Given: Bearing of Point B from Point A
// To Express: Bearing of Point A from Point B as a Compass Bearing
document.getElementById("bearing3rd").addEventListener("submit", bearing3rd);

function bearing3rd(event) {
  event.preventDefault();
  event.stopPropagation();

  var bearingBA3rd = parseFloat(document.getElementById("bearingBA3rd").value, 10),
    compassBearingPoint3rd1,
    compassBearingPoint3rd2,
    compassBearingPoint3rd3;

    if ((bearingBA3rd > 0) && (bearingBA3rd < 90))  
    {
      compassBearingPoint3rd1 = "S";
      compassBearingPoint3rd2 = bearingBA3rd;
      compassBearingPoint3rd3 = "W";
    }

    if ((bearingBA3rd > 90) && (bearingBA3rd < 180))  
    {
      compassBearingPoint3rd1 = "N";
      compassBearingPoint3rd2 = 180 - bearingBA3rd;
      compassBearingPoint3rd3 = "W";
    }

    if ((bearingBA3rd > 180) && (bearingBA3rd < 270))  
    {
      compassBearingPoint3rd1 = "N";
      compassBearingPoint3rd2 = bearingBA3rd - 180;
      compassBearingPoint3rd3 = "E";
    }

    if ((bearingBA3rd > 270) && (bearingBA3rd < 360))  
    {
      compassBearingPoint3rd1 = "S";
      compassBearingPoint3rd2 = 360 - bearingBA3rd;
      compassBearingPoint3rd3 = "E";
    }

  document.getElementById("compassBearingPoint3rd1").value = compassBearingPoint3rd1;
  document.getElementById("compassBearingPoint3rd2").value = compassBearingPoint3rd2;
  document.getElementById("compassBearingPoint3rd3").value = compassBearingPoint3rd3;
}

// Calculations on Bearings: 4th
// Given: Bearing of Point B from Point A (Conventional Representation)
// To Express: Bearing of Point A from Point B as a Compass Bearing
document.getElementById("bearing4th").addEventListener("submit", bearing4th);

function bearing4th(event) {
  event.preventDefault();
  event.stopPropagation();

  var conventionalBearingPoint4th = parseFloat(document.getElementById("conventionalBearingPoint4th").value, 10),
    cardinalPoint4th1 = document.getElementById("cardinalPoint4th1").value,
    cardinalPoint4th2 = document.getElementById("cardinalPoint4th2").value,
    compassBearingPoint4th1,
    compassBearingPoint4th2,
    compassBearingPoint4th3;

    if((conventionalBearingPoint4th <= 0) || (conventionalBearingPoint4th >= 90))
    {
      alert("The angle must be greater than 0&deg; or less than 90&deg;");
    }

    compassBearingPoint4th2 = conventionalBearingPoint4th;

    if ((cardinalPoint4th1 == "north") && (cardinalPoint4th2 == "east"))  
    {
      compassBearingPoint4th1 = "S";
      compassBearingPoint4th3 = "W";
    }

    if ((cardinalPoint4th1 == "south") && (cardinalPoint4th2 == "east"))    
    {
      compassBearingPoint4th1 = "N";
      compassBearingPoint4th3 = "W";
    }

    if ((cardinalPoint4th1 == "south") && (cardinalPoint4th2 == "west"))    
    {
      compassBearingPoint4th1 = "N";
      compassBearingPoint4th3 = "E";
    }

    if ((cardinalPoint4th1 == "north") && (cardinalPoint4th2 == "west"))  
    {
      compassBearingPoint4th1 = "S";
      compassBearingPoint4th3 = "E";
    }

  document.getElementById("compassBearingPoint4th1").value = compassBearingPoint4th1;
  document.getElementById("compassBearingPoint4th2").value = compassBearingPoint4th2;
  document.getElementById("compassBearingPoint4th3").value = compassBearingPoint4th3;
}




// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display === '')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none')
        e.style.display = 'inline-block';
    else
        e.style.display = 'none';
}


// Tab 1
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Tab 2
function openLink1(evt, linkName1) {
  var j, y, tablinks1;
  y = document.getElementsByClassName("myLink1");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablink1");
  for (j = 0; j < y.length; j++) {
    tablinks1[j].className = tablinks1[j].className.replace(" w3-red", "");
  }
  document.getElementById(linkName1).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Tab 3
function openLink2(evt, linkName2) {
  var a, c, tablinks2;
  c = document.getElementsByClassName("myLink2");
  for (a = 0; a < c.length; a++) {
    c[a].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablink2");
  for (a = 0; a < c.length; a++) {
    tablinks2[a].className = tablinks2[a].className.replace(" w3-red", "");
  }
  document.getElementById(linkName2).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Tab 4
function openLink3(evt, linkName3) {
  var b, d, tablinks3;
  d = document.getElementsByClassName("myLink3");
  for (b = 0; b < d.length; b++) {
    d[b].style.display = "none";
  }
  tablinks3 = document.getElementsByClassName("tablink3");
  for (b = 0; b < d.length; b++) {
    tablinks3[a].className = tablinks3[a].className.replace(" w3-red", "");
  }
  document.getElementById(linkName3).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Tab 5
function openLink4(evt, linkName4) {
  var g, h, tablinks4;
  h = document.getElementsByClassName("myLink4");
  for (g = 0; g < h.length; g++) {
    h[g].style.display = "none";
  }
  tablinks4 = document.getElementsByClassName("tablink4");
  for (g = 0; g < h.length; g++) {
    tablinks4[a].className = tablinks4[a].className.replace(" w4-red", "");
  }
  document.getElementById(linkName4).style.display = "block";
  evt.currentTarget.className += " w4-red";
}

// Tab 6
function openLink5(evt, linkName5) {
  var e, f, tablinks5;
  f = document.getElementsByClassName("myLink5");
  for (e = 0; e < f.length; e++) {
    f[e].style.display = "none";
  }
  tablinks5 = document.getElementsByClassName("tablink5");
  for (e = 0; e < f.length; e++) {
    tablinks5[e].className = tablinks5[e].className.replace(" w3-red", "");
  }
  document.getElementById(linkName5).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

// Click on the second tablink on load
document.getElementsByClassName("tablink1")[0].click();

// Click on the third tablink on load
document.getElementsByClassName("tablink2")[0].click();

// Click on the fourth tablink on load
document.getElementsByClassName("tablink3")[0].click();

// Click on the fifth tablink on load
document.getElementsByClassName("tablink4")[0].click();

// Click on the sixth tablink on load
document.getElementsByClassName("tablink5")[0].click();


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