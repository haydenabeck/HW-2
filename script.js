// Variables
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const portBtn = document.getElementById('port-btn');
const resBtn = document.getElementById('res-btn');

const aboutCard = document.getElementById('about-card');
const contactCard = document.getElementById('contact-card');
const portCard = document.getElementById('port-card');
const resCard = document.getElementById('res-card');

// When you click the about button
aboutBtn.addEventListener("click", displayAbout);
// Display the about section
function displayAbout(){
// Hide the other sections
    contactCard.classList.add('hide');

    portCard.classList.add('hide');

    resCard.classList.add('hide');

    console.log("clicked");
    
    aboutCard.classList.remove('hide');

};

// When you click the contact button
contactBtn.addEventListener("click", displayContact);
// Display the contact section
function displayContact(){
// Hide the other section
    aboutCard.classList.add('hide');

    portCard.classList.add('hide');

    resCard.classList.add('hide');

    console.log("clicked");
    
    contactCard.classList.remove('hide');

};

// When you click the portfolio button
portBtn.addEventListener("click", displayPort);
// Display the portfolio section
function displayPort(){
// Hide the other sections
    aboutCard.classList.add('hide');

    contactCard.classList.add('hide');

    resCard.classList.add('hide');

    console.log("clicked");
    
    portCard.classList.remove('hide');

};

// When you click the resume button
resBtn.addEventListener("click", displayRes);
// Display the resume section
function displayRes(){
// Hide the other sections
    aboutCard.classList.add('hide');

    portCard.classList.add('hide');

    contactCard.classList.add('hide');

    console.log("clicked");
    
    resCard.classList.remove('hide');

};