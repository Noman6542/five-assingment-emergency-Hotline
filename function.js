
const heartIcons = document.querySelectorAll('.heart-icon');

const likeCounter = document.getElementById('like-counter');

let likeCount = parseInt(likeCounter.textContent);

for (const icon of heartIcons) {
    icon.addEventListener('click', function () {
        
        likeCount++;
        
        
        likeCounter.textContent = likeCount;

    
    }); 
}
