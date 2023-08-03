$(document).ready(function () {
  const img = ["imgs/cafe2.jpg", "imgs/cafe3.jpg", "imgs/cafe4.jpg", "imgs/cafe5.jpg"];
  const changePic = $('#changePic');
  let count = 0;

  function picChange() {
    changePic.attr('src', img[count]);
    count++;
    if (count === img.length) {
      count = 0;
    }
  }

  setInterval(picChange, 5000);
});



class ImageCarousel {
  constructor(list, imgElement, rightArrow, leftArrow, pElement) {
    this.list = list;
    this.imgElement = imgElement;
    this.rightArrow = rightArrow;
    this.leftArrow = leftArrow;
    this.pElement = pElement;
    this.imgN = 0;

    this.setImage();

    $(document).ready(() => {
      this.setImage();
    });

    this.rightArrow.on('click', () => {
      this.imgN -= 1;
      if (this.imgN < 0) {
        this.imgN = this.list.length - 1;
      }
      this.setImage();
    });

    this.leftArrow.on('click', () => {
      this.imgN += 1;
      if (this.imgN >= this.list.length) {
        this.imgN = 0;
      }
      this.setImage();
    });
  }

  setImage() {
    this.imgElement.attr('src', this.list[this.imgN]);
    this.pElement.text(`${this.imgN + 1} / ${this.list.length}`);
  }
}

$(document).ready(function () {
  const list1 = ['imgs/01.jpg', 'imgs/02.jpg', 'imgs/03.jpg'];
  const carousel1 = new ImageCarousel(list1, $('#main-pic1'), $('#next1'), $('#prev1'), $('#photo1'));

  const list2 = ['imgs/04.jpg', 'imgs/05.jpg', 'imgs/06.jpg'];
  const carousel2 = new ImageCarousel(list2, $('#main-pic2'), $('#next2'), $('#prev2'), $('#photo2'));

  const list3 = ['imgs/07.jpg', 'imgs/08.jpg', 'imgs/09.jpg'];
  const carousel3 = new ImageCarousel(list3, $('#main-pic3'), $('#next3'), $('#prev3'), $('#photo3'));
});

/*
// JavaScript
class ImageCarousel {
  constructor(list, imgElement, rightArrow, leftArrow, pElement) {
    this.list = list;
    this.imgElement = imgElement;
    this.rightArrow = rightArrow;
    this.leftArrow = leftArrow;
    this.pElement = pElement;
    this.imgN = 0;

    this.setImage();

    document.addEventListener('DOMContentLoaded', () => {
      this.setImage();
    });

    this.rightArrow.addEventListener('click', () => {
      this.imgN -= 1;
      if (this.imgN < 0) {
        this.imgN = this.list.length - 1;
      }
      this.setImage();
    });

    this.leftArrow.addEventListener('click', () => {
      this.imgN += 1;
      if (this.imgN >= this.list.length) {
        this.imgN = 0;
      }
      this.setImage();
    });
  }

  setImage() {
    this.imgElement.src = this.list[this.imgN];
    this.pElement.textContent = `${this.imgN + 1} / ${this.list.length}`;
  }
}

// カルーセル1
const list1 = ['imgs/01.jpg', 'imgs/02.jpg', 'imgs/03.jpg'];
const carousel1 = new ImageCarousel(list1,
  document.getElementById('main-pic1'),
  document.getElementById('prev1'),
  document.getElementById('next1'),
  document.getElementById('photo1'));

// カルーセル2
const list2 = ['imgs/04.jpg', 'imgs/05.jpg', 'imgs/06.jpg'];
const carousel2 = new ImageCarousel(list2,
  document.getElementById('main-pic2'),
  document.getElementById('prev2'),
  document.getElementById('next2'),
  document.getElementById('photo2'));

// カルーセル3
const list3 = ['imgs/07.jpg', 'imgs/08.jpg', 'imgs/09.jpg'];
const carousel3 = new ImageCarousel(list3,
  document.getElementById('main-pic3'),
  document.getElementById('prev3'),
  document.getElementById('next3'),
  document.getElementById('photo3'));


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
*/