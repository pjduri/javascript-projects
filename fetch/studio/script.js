//TODO: Add Your Code Below
window.addEventListener('load', async () => {

    const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    const data = await response.json()
    const container = document.getElementById('container')
    const astronauts = document.getElementById('astronauts')
    
    data.sort((a, b) => b.hoursInSpace - a.hoursInSpace)
    astronauts.innerHTML += `: ${data.length}`

    let color

    for (let i=0; i<data.length; i++) {
        if (data[i].active) {
            color = 'green'
        }
        container.innerHTML +=
        `<div class="astronaut">
            <h3>${data[i].firstName} ${data[i].lastName}</h3>
            <ul>
            <li>Hours in space: ${data[i].hoursInSpace}</li>
            <li style='color: ${color}'>Active: ${data[i].active}</li>
            <li>Skills: ${data[i].skills.join(', ')}</li>
            </ul>
            <img class="avatar" src="${data[i].picture}">
        </div>`
    }

})