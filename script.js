const themeToggleBtn = document.querySelector('#theme-toggle');
const body = document.body;
const icon = document.querySelector(".icon");
const hamburgerBtn = document.querySelector("#hamburger");
const navLinksContainer = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li a");

hamburgerBtn.addEventListener("click",()=>{
    navLinksContainer.classList.toggle("active");
    if(navLinksContainer.classList.contains("active")){
        hamburgerBtn.textContent = "✕";
    }else{
        hamburgerBtn.textContent = "☰";
    }
})

navLinks.forEach(link => {
    link.addEventListener("click",()=>{
        navLinksContainer.classList.remove("active");
        hamburgerBtn.textContent = "☰";
    });
});



themeToggleBtn.addEventListener('click',()=>{
    body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode')){
        localStorage.setItem('theme','light');
        icon.textContent = "🌙";
    }else{
        localStorage.setItem('theme','dark');
        icon.textContent = "☀️";
    }
});

const currentTheme = localStorage.getItem('theme');
if(currentTheme === "light"){
    body.classList.add('light-mode');
    icon.textContent = '🌙';
}

// INTERSECTION OBSERVER
// 1.Set rules for observer
const observerOptions = {
    root:null,// Uses the viewport as the bounding box
    rootMargin:'0px',
    threshold:0.15// Triggers when 15% of the card is visible on screen
};

// 2. Create the observer
const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        // If the card crosses the threshold into view...
        if(entry.isIntersecting){
            // Add the visible class to trigger the CSS animation
            entry.target.classList.add('visible');
            // Stop watching this specific card so it doesn't animate out and in repeatedly
            observer.unobserve(entry.target);
        }
    });
},observerOptions);

// 3. Command the observer to watch every project card 
document.querySelectorAll('.scroll-element').forEach(el=>{
    observer.observe(el);
})
