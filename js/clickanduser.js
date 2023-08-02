
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

    while (true) { //Return Statement, While Loop, Input-Output
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
    }
};

cafe();

// visitor
function showVisitCount() {
    let visitCount = 0;

    const storedVisitCount = localStorage.getItem('visitCount');

    if (storedVisitCount) {
        visitCount = parseInt(storedVisitCount);
    }

    for (let i = 0; i < 1; i++) { //For Loop:
        visitCount++;
    }

    localStorage.setItem('visitCount', visitCount);

    const counterElement = document.getElementById('counter');
    counterElement.textContent = `You are the\n${visitCount} visitor.。`;
}

window.onload = showVisitCount;


function setupPopup(buttonId, wrapperId, closeId) {
    // {: setupPopupという名前の関数を定義しています。この関数は3つの引数を受け取ります：buttonId、
    // ：buttonId、wrapperId、closeId。それぞれは文字列で、HTML要素のIDを表します
    const clickBtn = document.getElementById(buttonId);
    // clickBtnという変数に、buttonIdで指定されたIDを持つHTML要素（ボタン）を取得して格納しています。
    const popupWrapper = document.getElementById(wrapperId);
    // という変数に、wrapperIdで指定されたIDを持つHTML要素（ポップアップのラッパー）を取得して格納しています。

    clickBtn.addEventListener('click', () => {
        popupWrapper.style.display = 'block';
    });
    // : ボタンがクリックされたときに実行するイベントリスナーを設定しています。ボタンがクリックされると、関数が呼び出されます。
    // ポップアップのラッパー要素のdisplayプロパティを'block'に設定しています。これにより、ポップアップが表示されます

    popupWrapper.addEventListener('click', e => {
        // ポップアップのラッパー要素に対してクリックイベントリスナーを設定しています。
        if (e.target.id === wrapperId || e.target.id === closeId) {
            // イベントが発生した要素のID（e.target.id）をチェックしています。もしイベントがポップアップのラッパー要素をクリックした場合（wrapperId）または閉じるボタンをクリックした場合（closeId）、ポップアップを非表示にする処理が実行されます。
            popupWrapper.style.display = 'none';
            // 'none';: ポップアップのラッパー要素のdisplayプロパティを'none'に設定しています。これにより、ポップアップが非表示になります。
        }
    });
}

setupPopup('pin1', 'popup-wrapper1', 'close');
setupPopup('pin2', 'popup-wrapper2', 'close');
setupPopup('pin3', 'popup-wrapper3', 'close');
  // setupPopup('pin1', 'popup-wrapper1', 'close');: setupPopup関数を呼び出して、IDが'pin1'のボタンをクリックしたときに、IDが'popup-wrapper1'のポップアップを表示し、IDが'close'の要素をクリックするとポップアップを閉じるように設定しています。
  
  // 同様に、setupPopup('pin2', 'popup-wrapper2', 'close');とsetupPopup('pin3', 'popup-wrapper3', 'close');を呼び出して、他のボタンとポップアップに対して同じ処理を行っています。
  