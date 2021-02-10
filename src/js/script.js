document.getElementById('clickButton').addEventListener('click', function () {
    const clickedButton = document.getElementById('clickButton');
    clickedButton.style.display = 'inline-block';
    const clickContactUs = document.getElementById('messageBy');
    clickContactUs.style.display = 'block';
})
document.getElementById('crossButton').addEventListener('click', function () {
    const clickCrossButton = document.getElementById('messageBy');
    clickCrossButton.style.display = 'none';
})