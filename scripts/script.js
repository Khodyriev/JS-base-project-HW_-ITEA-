// Функция для получения имен сотрудников от пользователя
const positions = [
  'Junior developer',
  'Middle developer',
  'Senior developer',
  'Junior QA',
  'Middle QA',
  'Senior QA',
  'Project manager',
];

function getNames() {
  const names = [];
  for (let i = 0; i < positions.length; i++) {
    const name = prompt(`Введите имя для должности "${positions[i]}"`);
    while (!name) {
      alert('Имя не может быть пустым!');
      name = prompt(`Введите имя для должности "${positions[i]}"`);
    }
    names.push(name);
  }
  return names;
}

// Функция для создания объекта team
function createTeam(positions, names) {
  if (!names.length) {
    alert('You must execute Subtask 1: Names are empty!');
  }
  const team = {};
  for (let i = 0; i < positions.length; i++) {
    team[`employee${i + 1}`] = {
      name: names[i],
      position: positions[i],
    };
  }
  return team;
}

// Функция для установки зарплат сотрудникам
function setSalary(team) {
  for (let key in team) {
    let salary;
    if (team[key].position.indexOf('Junior') !== -1) {
      salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    } else if (team[key].position.indexOf('Middle') !== -1) {
      salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    } else if (team[key].position.indexOf('Senior') !== -1) {
      salary = Math.floor(Math.random() * (3000 - 2500 + 1) + 2500);
    } else {
      salary = Math.floor(Math.random() * (4500 - 4000 + 1) + 4000);
    }
    team[key].salary = salary;
  }
}

// Функция для добавления метода tellAboutYourself() каждому сотруднику
function addTellAboutYourselfMethod(team) {
  for (let key in team) {
    team[key].tellAboutYourself = function () {
      const infoAbout = `Меня зовут ${this.name} и я - ${this.position}. Зарплата - ${this.salary}$.`;
      console.log(infoAbout);
      return infoAbout;
    };
  }
}

// Функция для добавления метода showTeam() объекту team
function addShowTeamMethod(team) {
  team.showTeam = function () {
    for (let key in team) {
      if (key == 'showTeam') {
        break;
      }
      console.log(
        `${team[key].name} - ${team[key].position}. Зарплата - ${team[key].salary}$.`
      );
    }
  };
}

let names;
let team;

document.getElementById('but1').addEventListener('click', () => {
  names = getNames();
  document.getElementById('res1').innerHTML = `<code>${JSON.stringify(
    names,
    null,
    '<br>'
  )}</code>`;
  document.getElementById('res1').setAttribute('style', 'font-size: 14px;');
});

document.getElementById('but2').addEventListener('click', () => {
  team = createTeam(positions, names);
  document.getElementById('res2').innerHTML = `<code>${JSON.stringify(
    team,
    null,
    '<br>'
  )}</code>`;
  document
    .getElementById('res2')
    .setAttribute('style', 'font-size: 10px; line-height: 10px;');
});

document.getElementById('but3').addEventListener('click', () => {
  setSalary(team);
  document.getElementById('res3').innerHTML = `<code>${JSON.stringify(
    team,
    null,
    '<br>'
  )}</code>`;
  document
    .getElementById('res3')
    .setAttribute('style', 'font-size: 10px; line-height: 10px;');
});

document.getElementById('but4').addEventListener('click', () => {
  addTellAboutYourselfMethod(team);
  document.getElementById(
    'res4'
  ).innerHTML = `Example of one result:<br>${team.employee1.tellAboutYourself()}`;
});

document.getElementById('but5').addEventListener('click', () => {
  addShowTeamMethod(team);
  team.showTeam();
  document.getElementById('res5').innerHTML = `The result is in console`;
});
