// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {

    const shuttleBackground = document.getElementById('shuttleBackground')
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight') 
    const flightStatus = document.getElementById('flightStatus')   
    const takeOff = document.getElementById('takeoff')
    const landing = document.getElementById('landing')
    const missionAbort = document.getElementById('missionAbort')
    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const up = document.getElementById('up')
    const down = document.getElementById('down')
    
    const rocket = document.getElementById('rocket')
    rocket.style.position = 'absolute'
    rocket.style.bottom = '0px'
    rocket.style.left = '0px'

    takeOff.addEventListener('click', () => {
        const isReady = confirm('Are you sure the shuttle is ready for takeoff?')
        if (isReady) {
            shuttleBackground.style.background = 'blue'
            spaceShuttleHeight.innerHTML = 10000
            flightStatus.innerHTML = 'Shuttle in flight.'
            rocket.style.bottom = '10px'
            rocket.style.left = '10px'
        }
    })

    landing.addEventListener('click', () => {
        alert('The shuttle is landing. Landing gear engaged.')
        flightStatus.innerHTML = 'The shuttle has landed.'
        shuttleBackground.style.background = 'green'
        spaceShuttleHeight.innerHTML = 0
        rocket.style.bottom = '0px'
        rocket.style.left = '0px'
    })

    missionAbort.addEventListener('click', () => {
        const confirmAbort = confirm('Confirm that you want to abort the mission')
        if (confirmAbort) {
            flightStatus.innerHTML = 'Mission Aborted'
            shuttleBackground.style.background = 'green'
            spaceShuttleHeight.innerHTML = 0
            rocket.style.bottom = '0px'
            rocket.style.left = '0px'
        }
    })

    up.addEventListener('click', () => {
        const bottomPX = parseInt(rocket.style.bottom)
        const shuttleHeight = parseInt(spaceShuttleHeight.innerHTML)
        if (parseInt(rocket.style.bottom) < 250 && flightStatus.innerHTML === 'Shuttle in flight.') {
            rocket.style.bottom = `${bottomPX + 10}px`
        }
        spaceShuttleHeight.innerHTML = shuttleHeight + 10000
    })
    
    down.addEventListener('click', () => {
        const bottomPX = parseInt(rocket.style.bottom)
        const shuttleHeight = parseInt(spaceShuttleHeight.innerHTML)
        if (flightStatus.innerHTML === 'Shuttle in flight.') {
            if (bottomPX > 10 && shuttleHeight > 10000) {
                rocket.style.bottom = `${bottomPX - 10}px`
                spaceShuttleHeight.innerHTML = shuttleHeight - 10000
            }
        }
    })
    
    left.addEventListener('click', () => {
        const leftPX = parseInt(rocket.style.left)
        if (leftPX > 10 && flightStatus.innerHTML === 'Shuttle in flight.') {
            rocket.style.left = `${leftPX - 10}px`
        }
    })

    right.addEventListener('click', () => {
        const leftPX = parseInt(rocket.style.left)
        if (leftPX < 460 && flightStatus.innerHTML === 'Shuttle in flight.') {
            rocket.style.left = `${leftPX + 10}px`
        }
    })

})