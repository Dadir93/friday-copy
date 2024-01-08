document.addEventListener('DOMContentLoaded', () => {
  const animalList = document.querySelector('.animal-list');
  const detailsContainer = document.querySelector('.details-container');
  const voteBtn = document.querySelector('.vote-btn');
  const resetBtn = document.querySelector('.reset-btn');
  const totalVotesDisplay = document.querySelector('.total-votes');

  const animals = [
    {
      id: 1,
      name: "Cheetah",
      image: "cheetah.jpeg",
      votes: 0
    },
    {
      id: 2,
      name: "Lion",
      image: "lion.jpeg",
      votes: 0
    },
    {
      id: 3,
      name: "Tiger",
      image: "tiger.jpeg",
      votes: 0
    },
    {
      id: 4,
      name: "Eagle",
      image: "eagle.jpeg",
      votes: 0
    },
    {
      id: 5,
      name: "Dolphin",
      image: "dolphin.jpeg",
      votes: 0
    },
    {
      id: 6,
      name: "Mickey Mouse",
      image: "mickey.jpeg",
      votes: 0
    },  ];

  function displayAnimalDetails(animalId) {
    const selectedAnimal = animals.find(animal => animal.id === animalId);
    if (selectedAnimal) {
      detailsContainer.innerHTML = `
        <h3>${selectedAnimal.name}</h3>
        <img src="${selectedAnimal.image}" alt="${selectedAnimal.name}">
        <p>Votes: ${selectedAnimal.votes}</p>
      `;
    } else {
      console.error('Animal not found');
    }
  }

  function displayTotalVotes() {
    const totalVotes = animals.reduce((acc, animal) => acc + animal.votes, 0);
    totalVotesDisplay.textContent = `Total Votes: ${totalVotes}`;
  }

  animals.forEach(animal => {
    const listItem = document.createElement('li');
    listItem.textContent = animal.name;
    listItem.addEventListener('click', () => {
      displayAnimalDetails(animal.id);
      voteBtn.onclick = () => {
        animal.votes++;
        displayAnimalDetails(animal.id);
        displayTotalVotes();
      };
    });
    animalList.appendChild(listItem);
  });

  resetBtn.addEventListener('click', () => {
    animals.forEach(animal => {
      animal.votes = 0;
    });
    displayTotalVotes();
    displayAnimalDetails(1);
    voteBtn.onclick = null;
  });

  displayTotalVotes();
  displayAnimalDetails(1);
});
