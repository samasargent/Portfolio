// function deferVideo() {
//     $("video source").each(function () {
//         var sourceFile = $(this).attr("data-src");
//         $(this).attr("src", sourceFile);
//         var video = this.parentElement;
//         video.load();
//     }
//     )
// };
// window.onload = deferVideo;

// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This code will close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the cancel button or anywhere that is not the form
document.addEventListener("click", function (event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm();
    }
}, false);