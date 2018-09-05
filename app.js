const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener("mouseenter", () =>{
    profileImage.setAttribute("src", "images/happy.png");
});

profileImage.addEventListener("mouseleave", () => {
    profileImage.setAttribute("src", "images/avatar.png");
});