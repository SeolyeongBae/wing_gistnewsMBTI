var slideIndex = 0;

mbtiData = [0, 0, 0];


function pushSlides(data) {
  var main = document.getElementsByClassName("main-section-inner");
  if (main.length>0){
    main[0].remove()
  }

  if (data){
    switch (data.id){
      case "1":
      mbtiData[0] += 1;
      break;

      case "2":
      mbtiData[1] += 1;
      break;

      case "3":
      mbtiData[2] += 1;
      break;

    }
  }

  slideIndex += 1;
  showSlides(slideIndex);

} 

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll('.section-inner');

  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.animation = "fadein 1s";
  slides[slideIndex-1].style.display = "flex";



}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function showResult(){
  var ret = indexOfMax(mbtiData);
  // location.href = "reporter.html";
  switch(ret){
    case 0:
    location.href="https://www.gistnews-mbti.com/common/reporter.html" ;
    break
    case 1:
    location.href="https://www.gistnews-mbti.com/common/designer.html" ;
    break
    case 2:
    location.href="https://www.gistnews-mbti.com/common/editor.html" ;
    break

  }

}