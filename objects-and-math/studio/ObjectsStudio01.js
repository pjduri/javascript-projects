// Code your selectRandomEntry function here:
function selectRandomEntry(crewArray) {
  let randomIdx = Math.floor(Math.random() * crewArray.length);
  return crewArray[randomIdx];
}

// Code your buildCrewArray function here:
function buildCrewArray(idsArr, candidatesArr) {
  const crewArray = [];
  for (let i = 0; i < candidatesArr.length; i++) {
    if (idsArr.includes(candidatesArr[i].astronautID)) {
      crewArray.push(candidatesArr[i]);
    }
  }
  return crewArray;
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let chosenIds = [];
while (chosenIds.length < 3) {
  let selectedId = selectRandomEntry(idNumbers);
  if (!chosenIds.includes(selectedId)) {
    chosenIds.push(selectedId);
  }
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
}
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
}
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
}
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
}
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
}
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
}

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let chosenCrew = buildCrewArray(chosenIds, animals);
console.log(`${chosenCrew[0].name}, ${chosenCrew[1].name}, and ${chosenCrew[2].name} are going to space!`);