const myImage = document.querySelector ('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/gambar.png') {
        myImage.setAttribute ( 'src','images/MasaKini.jpg');
    } else {
        myImage.setAttribute('src','image/gambar.png');
    }
}

let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h1');

function setUserName() {
    const myName = prompt('Please Enter Your Name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `DAFTAR GOAL / TUJUAN, ${myName}`;
}

if (!localStorage.getItem ('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem ('name');
    myHeading.textContent = `DAFTAR GOAL / TUJUAN, ${storedName}`
}

myButton.onclick = () => {
    setUserName();
}

function setUserName() {
    const myName = prompt('Please Enter Your Name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `DAFTAR GOAL / TUJUAN, ${myName}`;
    }
}  