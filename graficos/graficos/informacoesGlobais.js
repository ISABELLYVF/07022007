const url = 'https://raw.githubusercontent.com/ISABELLYVF/07022007/main/graficos/API/dados-globais.json'

async function visualizeGlobalInformation() {
    const res = await fetch(url);
    const data = await res.json();
    const connectedPeople = (data.total_pessoas_conectadas / 1e9);
    const peopleInTheWorld = (data.total_pessoas_mundo / 1e9);
    const hours = parseInt(data.tempo_medio);
    const minutes = Math.round((data.tempo_medio - hours) * 100);
    const connectedPercentage = ((connectedPeople / peopleInTheWorld) * 100).toFixed(2);

    const paragraph = document.createElement('p');
    paragraph.classList.add('graphs-container__text');
    paragraph.innerHTML = `Did you know that the world has <span>${peopleInTheWorld} billion</span> people and that approximately <span>${connectedPeople} billion</span> are connected to some social network and spend an average of <span>${hours} hours</span> and <span>${minutes} minutes</span> connected.<br>This means that approximately <span>${connectedPercentage}%</span> of people are connected to some social network.`;

    const container = document.getElementById('graphs-container');
    container.appendChild(paragraph);
}

visualizeGlobalInformation();
