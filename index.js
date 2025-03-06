const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  ];

  const newNames = ["John", "Timmy", "Bobby", "Jimmy", "Drake", "Emma", "Alyssa", "Emily", "Liz"]
  const newPrices = [33, 55, 16, 68, 92, 47, 11, 53, 49]
  const newOccupations = ["driver", "chef", "engineer", "programmer", "welder", "electrician", "landscaper"]
  
  const maxFreelancers = 25;

  let totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);

  function avgPrice() {
    return (totalPrice / freelancers.length).toFixed(2);
  }

function addFreelancer() {
    // Get random name from newNames[]
    const newName = newNames[Math.floor(Math.random() * newNames.length)];

    // Get random price from newPrices[]
    const newPrice = newPrices[Math.floor(Math.random() * newPrices.length)];
    
    // Get random occupation from newOccupation[]
    const newOccupation = newOccupations[Math.floor(Math.random() * newOccupations.length)];

    const randomFreelancer = { name: newName, price: newPrice, occupation: newOccupation}

    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }
    freelancers.push(randomFreelancer);
    totalPrice += randomFreelancer.price;
}

function render() {
    const freelancerList = document.querySelector("#freelancerdata");
    const freelancerElements = freelancers.map((freelancer) => {
        const freelancerElement = document.createElement("li");
        freelancerElement.textContent = `Name: ${freelancer.name} --- Price: $${freelancer.price} --- Occupation: ${freelancer.occupation}`;
        return freelancerElement;
    });
    freelancerList.replaceChildren(...freelancerElements);

    const averagePrice = document.querySelector("#avgprice");
    if (averagePrice) {
        averagePrice.textContent = `The Average Price is: $${avgPrice()}`;
    }
}

const addFreelancerIntervalId = setInterval(() => {
    addFreelancer();
    render();
}, 5000);

render();
