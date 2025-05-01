document.addEventListener("DOMContentLoaded", () => {
    const progressText = document.getElementById("progress-percent");
    const loadingScreen = document.getElementById("loading-screen");
  
    document.body.classList.add("loading");
  
    let progress = 0;
  
    // Simulated loading process
    const fakeLoading = setInterval(() => {
      progress += 1;
      progressText.textContent = `${progress}%`;
  
      if (progress >= 100) {
        clearInterval(fakeLoading);
  
        loadingScreen.classList.add("hidden");
  
        document.body.classList.remove("loading");
  
        setTimeout(() => {
          loadingScreen.remove();
        }, 1000); 
      }
    }, 5); 
  });