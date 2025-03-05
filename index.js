const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  const maxFreelancers = 25;

  let totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);

  function avgPrice() {
    return (totalPrice / freelancers.length).toFixed(2);
  }

function addFreelancer() {
    const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }
    freelancers.push(freelancer);
    totalPrice += freelancer.price;
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
}, 2000);

render();
