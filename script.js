const projectItems = document.querySelectorAll(".project-item");
const welcomeScreen = document.getElementById("welcome");
const projectContent = document.getElementById("project-content");
const projectFrame = document.getElementById("project-frame");
const projectTitle = document.getElementById("project-title");
const externalLink = document.getElementById("external-link");

projectItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all items
    projectItems.forEach((i) => i.classList.remove("active"));

    // Add active class to clicked item
    item.classList.add("active");

    // Get project data
    const url = item.dataset.url;
    const title = item.dataset.title;

    // Update content
    projectTitle.textContent = title;
    externalLink.href = url;
    projectFrame.src = url;

    // Show project content and hide welcome
    welcomeScreen.style.display = "none";
    projectContent.style.display = "block";

    // Add smooth loading effect
    projectFrame.style.opacity = "0";
    projectFrame.onload = () => {
      setTimeout(() => {
        projectFrame.style.transition = "opacity 0.3s ease";
        projectFrame.style.opacity = "1";
      }, 100);
    };
  });
});

// Add some interactive animations
document.addEventListener("DOMContentLoaded", () => {
  // Animate welcome screen on load
  const welcomeElements = document.querySelectorAll(".welcome-screen > *");
  welcomeElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
});

