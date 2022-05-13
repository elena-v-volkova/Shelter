let pets = [
    {
        name: 'Jennifer',
        img: '../../assets/images/pets/pets-jennifer.png',
        type: 'Dog',
        breed: 'Labrador',
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: '2 months',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: "Sophia",
        img: '../../assets/images/pets/pets-katrine-1.png',
        type: 'Dog',
        breed: 'Shih tzu',
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: '2 years',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: "Woody",
        img: '../../assets/images/pets/pets-woody.png',
        type: 'Dog',
        breed: 'Golden Retriever',
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: '3 1/2 years',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: "Scarlett",
        img: '../../assets/images/pets/pets-scarlet.png',
        type: 'Dog',
        breed: 'Jack Russel Terrier',
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: '5 months',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: "Katrine",
        img: '../../assets/images/pets/pets-katrine.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: '2 years',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: "Timmy",
        img: '../../assets/images/pets/pets-timmy.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: '9 months',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: "Freddie",
        img: '../../assets/images/pets/pets-freddie.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: '3 1/4 years',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: "Charly",
        img: '../../assets/images/pets/pets-charly.png',
        type: 'Dog',
        breed: 'Jack Russel Terrier',
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: '1 year',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
];
let petsJs = JSON.stringify(pets);
let petsList = JSON.parse(petsJs);


let iconMenu = document.querySelector('.header__burger');
let menuBody = document.querySelector('.header-nav');
let menuLink = document.querySelectorAll('.nav-menu__link');
let logo = document.querySelector('.inside');



iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('active')
    menuBody.classList.toggle('active')
    logo.classList.toggle('active')
    if (menuBody.classList.contains('active')) {
        document.body.classList.add('inactive')
    } else {
        document.body.classList.remove('inactive')
    }
});

menuLink.forEach(element => {
    element.addEventListener('click', function (e) {
        if (menuBody.classList.contains('active')) {
            document.body.classList.remove('inactive')
            iconMenu.classList.remove('active')
            menuBody.classList.remove('active')
            logo.classList.remove('active')

        }
    })
});

window.addEventListener('click', e => {
    let target = e.target
    if (!target.closest('.header-nav') && !target.closest('.header__burger')) {
        document.body.classList.remove('inactive')
        iconMenu.classList.remove('active')
        menuBody.classList.remove('active')
        logo.classList.remove('active')

    }
})

//popup 
let pageCards = document.querySelectorAll('.friend-item')



pageCards.forEach(function (el) {
    el.addEventListener('click', showPopup)
});


function showPopup() {

    let slideName;
    if (event.target.classList.contains('friend-item')) {
        slideName = event.target.querySelector('.friend-item-name').innerHTML
    } else if (event.target.parentNode.classList.contains('friend-item')) {
        slideNameSearch = event.target.parentNode
        slideName = slideNameSearch.querySelector('.friend-item-name').innerHTML
    }

    let petImg = petsList.find(pet => pet.name === slideName).img
    console.log(petImg);


    let popupWrapper = document.createElement('div')
    popupWrapper.classList.add('popupWrapper')

    let popupBody = document.createElement('div')
    popupBody.classList.add('popupBody')

    let popupImg = document.createElement('img')
    popupImg.classList.add('popupImg')
    popupImg.src = petImg;

    let descWrapper = document.createElement('div')
    descWrapper.classList.add('descWrapper')

    let nameHeading = document.createElement('h3')
    nameHeading.classList.add('nameHeading')
    nameHeading.innerHTML = slideName

    let petType = document.createElement('h4')
    petType.classList.add('petType')
    petType.innerHTML = `${petsList.find(pet => pet.name === slideName).type} - ${petsList.find(pet => pet.name === slideName).breed}`

    let petDesc = document.createElement('p')
    petDesc.classList.add('petDesc')
    petDesc.innerHTML = petsList.find(pet => pet.name === slideName).description

    let petDescList = document.createElement('ul')
    petDescList.classList.add('petDescList')

    let petDescItemAge = document.createElement('li');
    petDescItemAge.classList.add('petDescItemAge', 'desc-item')
    petDescItemAge.innerHTML = `<b>Age:</b> ${petsList.find(pet => pet.name === slideName).age}`

    let petDescItemInoculations = document.createElement('li');
    petDescItemInoculations.classList.add('petDescItemInoculations', 'desc-item')
    petDescItemInoculations.innerHTML = `<b>Inoculations:</b> ${petsList.find(pet => pet.name === slideName).inoculations}`

    let petDescItemDiseases = document.createElement('li');
    petDescItemDiseases.classList.add('petDescItemDiseases', 'desc-item')
    petDescItemDiseases.innerHTML = `<b>Diseases:</b> ${petsList.find(pet => pet.name === slideName).diseases}`

    let petDescItemParasites = document.createElement('li');
    petDescItemParasites.classList.add('petDescItemParasites', 'desc-item')
    petDescItemParasites.innerHTML = `<b>Parasites:</b> ${petsList.find(pet => pet.name === slideName).parasites}`

    let btnCross = document.createElement('span');
    btnCross.classList.add('btnCross')



    popupBody.append(popupImg);
    popupBody.append(descWrapper);
    popupBody.append(btnCross);

    descWrapper.append(nameHeading);
    descWrapper.append(petType);
    descWrapper.append(petDesc);
    descWrapper.append(petDescList);
    petDescList.append(petDescItemAge);
    petDescList.append(petDescItemInoculations);
    petDescList.append(petDescItemDiseases);
    petDescList.append(petDescItemParasites);

    popupWrapper.append(popupBody)
    document.body.append(popupWrapper)
    document.body.classList.add('inactivePopup')


    popupWrapper.onmouseover = (e) => {
        if (e.target === e.currentTarget) popupBody.classList.add('hover');
    };

    popupWrapper.onmouseout = (e) => {
        if (e.target === e.currentTarget) popupBody.classList.remove('hover');
    };



    popupWrapper.addEventListener('click', e => {
        let target = e.target
        if (!target.closest('.popupBody') || target.closest('.btnCross')) {
            document.body.removeChild(popupWrapper)
            document.body.classList.remove('inactivePopup')

        }
    })



}


