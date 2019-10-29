// Your code goes here

const register = document.querySelectorAll('.nav-link')[2];

register.addEventListener('click', event => {

    document.querySelector('.hidden-form').style.display = 'flex';
    // document.querySelector('.hidden-form').style.justifycontent = 'center';
    document.querySelector('.hidden-form').style.backgroundColor = 'yellow';
    document.querySelector('#email').style.display = 'block';
    document.querySelector('#password2').style.display = 'block';
    event.stopPropagation();


    console.log('unhide registration form');
    console.log(event);
    // event.stopImmediatePropagation();
});
const signIn = document.querySelectorAll('.nav-link')[3];
signIn.addEventListener('click', event => {

    document.querySelector('.hidden-form').style.display = 'block';
    document.querySelector('.hidden-form').style.backgroundColor = 'turquoise';
    document.querySelector('#email').style.display = 'none';
    document.querySelector('#password2').style.display = 'none';
    event.stopPropagation();


    console.log('unhide sign in form');
    console.log(event);

});


const lastNameInput = document.getElementsByName('lname')[0];

lastNameInput.addEventListener('keydown', (event => {
    console.log(`User first name entered: ${event.key}`);
}));
const firstNameInput = document.getElementsByName('fname')[0];

firstNameInput.addEventListener('keydown', (event => {
    console.log(`User last name entered: ${event.key}`);
}));
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    console.log('Form: Detected Submit Event!');
    console.log('First Name', event.target[0].value);
    console.log('Last Name', event.target[1].value);
    console.log('Password', event.target[2].value);
    event.preventDefault();
    document.querySelector('.hidden-form').style.display = 'none';
    
    console.log(`form hidden again`)

// Clear text from fields
      document.getElementById("fname").value='';
      document.getElementById("lname").value='';
      document.getElementById("email").value='';
      document.getElementById("password").value='';
      document.getElementById("password2").value='';
    //   document.querySelector('.hidden-form').input.reset();



});

// const submit = document.querySelector('.form .btn');

// submit.addEventListener('submit', function (event) {
//   console.log('Form: Detected Submit Event!');
//   event.preventDefault();

//   console.log('First Name', event.target[0].value);
//   console.log('Last Name', event.target[1].value);
// });
//   const submit = document.querySelector('.btn');

// console.log(submit);

// register.addEventListener('click', event => {

//         document.querySelector('.hidden-form').style.display = 'none';


//     console.log('hidden form- display none');
//     console.log(event);

//   });


const hoverIslandPic = document.querySelectorAll('.destination .btn')[2];

hoverIslandPic.addEventListener('mouseover', event => {

    document.querySelector('#destinationImg').src = "img/island.jpg";
    document.querySelector('#destinationImg').style.width = '600px';
    document.querySelector('#destinationImg').style.height = '200px';
    // document.querySelector('#destinationImg').style.overflow = 'hidden';

    event.stopPropagation();

});
hoverIslandPic.addEventListener('mouseleave', event => {

    document.querySelector('#destinationImg').src = "img/destination.jpg";
    document.querySelector('#destinationImg').style.width = '600px';
    document.querySelector('#destinationImg').style.height = '200px';

    event.stopPropagation();

});

const hoverMountainPic = document.querySelectorAll('.destination .btn')[1];

hoverMountainPic.addEventListener('mouseover', event => {

    document.querySelector('#destinationImg').src = "img/mountains.jpeg";
    document.querySelector('#destinationImg').style.width = '600px';
    document.querySelector('#destinationImg').style.height = '200px';
    // document.querySelector('#destinationImg').style.overflow = 'hidden';

    event.stopPropagation();

});
hoverMountainPic.addEventListener('mouseleave', event => {

    document.querySelector('#destinationImg').src = "img/destination.jpg";
    document.querySelector('#destinationImg').style.width = '600px';
    document.querySelector('#destinationImg').style.height = '200px';

    event.stopPropagation();

});
