//turning pages
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        console.log(pageTurnId);
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            console.log("turn removed from "+ pageTurnId)
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } 
        else{
            pageTurn.classList.add('turn');
            console.log("turn added to "+ pageTurnId)
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        } 
        
    }
});

//contact btn   WHEN CLICKED ON CONTACT ME BTN THEN MOVE TO CONTACT ME PAGE AT LAST
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    console.log("clicked");
    pages.forEach((page, index) => {
        setTimeout( () => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1)* 200 + 100);
    })
}

//TO GO TO THE PROFILE PAGE FROM CONTACT PAGE
const profileBtn = document.querySelector('.back-profile');
profileBtn.onclick = () => {
    console.log("going to profile");
    pages.forEach((page, index) => {
        setTimeout( () => {
            page.classList.remove('turn');

            setTimeout(() => {
                page.style.zIndex = 20 - index;
            }, 100);
        }, (index + 1)* 200 + 100);
    })
}

let totalPages = pages.length;;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}



//opening portfolio
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left')
const book = document.querySelector('.book');

//right cover animation
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);
setTimeout(() => {
    book.style.zIndex = 101;
}, 2500);

//opening (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

//opening ke baad saare pages at rightside
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1)* 200 + 2100);
})