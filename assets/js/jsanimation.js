// img animation start
const observe = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('anishow');
        } else {
            entry.target.classList.remove('anishow');
        }
    });
});

const animationElements = document.querySelectorAll('.animation');
animationElements.forEach((el) => observe.observe(el));
// img animation end

// img animation start
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const imggElements = document.querySelectorAll('.imgg');
imggElements.forEach((el) => observer.observe(el));
// img animation end



// row animation start
const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});

const rowElements = document.querySelectorAll('.row');
rowElements.forEach((el) => observer1.observe(el));
// row animation End



// input animation start
const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    });
});

const inputElements = document.querySelectorAll('input');
inputElements.forEach((el) => observer2.observe(el));
// input animation End



// textarea animation start
// const observer3 = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show4');
//         } else {
//             entry.target.classList.remove('show4');
//         }
//     });
// });

// const textareaElements = document.querySelectorAll('textarea');
// textareaElements.forEach((el) => observer3.observe(el));
// textarea animation End
