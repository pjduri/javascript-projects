// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {

    const takeOff = document.getElementById('takeoff');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    
    const rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = '0px';

    takeOff.addEventListener('click', () => {
        const confirmed = confirm('Are you sure the shuttle is ready for takeof?');
        if(confirmed) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            spaceShuttleHeight.innerHTML = 10000;
            shuttleBackground.style.backgroundColor = 'blue';
            rocket.style.bottom = '10px';
            rocket.style.left = '10px';
        }
    })









})