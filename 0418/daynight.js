function night() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  let link = document.querySelectorAll('a');
  for (let i = 0; i < link.length; i++) {
    link[i].style.color = 'white';
  }
}

export function day() {
  // 아니라면 아래 코드가 실행된다.
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  // 이 버튼의 value값을 night로 변경한다.1
  let link = document.querySelectorAll('a');
  for (let i = 0; i < link.length; i++) {
    link[i].style.color = 'black';
  }
}

export function dayNight(mode) {
  if (mode === 'night') {
    night();
  } else {
    day();
  }
}
