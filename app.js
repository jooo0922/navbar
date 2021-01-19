'use strict';
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
  // console.log(links.classList); 
  // classList는 해당 DOM요소에 존재하는 클래스 목록들을 보여주는 기능도 있음.
  // console.log(links.classList.contains('random')); 얘는 false를 반환해서 콘솔창에 보여줌.
  // console.log(links.classList.contains('links')); 얘는 true를 반환하겠지?

  // if(links.classList.contains('show-links')){
  //   links.classList.remove('show-links');
  // } else{
  //   links.classList.add('show-links');
  // }
  // 이 방법은 contains, remove, add 세 가지 메소드를 사용하는 방법. 너무 길다.
  // toggle 메소드는 이 세가지를 한 줄로 처리할 수 있게 해주는 메소드! if문도 쓸 필요가 없음.
  links.classList.toggle('show-links');
});