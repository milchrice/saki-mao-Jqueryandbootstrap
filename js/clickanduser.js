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
// 訪問回数のカウントと表示:
// // JS
// function showVisitCount() {
//     // showVisitCount()関数の定義を開始します。この関数は訪問回数をカウントして表示する機能を持ちます。
//     let visitCount = 0;
//     // 変数visitCountを宣言し、0で初期化します。この変数は訪問回数を格納するために使用されます。
//     const storedVisitCount = localStorage.getItem('visitCount');

//     // localStorageから"visitCount"というキーで保存されている訪問回数を取得します。getItem()メソッドを使用してローカルストレージから値を取得し、変数storedVisitCountに格納します。
//     if (storedVisitCount) {
//         visitCount = parseInt(storedVisitCount);
//     }

//     // storedVisitCountがnullまたはundefinedでない場合、つまりローカルストレージに訪問回数が保存されている場合は、parseInt()関数を使ってstoredVisitCountの値を整数に変換し、visitCountに代入します。
//     for (let i = 0; i < 1; i++) {
//         visitCount++;
//     }

//     // forループを使用して、訪問回数を1回増やします。現在のコードでは1回のみですが、必要に応じてループ回数を変更できます。
//     localStorage.setItem('visitCount', visitCount);

//     // localStorageに"visitCount"というキーで訪問回数を保存します。これにより、ページを閉じて再度訪れても訪問回数が保持されます。
//     const counterElement = document.getElementById('counter');
//     // HTMLの要素を取得するために、getElementById()メソッドを使ってcounterというIDを持つ要素を取得し、変数counterElementに格納します。
//     counterElement.textContent = `You are the\n${visitCount} visitor.。`;
// }

// // 訪問者数をHTMLの要素に表示します。textContentプロパティを使って訪問者数を表示します。テンプレートリテラルを使って文字列を組み立てています。
// window.onload = showVisitCount;


// Jquery
function showVisitCount() {
    //  showVisitCount()関数の定義を開始します。この関数は訪問回数をカウントして表示する機能を持ちます。
    let visitCount = 0;
    // 変数visitCountを宣言し、0で初期化します。この変数は訪問回数を格納するために使用されます。
    const storedVisitCount = localStorage.getItem('visitCount');

    // localStorageから"visitCount"というキーで保存されている訪問回数を取得します。getItem()メソッドを使用してローカルストレージから値を取得し、変数storedVisitCountに格納します。
    if (storedVisitCount) {
        visitCount = parseInt(storedVisitCount);
    }

    // storedVisitCountがnullまたはundefinedでない場合、つまりローカルストレージに訪問回数が保存されている場合は、parseInt()関数を使ってstoredVisitCountの値を整数に変換し、visitCountに代入します。
    for (let i = 0; i < 1; i++) {
        visitCount++;
    }

    // forループを使用して、訪問回数を1回増やします。現在のコードでは1回のみですが、必要に応じてループ回数を変更できます。
    localStorage.setItem('visitCount', visitCount);

    // localStorageに"visitCount"というキーで訪問回数を保存します。これにより、ページを閉じて再度訪れても訪問回数が保持されます。
    const counterElement = $('#counter');
    // HTMLの要素を取得するために、getElementById()メソッドを使ってcounterというIDを持つ要素を取得し、変数counterElementに格納します。
    counterElement.text(`You are the\n${visitCount} visitor.`);
}

// 訪問者数をHTMLの要素に表示します。textContentプロパティを使って訪問者数を表示します。テンプレートリテラルを使って文字列を組み立てています。
showVisitCount();

// popup

function setupPopup(buttonId, wrapperId, closeId) {
    const clickBtn = $(buttonId);
    const popupWrapper = $(wrapperId);
  
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
    setupPopup('#pin1', '#popup-wrapper1', 'close');
    setupPopup('#pin2', '#popup-wrapper2', 'close');
    setupPopup('#pin3', '#popup-wrapper3', 'close');
  });



// // JQuery
// function setupPopup(buttonId, wrapperId, closeId) {
//     // {: setupPopupという名前の関数を定義しています。この関数は3つの引数を受け取ります：buttonId、
//     // ：buttonId、wrapperId、closeId。それぞれは文字列で、HTML要素のIDを表します
//     const clickBtn = $('#buttonId');
//     // clickBtnという変数に、buttonIdで指定されたIDを持つHTML要素（ボタン）を取得して格納しています。
//     const popupWrapper = $('#pin2');
//     // という変数に、wrapperIdで指定されたIDを持つHTML要素（ポップアップのラッパー）を取得して格納しています。
  
//     clickBtn.addEventListener.$('#pin2').on('click',() => {
//       popupWrapper.style.toggle() = 'block';
//     });
//     // : ボタンがクリックされたときに実行するイベントリスナーを設定しています。ボタンがクリックされると、関数が呼び出されます。
//     // ポップアップのラッパー要素のdisplayプロパティを'block'に設定しています。これにより、ポップアップが表示されます
  
//     popupWrapper.addEventListener$('#pin2').on('click', e => {
//       // ポップアップのラッパー要素に対してクリックイベントリスナーを設定しています。
//       if (e.appendTo.id === wrapperId || e.appendTo.id === closeId) {
//         // イベントが発生した要素のID（e.target.id）をチェックしています。もしイベントがポップアップのラッパー要素をクリックした場合（wrapperId）または閉じるボタンをクリックした場合（closeId）、ポップアップを非表示にする処理が実行されます。
//         popupWrapper.style.$("#pin2").toggle(); 
//         // 'none';: ポップアップのラッパー要素のdisplayプロパティを'none'に設定しています。これにより、ポップアップが非表示になります。
//       }
//     });
//   }
  
//   setupPopup$('#pin1', '#popup-wrapper1', '#close');
//   setupPopup$('#pin2', '#popup-wrapper2', '#close');
//   setupPopup$('#pin3', '#popup-wrapper3', '#close');
  // setupPopup('pin1', 'popup-wrapper1', 'close');: setupPopup関数を呼び出して、IDが'pin1'のボタンをクリックしたときに、IDが'popup-wrapper1'のポップアップを表示し、IDが'close'の要素をクリックするとポップアップを閉じるように設定しています。
  
  // 同様に、setupPopup('pin2', 'popup-wrapper2', 'close');とsetupPopup('pin3', 'popup-wrapper3', 'close');を呼び出して、他のボタンとポップアップに対して同じ処理を行っています。
  

// JSコピー
// function setupPopup(buttonId, wrapperId, closeId) {
//         // {: setupPopupという名前の関数を定義しています。この関数は3つの引数を受け取ります：buttonId、
//         // ：buttonId、wrapperId、closeId。それぞれは文字列で、HTML要素のIDを表します
//         const clickBtn = document.getElementById(buttonId);
//         // clickBtnという変数に、buttonIdで指定されたIDを持つHTML要素（ボタン）を取得して格納しています。
//         const popupWrapper = document.getElementById(wrapperId);
//         // という変数に、wrapperIdで指定されたIDを持つHTML要素（ポップアップのラッパー）を取得して格納しています。
      
//         clickBtn.addEventListener('click', () => {
//           popupWrapper.style.display = 'block';
//         });
//         // : ボタンがクリックされたときに実行するイベントリスナーを設定しています。ボタンがクリックされると、関数が呼び出されます。
//         // ポップアップのラッパー要素のdisplayプロパティを'block'に設定しています。これにより、ポップアップが表示されます
      
//         popupWrapper.addEventListener('click', e => {
//           // ポップアップのラッパー要素に対してクリックイベントリスナーを設定しています。
//           if (e.target.id === wrapperId || e.target.id === closeId) {
//             // イベントが発生した要素のID（e.target.id）をチェックしています。もしイベントがポップアップのラッパー要素をクリックした場合（wrapperId）または閉じるボタンをクリックした場合（closeId）、ポップアップを非表示にする処理が実行されます。
//             popupWrapper.style.display = 'none';
//             // 'none';: ポップアップのラッパー要素のdisplayプロパティを'none'に設定しています。これにより、ポップアップが非表示になります。
//           }
//         });
//       }
      
//       setupPopup $('#pin1', '#popup-wrapper1', 'close');
//       setupPopup $('#pin2', '#popup-wrapper2', 'close');
//       setupPopup $('#pin3', '#popup-wrapper3', 'close');
//       // setupPopup('pin1', 'popup-wrapper1', 'close');: setupPopup関数を呼び出して、IDが'pin1'のボタンをクリックしたときに、IDが'popup-wrapper1'のポップアップを表示し、IDが'close'の要素をクリックするとポップアップを閉じるように設定しています。
      
//       // 同様に、setupPopup('pin2', 'popup-wrapper2', 'close');とsetupPopup('pin3', 'popup-wrapper3', 'close');を呼び出して、他のボタンとポップアップに対して同じ処理を行っています。
      