let root = document.getElementById("body");

let heading = document.createElement("h1");
let txt = document.createTextNode("Freelancer Forum");
heading.appendChild(txt);
root.appendChild(heading);

let avg = document.createElement("p");
txt = document.createTextNode("The average starting price is $");
avg.appendChild(txt);
root.appendChild(avg);

let price = document.createElement("span");
price.classList = "avg";
avg.appendChild(price);
root.appendChild(avg);

let h2 = document.createElement("h2");
txt = document.createTextNode("Available Freelancers");
h2.appendChild(txt);
root.appendChild(h2);

let table = document.createElement("table");
table.classList = "table";
let tr = document.createElement("tr");
let td1 = document.createElement("td");
td1.classList = "td1";
txt = document.createTextNode("Name");
td1.appendChild(txt);
tr.appendChild(td1);
let td2 = document.createElement("td");
td2.classList = "td2";
txt = document.createTextNode("Job");
td2.appendChild(txt);
tr.appendChild(td2);
let td3 = document.createElement("td");
td3.classList = "td3";
txt = document.createTextNode("Starting Price");
td3.appendChild(txt);
tr.appendChild(td3);
table.appendChild(tr);
root.appendChild(table);

let freelaners = [
  { name: "Alice", job: "Writer", price: 30 },
  { name: "Bob", job: "Teacher", price: 50 },
  { name: "Carol", job: "Programmer", price: 70 },
];

let sum = 0;

function updateTable(start = 0) {
  for (let i = start; i < freelaners.length; i++) {
    let table = document.querySelector(".table");
    let row = table.insertRow(-1);

    let c1 = row.insertCell(0);
    let txt = document.createTextNode(freelaners[i].name);
    c1.appendChild(txt);

    let c2 = row.insertCell(1);
    txt = document.createTextNode(freelaners[i].job);
    c2.appendChild(txt);

    let c3 = row.insertCell(2);
    txt = document.createTextNode(`$${freelaners[i].price}`);
    c3.appendChild(txt);

    sum += freelaners[i].price;
  }
  document.querySelector(".avg").innerHTML = Math.round(
    sum / freelaners.length
  );
}

let randNames = ["Andrew", "Peter", "Amy", "Cindy", "James"];
let randJobs = ["Chef", "Waiter", "Cook", "Janitor", "Author", "Security"];

function rand() {
  let obj = {};
  obj.name = randNames[Math.floor(Math.random() * randNames.length)];
  obj.job = randJobs[Math.floor(Math.random() * randJobs.length)];
  obj.price = Math.floor(Math.random() * 100);
  freelaners.push(obj);
}

updateTable();

function update() {
  rand();
  updateTable(freelaners.length - 1);
}

let run = 0;
let count = setInterval(() => {
  update();
  run += 1;
  if (run === 50) clearInterval(count);
}, 5000);
