// user input&output
function cafe() {
  let greeting = "Hello!";
  built 
  console.log(typeof(greeting)); 

  const now = new Date();
  console.log(typeof(now)); 

  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
      greeting = "Good Morning!";
  } else if (hour >= 12 && hour < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }

  while (true) {
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
// 訪問回数のカウントと表示:
function showVisitCount() {
  // showVisitCount()関数の定義を開始します。この関数は訪問回数をカウントして表示する機能を持ちます。
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
  const counterElement = document.getElementById('counter');
  // HTMLの要素を取得するために、getElementById()メソッドを使ってcounterというIDを持つ要素を取得し、変数counterElementに格納します。
  counterElement.textContent = `You are the\n${visitCount} visitor.。`;
}

// 訪問者数をHTMLの要素に表示します。textContentプロパティを使って訪問者数を表示します。テンプレートリテラルを使って文字列を組み立てています。
window.onload = showVisitCount;