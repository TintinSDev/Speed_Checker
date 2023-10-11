document.addEventListener('DOMContentLoaded', function () {
    const speedOfCar = document.getElementById('speedOfCar');
    const checkSpeedBtn = document.getElementById('checkSpeedBtn');
    const result = document.getElementById('result');

    checkSpeedBtn.addEventListener('click', function () {
        const speed = parseInt(speedOfCar.value);
        checkSpeed(speed);
    });

    function checkSpeed(speed) {
        const speedLimit = 70;
        const SpeedOfCar = 5;
if (speed <= speedLimit) {
            result.textContent = "OK";
        } else {
            const points = Math.floor((speed - speedLimit) / SpeedOfCar);
            
            if (points >= 12) {
                result.textContent = `Points: ${points}. License suspended.`;
            } else {
                result.textContent = `Points: ${points}`;
            }
        }
    }
});
