function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error'); // error class delete
  errorOutput.textContent = '';
}

function savePlayerConfig(event) {
  event.preventDefault(); // 페이지 로드되지 않음
  const formData = new FormData(event.target); // 객체 인스턴스화
  const enteredPlayername = formData.get('playername').trim(); // 입력 데이터, trim() 공백제거
  if (!enteredPlayername) { // playername이 공백인지 확인
    event.target.firstElementChild.classList.add('error'); // form div id에 error 추가
    errorOutput.textContent = 'Please enter a valid name!';
    return;
  }
}