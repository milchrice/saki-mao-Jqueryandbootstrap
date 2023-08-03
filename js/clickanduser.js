// user input&output
// // JS
function cafe() {
    let greeting = "Hello!";
    console.log(typeof (greeting));

    const now = new Date(); 
    console.log(typeof (now));

    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    let answer = window.prompt(`${greeting} Which do you like?\n\nCoffee\nBread\nEclair`);

    if (answer === "Coffee") {
        window.alert("You should take a look Coffee Cafe");
        return;
    } else if (answer === "Bread") {
        window.alert("We recommend Bread Cafe");
        return;
    } else if (answer === "Eclair") {
        window.alert("We recommend Eclair Cafe");
        return;
    } else {
        window.alert("Please type some dessert name");
    }

};

cafe();


// visitor
// Jquery
function showVisitCount() {
    let visitCount = 0;
    const storedVisitCount = localStorage.getItem('visitCount');
    if (storedVisitCount) {
        visitCount = parseInt(storedVisitCount);
    }

    for (let i = 0; i < 1; i++) {
        visitCount++;
    }

    localStorage.setItem('visitCount', visitCount);

    const counterElement = $('#counter');
    counterElement.text(`You are the\n${visitCount} visitor.`);
}

showVisitCount();


// popup
function setupPopup(buttonId, wrapperId, closeId) {
    const clickBtn = $('#'+buttonId);
    const popupWrapper = $('#'+wrapperId);
  
    clickBtn.on('click', () => {
      popupWrapper.show();
    });
    
    
    popupWrapper.on('click', e => {
      if ($(e.target).attr('id') === wrapperId || $(e.target).attr('id') === closeId) {
        popupWrapper.hide();
      }
    });
  }

  
	
  $(document).ready(function () {
    setupPopup('pin1', 'popup-wrapper1', 'close');
    setupPopup('pin2', 'popup-wrapper2', 'close');
    setupPopup('pin3', 'popup-wrapper3', 'close');
  });
