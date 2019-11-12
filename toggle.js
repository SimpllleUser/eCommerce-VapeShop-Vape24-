function O(i) {
    return document.getElementById(i)
}

function S(i) {
    return O(i).style
}

function toggle() {
    if (!O("contacts").checked) {
        O("arrow-down").setAttribute('src', './icons/arr-contact-up.png')
        S("toggle-contact").display = 'block';
    } else {
        S("toggle-contact").display = 'none';
        O("arrow-down").setAttribute('src', './icons/arr-contact-down.png')
    }
}

function toggle(name) {
    name.style.display = (name.style.display == 'block') ? '' : 'block'
}

function loopToggle() {
    O("mob-inputField").style.borderBottom = (O("mob-inputField").style.borderBottom == '2px solid black') ? '' : '2px solid black';
}

function toggles() {
    if (!O("contacts").checked) {
        O("arrow-down").setAttribute('src', './icons/arr-contact-up.png')
        S("toggle-contact").display = 'block';
    } else {
        S("toggle-contact").display = 'none';
        O("arrow-down").setAttribute('src', './icons/arr-contact-down.png')


    }
}

function accordeon(listContent, arrowAccordeon) {
    if (document.getElementById(listContent).style.display == 'block') {
        document.getElementById(arrowAccordeon).setAttribute('src', "./icons/accordeon-arrow-down.png");
    } else {
        document.getElementById(arrowAccordeon).setAttribute('src', "./icons/accordeon-arrow-up.png");
    }
    document.getElementById(listContent).style.display = (document.getElementById(listContent).style.display == 'block') ? '' : 'block';
}
// ------------------------------script drop down lists------------------------------------------
const arrow = document.getElementsByClassName("arrow-down-volume");
const list = document.getElementsByClassName('list-volume');
const srcDonw = './icons/arrow-down-product.png';
const srcUp = './icons/arrow-up-product.png';


function dropDownList(listIndex, indexArrow) {
    if (list[listIndex].style.display == 'block') {
        arrow[indexArrow].setAttribute('src', srcDonw);
    } else {
        arrow[indexArrow].setAttribute('src', srcUp);
    }
    list[listIndex].style.display = (list[listIndex].style.display == 'block') ? '' : 'block';
}

// ---------------script drop down lists-->

function startFunctionDropDonwList() {
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].onclick = function () {
            dropDownList(i, i);
            console.log(i);
        }
    }
}
// --------------- Slider
var counSlide = 0;
var imgBcg =[];
imgBcg[0]="url('../images/mainSlideImg.png')";
imgBcg[1]="url('../images/left-slide.png')";
imgBcg[2]="url('../images/right-slide.png')";

function next(fon) {
    if (counSlide>=2) {
       counSlide=0;
       O(fon).style.backgroundImage=imgBcg[counSlide];

       console.log(counSlide);
    }else{
        counSlide+=1;
        O(fon).style.backgroundImage=imgBcg[counSlide];
        console.log(counSlide);}
}
function prev(fon) {
    if (counSlide<=0) {
       counSlide=2;
       O(fon).style.backgroundImage=imgBcg[counSlide];

       console.log(counSlide);
    }else{
        counSlide-=1;
        O(fon).style.backgroundImage=imgBcg[counSlide];
        console.log(counSlide);}
}
// ------------------------ Chnage value list
function changeVal(indexValue,indexRow){
    console.log('Value = ', valRow);
    var valRow = document.getElementsByClassName('inputList')[indexRow].value;
    document.getElementsByClassName('volume')[indexValue].value=valRow;
    dropDownList(indexValue,indexValue)
  
  }