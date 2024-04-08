const circle = document.querySelector(".circle")
const svg1Box = document.querySelector(".svg1-box")
const svg2Box = document.querySelector(".svg2-box")
const svg3Box = document.querySelector(".svg3-box")
const svg4Box = document.querySelector(".svg4-box")
const title1 = document.querySelector(".title1")
const title2 = document.querySelector(".title2")
const main = document.querySelector(".main")

// circle大小
let circleSize = 1
// rotate转动
let svgBoxRotate = 0
// left right标题移动
let titleMove = 0

windowAddMouseWheel();
function windowAddMouseWheel() {
  var scrollFunc = function (e) {
    e = e || window.event;

    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta > 0) { //当滑轮向滚动时
        let scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTopValue = parseInt(scrollTopValue)
        svgBoxRotate -= 3
        // 主体消失
        if (circleSize <= 22.40 && svgBoxRotate <= 234 && scrollTopValue === 0 && getComputedStyle(main).display === "block") {
          main.style.display = "none"
          circleSize = 22.40
          svgBoxRotate = 234
          titleMove = 2160
        }

        titleMove -= 30

        if (circleSize <= 3.40) {
          circleSize -= 0.1
        } else {
          circleSize -= 0.4
        }

        if (circleSize <= 1 || svgBoxRotate <= 0) {
          circleSize = 1
          svgBoxRotate = 0
          titleMove = 0
        }


        console.log("触发滑轮向上滚动", circleSize.toFixed(2), "....." , svgBoxRotate, "....." , scrollTopValue);
        circle.style.transform = `scale(${circleSize.toFixed(2)})`
        svg1Box.style.transform = `rotate(-${svgBoxRotate}deg)`
        svg2Box.style.transform = `rotate(${svgBoxRotate}deg)`
        svg3Box.style.transform = `rotate(-${svgBoxRotate}deg)`
        svg4Box.style.transform = `rotate(-${svgBoxRotate}deg)`
        title1.style.transform = `translateX(${titleMove}px)`
        title2.style.transform = `translateX(-${titleMove}px)`


      }
      if (e.wheelDelta < 0) { //当滑轮向滚动时
        titleMove += 30

        if (circleSize <= 3.40) {
          circleSize += 0.1
        } else {
          circleSize += 0.4
        }
        svgBoxRotate += 3
        titleMove += 30

        // 屏幕占满
        if (circleSize >= 22.40 || svgBoxRotate >= 234) {
          circleSize = 22.40
          svgBoxRotate = 234
          titleMove = 2160
          main.style.display = "block"
        }

        // console.log("触发滑轮向下滚动", circleSize.toFixed(2), "....." , svgBoxRotate, "....." , titleMove);
        circle.style.transform = `scale(${circleSize.toFixed(2)})`
        svg1Box.style.transform = `rotate(${svgBoxRotate}deg)`
        svg2Box.style.transform = `rotate(-${svgBoxRotate}deg)`
        svg3Box.style.transform = `rotate(${svgBoxRotate}deg)`
        svg4Box.style.transform = `rotate(-${svgBoxRotate}deg)`
        title1.style.transform = `translateX(-${titleMove}px)`
        title2.style.transform = `translateX(${titleMove}px)`
      }
    } else if (e.detail) {  //Firefox滑轮事件
      if (e.detail > 0) { //当滑轮向滚动时
        console.log("滑轮向上滚动");
      }
      if (e.detail < 0) { //当滑轮向滚动时
        console.log("滑轮向下滚动");
      }
    }
  };
  //给页面绑定滑轮滚动事件
  if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
  }
  //其他浏览器直接绑定滚动事件
  window.onmousewheel = document.onmousewheel = scrollFunc;
}

/* 第二个页面 */
const cardTitle1 = document.querySelector(".card-title1")
const cardTitle2 = document.querySelector(".card-title2")
const cardTitle3 = document.querySelector(".card-title3")
const cardTitle4 = document.querySelector(".card-title4")
const card1 = document.querySelector("#card1")
const card2 = document.querySelector("#card2")
const card3 = document.querySelector("#card3")
const card4 = document.querySelector("#card4")

window.onscroll = function () {
  let scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop;
  scrollTopValue = parseInt(scrollTopValue)
  // console.log(scrollTopValue);

  // 第一个显示
  if ( scrollTopValue > 0 ) {
    cardTitle1.style.opacity = 1
    cardTitle1.style.top = -6 + "px"
    cardTitle1.style.right = 209 + "px"
    cardTitle1.style.fontSize = 150 + "px"
  }

  if ( scrollTopValue > 300 ) {
    card1.style.opacity = 1
    card1.style.top = 0 + "px"
    cardTitle1.style.top = 520 + "px"
    cardTitle1.style.right = 80 + "px"
    cardTitle1.style.fontSize = 65 + "px"
  }
  // 第二
  if ( scrollTopValue > 1162 ) {
    cardTitle2.style.opacity = 1
    cardTitle2.style.top = -126 + "px"
    cardTitle2.style.right = 128 + "px"
    cardTitle2.style.fontSize = 130 + "px"
  }

  if ( scrollTopValue > 1632 ) {
    card2.style.opacity = 1
    card2.style.top = 0 + "px"
    cardTitle2.style.top = 520 + "px"
    cardTitle2.style.right = 80 + "px"
    cardTitle2.style.fontSize = 65 + "px"
  }
  // 第三个
  if ( scrollTopValue > 2700 ) {
    cardTitle3.style.opacity = 1
    cardTitle3.style.top = -6 + "px"
    cardTitle3.style.right = 209 + "px"
    cardTitle3.style.fontSize = 150 + "px"
  }

  if ( scrollTopValue > 3100 ) {
    card3.style.opacity = 1
    card3.style.top = 0 + "px"
    cardTitle3.style.top = 360 + "px"
    cardTitle3.style.right = 80 + "px"
    cardTitle3.style.fontSize = 65 + "px"
  }
  // 第四个
  if ( scrollTopValue > 3954 ) {
    cardTitle4.style.opacity = 1
    cardTitle4.style.top = -6 + "px"
    cardTitle4.style.right = 100 + "px"
    cardTitle4.style.fontSize = 140 + "px"
  }

  if ( scrollTopValue > 4461 ) {
    card4.style.opacity = 1
    card4.style.top = 0 + "px"
    cardTitle4.style.top = 223 + "px"
    cardTitle4.style.right = 80 + "px"
    cardTitle4.style.fontSize = 65 + "px"
  }
}
