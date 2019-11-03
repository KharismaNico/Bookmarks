<!-- Original:  CodeLifter.com (support@codelifter.com) -->
<!-- Web Site:  http://www.codelifter.com -->

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->


<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeedz1 = 2000;
// Duration of crossfade (seconds)
var crossFadeDurationz1 = 1;
// Specify the image files
var Picz1 = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Picz1[0] = 'scrollimages/comingtozoo1.jpg'
Picz1[1] = 'scrollimages/comingtozoo2.jpg'
Picz1[2] = 'scrollimages/comingtozoo3.jpg'
//Picz1[3] = 'scrollimages/comingtozoo4.jpg'
//Picz1[4] = 'scrollimages/comingtozoo5.jpg'
//Picz1[5] = 'scrollimages/comingtozoo6.jpg'
//Picz1[6] = 'scrollimages/comingtozoo7.jpg'
//Picz1[7] = 'scrollimages/comingtozoo8.jpg'
//Picz1[8] = 'scrollimages/comingtozoo9.jpg'
//Picz1[9] = 'scrollimages/comingtozoo10.jpg'
//Picz1[10] = 'scrollimages/comingtozoo11.jpg'
//Picz1[11] = 'scrollimages/comingtozoo12.jpg'

// do not edit anything below this line
var tz1;
var jz1 = 0;
var pz1 = Picz1.length;
var preLoadz1 = new Array();
for (iz1 = 0; iz1 < pz1; iz1++) {
preLoadz1[iz1] = new Image();
preLoadz1[iz1].src = Picz1[iz1];
}
function runSlideShowz1() {
if (document.all) {
document.images.SlideShowz1.style.filter="blendTrans(duration=2)";
document.images.SlideShowz1.style.filter="blendTrans(duration=crossFadeDurationz1)";
document.images.SlideShowz1.filters.blendTrans.Apply();
}
document.images.SlideShowz1.src = preLoadz1[jz1].src;
if (document.all) {
document.images.SlideShowz1.filters.blendTrans.Play();
}
jz1 = jz1 + 1;
if (jz1 > (pz1 - 1)) jz1 = 0;
tz1 = setTimeout('runSlideShowz1()', slideShowSpeedz1);
}
//  End -->


<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeedz2 = 2100;
// Duration of crossfade (seconds)
var crossFadeDurationz2 = 1;
// Specify the image files
var Picz2 = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Picz2[0] = 'scrollimages/amazinganimals1.jpg'
Picz2[1] = 'scrollimages/amazinganimals2.jpg'
Picz2[2] = 'scrollimages/amazinganimals3.jpg'
//Picz2[3] = 'scrollimages/amazinganimals4.jpg'
//Picz2[4] = 'scrollimages/amazinganimals5.jpg'
//Picz2[5] = 'scrollimages/amazinganimals6.jpg'
//Picz2[6] = 'scrollimages/amazinganimals7.jpg'
//Picz2[7] = 'scrollimages/amazinganimals8.jpg'
//Picz2[8] = 'scrollimages/amazinganimals9.jpg'

// do not edit anything below this line
var tz2;
var jz2 = 0;
var pz2 = Picz2.length;
var preLoadz2 = new Array();
for (iz2 = 0; iz2 < pz2; iz2++) {
preLoadz2[iz2] = new Image();
preLoadz2[iz2].src = Picz2[iz2];
}
function runSlideShowz2() {
if (document.all) {
document.images.SlideShowz2.style.filter="blendTrans(duration=2)";
document.images.SlideShowz2.style.filter="blendTrans(duration=crossFadeDurationz2)";
document.images.SlideShowz2.filters.blendTrans.Apply();
}
document.images.SlideShowz2.src = preLoadz2[jz2].src;
if (document.all) {
document.images.SlideShowz2.filters.blendTrans.Play();
}
jz2 = jz2 + 1;
if (jz2 > (pz2 - 1)) jz2 = 0;
tz2 = setTimeout('runSlideShowz2()', slideShowSpeedz2);
}
//  End -->


<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeedz3 = 2200;
// Duration of crossfade (seconds)
var crossFadeDurationz3 = 1;
// Specify the image files
var Picz3 = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Picz3[0] = 'scrollimages/animalencounters1.jpg'
Picz3[1] = 'scrollimages/animalencounters2.jpg'
Picz3[2] = 'scrollimages/animalencounters3.jpg'
//Picz3[3] = 'scrollimages/animalencounters4.jpg'
//Picz3[4] = 'scrollimages/animalencounters5.jpg'
//Picz3[5] = 'scrollimages/animalencounters6.jpg'
//Picz3[6] = 'scrollimages/animalencounters7.jpg'
//Picz3[7] = 'scrollimages/animalencounters8.jpg'
//Picz3[8] = 'scrollimages/animalencounters9.jpg'

// do not edit anything below this line
var tz3;
var jz3 = 0;
var pz3 = Picz3.length;
var preLoadz3 = new Array();
for (iz3 = 0; iz3 < pz3; iz3++) {
preLoadz3[iz3] = new Image();
preLoadz3[iz3].src = Picz3[iz3];
}
function runSlideShowz3() {
if (document.all) {
document.images.SlideShowz3.style.filter="blendTrans(duration=2)";
document.images.SlideShowz3.style.filter="blendTrans(duration=crossFadeDurationz3)";
document.images.SlideShowz3.filters.blendTrans.Apply();
}
document.images.SlideShowz3.src = preLoadz3[jz3].src;
if (document.all) {
document.images.SlideShowz3.filters.blendTrans.Play();
}
jz3 = jz3 + 1;
if (jz3 > (pz3 - 1)) jz3 = 0;
tz3 = setTimeout('runSlideShowz3()', slideShowSpeedz3);
}
//  End -->


<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeedz4 = 2300;
// Duration of crossfade (seconds)
var crossFadeDurationz4 = 1;
// Specify the image files
var Picz4 = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Picz4[0] = 'scrollimages/crocoseum1.jpg'
Picz4[1] = 'scrollimages/crocoseum2.jpg'
Picz4[2] = 'scrollimages/crocoseum3.jpg'
//Picz4[3] = 'scrollimages/crocoseum4.jpg'
//Picz4[4] = 'scrollimages/crocoseum5.jpg'
//Picz4[5] = 'scrollimages/crocoseum6.jpg'
//Picz4[6] = 'scrollimages/crocoseum7.jpg'
//Picz4[7] = 'scrollimages/crocoseum8.jpg'
//Picz4[8] = 'scrollimages/crocoseum9.jpg'

// do not edit anything below this line
var tz4;
var jz4 = 0;
var pz4 = Picz4.length;
var preLoadz4 = new Array();
for (iz4 = 0; iz4 < pz4; iz4++) {
preLoadz4[iz4] = new Image();
preLoadz4[iz4].src = Picz4[iz4];
}
function runSlideShowz4() {
if (document.all) {
document.images.SlideShowz4.style.filter="blendTrans(duration=2)";
document.images.SlideShowz4.style.filter="blendTrans(duration=crossFadeDurationz4)";
document.images.SlideShowz4.filters.blendTrans.Apply();
}
document.images.SlideShowz4.src = preLoadz4[jz4].src;
if (document.all) {
document.images.SlideShowz4.filters.blendTrans.Play();
}
jz4 = jz4 + 1;
if (jz4 > (pz4 - 1)) jz4 = 0;
tz4 = setTimeout('runSlideShowz4()', slideShowSpeedz4);
}
//  End -->

<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeedz5 = 2000;
// Duration of crossfade (seconds)
var crossFadeDurationz5 = 1;
// Specify the image files
var Picz5 = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Picz5[0] = 'scrollimages/wincar1.jpg'
Picz5[1] = 'scrollimages/wincar2.jpg'
Picz5[2] = 'scrollimages/wincar3.jpg'
//Picz5[3] = 'scrollimages/wincar4.jpg'

// do not edit anything below this line
var tz5;
var jz5 = 0;
var pz5 = Picz5.length;
var preLoadz5 = new Array();
for (iz5 = 0; iz5 < pz5; iz5++) {
preLoadz5[iz5] = new Image();
preLoadz5[iz5].src = Picz5[iz5];
}
function runSlideShowz5() {
if (document.all) {
document.images.SlideShowz5.style.filter="blendTrans(duration=2)";
document.images.SlideShowz5.style.filter="blendTrans(duration=crossFadeDurationz5)";
document.images.SlideShowz5.filters.blendTrans.Apply();
}
document.images.SlideShowz5.src = preLoadz5[jz5].src;
if (document.all) {
document.images.SlideShowz5.filters.blendTrans.Play();
}
jz5 = jz5 + 1;
if (jz5 > (pz5 - 1)) jz5 = 0;
tz5 = setTimeout('runSlideShowz5()', slideShowSpeedz5);
}
//  End -->


<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeedz6 = 2100;
// Duration of crossfade (seconds)
var crossFadeDurationz6 = 1;
// Specify the image files
var Picz6 = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Picz6[0] = 'scrollimages/makingheadlines1.jpg'
Picz6[1] = 'scrollimages/makingheadlines2.jpg'
Picz6[2] = 'scrollimages/makingheadlines3.jpg'

// do not edit anything below this line
var tz6;
var jz6 = 0;
var pz6 = Picz6.length;
var preLoadz6 = new Array();
for (iz6 = 0; iz6 < pz6; iz6++) {
preLoadz6[iz6] = new Image();
preLoadz6[iz6].src = Picz6[iz6];
}
function runSlideShowz6() {
if (document.all) {
document.images.SlideShowz6.style.filter="blendTrans(duration=2)";
document.images.SlideShowz6.style.filter="blendTrans(duration=crossFadeDurationz6)";
document.images.SlideShowz6.filters.blendTrans.Apply();
}
document.images.SlideShowz6.src = preLoadz6[jz6].src;
if (document.all) {
document.images.SlideShowz6.filters.blendTrans.Play();
}
jz6 = jz6 + 1;
if (jz6 > (pz6 - 1)) jz6 = 0;
tz6 = setTimeout('runSlideShowz6()', slideShowSpeedz6);
}
//  End -->


<!-- Begin
// Set slideShowSpeed (milliseconds)
var slideShowSpeedz7 = 2200;
// Duration of crossfade (seconds)
var crossFadeDurationz7 = 1;
// Specify the image files
var Picz7 = new Array();
// to add more images, just continue
// the pattern, adding to the array below

Picz7[0] = 'scrollimages/gossip1.jpg'
Picz7[1] = 'scrollimages/gossip2.jpg'
Picz7[2] = 'scrollimages/gossip3.jpg'
//Picz7[3] = 'scrollimages/gossip4.jpg'
//Picz7[4] = 'scrollimages/gossip5.jpg'
//Picz7[5] = 'scrollimages/gossip6.jpg'
//Picz7[6] = 'scrollimages/gossip7.jpg'

// do not edit anything below this line
var tz7;
var jz7 = 0;
var pz7 = Picz7.length;
var preLoadz7 = new Array();
for (iz7 = 0; iz7 < pz7; iz7++) {
preLoadz7[iz7] = new Image();
preLoadz7[iz7].src = Picz7[iz7];
}
function runSlideShowz7() {
if (document.all) {
document.images.SlideShowz7.style.filter="blendTrans(duration=2)";
document.images.SlideShowz7.style.filter="blendTrans(duration=crossFadeDurationz7)";
document.images.SlideShowz7.filters.blendTrans.Apply();
}
document.images.SlideShowz7.src = preLoadz7[jz7].src;
if (document.all) {
document.images.SlideShowz7.filters.blendTrans.Play();
}
jz7 = jz7 + 1;
if (jz7 > (pz7 - 1)) jz7 = 0;
tz7 = setTimeout('runSlideShowz7()', slideShowSpeedz7);
}
//  End -->