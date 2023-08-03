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
  */
