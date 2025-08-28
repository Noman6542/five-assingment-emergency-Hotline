// //  nav bar 


const heartIcons = document.querySelectorAll('.heart-icon');

const likeCounter = document.getElementById('like-counter');

let likeCount = parseInt(likeCounter.textContent);

for (const icon of heartIcons) {
    icon.addEventListener('click', function () {
        
        likeCount++;
        
        
        likeCounter.textContent = likeCount;

    
    }); 
}




// // alert 



let coin = 100;

const callHistoryContainer = document.getElementById("call-history-container");
const coinDisplay = document.getElementById('coin');

const callButtons = document.querySelectorAll(".call-btn");

for (let i = 0; i < callButtons.length; i++) {
    const button = callButtons[i];
    button.addEventListener("click", function() {
        const serviceName = button.getAttribute("data-service");
        const number = button.getAttribute("data-number");

        if (coin >= 20) {
            coin -= 20; 
            coinDisplay.textContent = coin; 

            alert(`📞 You are now about to call the service "${serviceName}".\nNumber: ${number}`);

     const historyItem = document.createElement("div");
            
       historyItem.innerHTML = `

     <div class="mt-4 flex justify-between items-center p-4 my-3 rounded-md bg-[#fafafa]">
            
        <div>
        <h1 class="font-bold">${serviceName}</h1>
        <p class="text-gray-500">${number}</p>
    </div>
    <div>${new Date().toLocaleTimeString()}</div>
    
    </div> 

                `;


  callHistoryContainer.appendChild(historyItem);      
} else {
    alert("You have no enough coin");
    }
    });
    
}

//  clear button 
document.getElementById('clear-history-btn')
 .addEventListener("click",function () {
callHistoryContainer.innerHTML = "";});



// copy 
let totalCopies = 0;

const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountDisplay = document.getElementById('copy-count');
const statusMessage = document.getElementById('statusMessage');

copyButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
  
    const text = document.querySelectorAll('.text-Copy')[index].textContent;

    navigator.clipboard.writeText(text).then(() => {
      totalCopies++;
      copyCountDisplay.textContent = totalCopies;

       alert('টেক্সট কপি হয়েছে!');

      setTimeout(() => {
        statusMessage.classList.remove('opacity-100');
        statusMessage.classList.add('opacity-0');
      }, 2000);
    });
  });
});  

