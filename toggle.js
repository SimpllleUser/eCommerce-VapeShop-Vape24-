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
function toggle(name){
    name.style.display = (name.style.display == 'block') ? '' : 'block'
    }


// function O(i) {
//     return document.getElementById(i)
// }
// function S(i) {
//     return O(i).style
// }
// function toggle() {
//     if (!O("contacts").checked) {
//         O("arrow-down").setAttribute('src', './icons/arr-contact-up.png')
//         S("toggle-contact").display = 'block';
//     } else {
//         S("toggle-contact").display = 'none';
//         O("arrow-down").setAttribute('src', './icons/arr-contact-down.png')
//     }
// }

