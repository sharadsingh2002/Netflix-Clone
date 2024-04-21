
let faqItems = document.querySelectorAll(".faq-item");

for (let i = 0; i < faqItems.length; i++) {
    let faqItem = faqItems[i];
    let faqbox = faqItem.querySelector(".faqbox");
    let icon = faqbox.querySelector(".icon");
    let content = faqItem.querySelector(".faqans");

    faqbox.addEventListener("click", function() {
        if (icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-plus");
        }

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}




















// let faqboxs = document.querySelectorAll(".faqbox");


// faqboxs.forEach((faq) =>{

//     faq.addEventListener("click", function() {

//         let icon = this.querySelector(".icon");

//         if (icon.classList.contains("fa-plus")) {
//             icon.classList.remove("fa-plus");
//             icon.classList.add("fa-xmark");
//         } else {
//             icon.classList.remove("fa-xmark");
//             icon.classList.add("fa-plus");
//         }

//       let content = this.nextElementSibling;

//         if(content.style.maxHeight){

//             content.style.maxHeight = null;
//         }else {
//             content.style.maxHeight = content.scrollHeight + "px";
//           }


//     });

    























