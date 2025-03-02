const messages = [
    "cậu chắc chứ?",
    "ê thật đáy à??",
    "cậu chọn cái này tht luôn?",
    "làm ơn đừng mà...",
    "đừng bấm cái này nữa!",
    "nếu cậu nói không, tớ sẽ buồn đấy...",
    "tớ sẽ rất buồn...",
    "tớ sẽ rất rất buồn...",
    "thôi được r tôi sẽ k nói gì nữa...",
    "đùa tí thoi, chọn có đc r đó bea ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
