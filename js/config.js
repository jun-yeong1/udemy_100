function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
}

function savePlayerConfig(event) {
  event.preventDefault(); // 페이지 로드되지 않음
  const formData = new FormData(event.target); // 객체 인스턴스화
  const enteredPlayername = formData.get('playername').trim(); // 입력 데이터, trim() 공백제거
  if (!enteredPlayername) { // playername이 공백인지 확인
    alert
  }
}