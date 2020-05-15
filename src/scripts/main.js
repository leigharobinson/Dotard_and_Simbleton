import businesses from "./customers.js";

console.log("Hello, it's working!");
const outElThree = document.querySelector("#output3");
outElThree.innerHTML += "<h1>Purchasing Agents</h1>";
//HERE I INDIVIDUALLY TARGETED AND POSTED EACH DATA VAUE SEPERATLY TO THE DOM
// const outElfour = document.querySelector("#output4")
// const outElfive = document.querySelector("#output5")
// outElThree.innerHTML += "<h1>Purchasing Agents</h1>";
// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// const agents = businesses.map(business => {
//     return business.purchasingAgent
// })
// const companies = businesses.map(business => {
//   return business.companyName
// })
// const phoneNumbers = businesses.map(business => {
//   return business.phoneWork
// })
// console.table(agents)
// console.table(companies);
// console.table(phoneNumbers);

// agents.forEach(agent => {
//   outElThree.innerHTML += `
//   <h2>${agent.nameFirst} ${agent.nameLast}</h2>`
// ;outElThree.innerHTML += "<hr/>"
// })

// companies.forEach(company => {
//   outElfour.innerHTML += `
//   <h2>${company}</h2>`
// ;outElfour.innerHTML += "<hr/>"
// })

// phoneNumbers.forEach(phoneNumber=> {
//   outElfive.innerHTML += `
//   <h2>${phoneNumber}</h2>`
// ;outElfive.innerHTML += "<hr/>"
// })
//_________________________________________________________________//
//PURCHASING AGENTS//
//THIS IS WHERE I DYNAMICALLY BUILT FUNCTIONS TO RENDER THE NEW OBJECT TO THE DOM USING .MAP ARRAY METHODS
//This is what targets the data
const resultObjs = businesses.map((newObj) => ({
  fullName: Object.values(newObj.purchasingAgent).reverse().join(" "),
  company: newObj.companyName,
  phoneNumber: newObj.phoneWork,
}));
// console.log("Result",resultObjs);
//This is what builds it to the DOM
const makeNewObjComponent = (newObj) => {
  return `
  <div>
      <h3>${newObj.fullName}</h3>
      <section>${newObj.company}</section>
      <p>${newObj.phoneNumber}</p>
      <hr/>
  </div> 
  `;
};
//THis is rendering it to the DOM
const renderResultObjs = (newObj) => {
  // outElThree.innerHTML = "";
  for (let i = 0; i < newObj.length; i++) {
    outElThree.innerHTML += makeNewObjComponent(newObj[i]);
  }
};

// This is acutually Pushing resultsObjs to the DOM
renderResultObjs(resultObjs);

//_________________________________________________________________//
//NEW YORK BUSINESSES//
const outElone = document.querySelector("#output1");
outElone.innerHTML += "<h1>New York Businesses</h1>";
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter((business) => {
  let inNewYork = false;
  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }
  console.log(inNewYork);
  return inNewYork;
});
//   console.log(newYorkBusinesses)

newYorkBusinesses.forEach((business) => {
  outElone.innerHTML += `  
    <h3>Company Name: ${business.companyName}</h3>
    <section>
    home: ${business.addressFullStreet}
    </section>
    <section>
    ${business.addressCity}
    ${business[("addressStateCode", "addressZipCode")]}
    </section>
  `;
  outElone.innerHTML += "<hr/>";
});

//_________________________________________________________________//
//MANUFACTURING BUSINESSES//
const manufacturingBusinesses = businesses.filter((business) => {
  let inManufacturingIndustry = false;

  if (business.companyIndustry === "Manufacturing") {
    inManufacturingIndustry = true;
  }
  return inManufacturingIndustry;
});

const outEltwo = document.querySelector("#output2");
outEltwo.innerHTML = "<h1>Manufacturing Businesses</h1>";

manufacturingBusinesses.forEach((business) => {
  outEltwo.innerHTML += `  
    <h3>Company Name: ${business.companyName}</h3>
    <section>
    home: ${business.addressFullStreet}
    </section>
    <section>
    ${business.addressCity}
    ${business[("addressStateCode", "addressZipCode")]}
    </section>
  `;
  outEltwo.innerHTML += "<hr/>";
});
//_________________________________________________________________//
//ACTIVE BUSINESSES//

const outEl = document.querySelector("#output");
outEl.innerHTML = "<h1>Active Businesses</h1>";

businesses.forEach((business) => {
  outEl.innerHTML += `
    <h3>Company Name: ${business.companyName}</h3>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity}
        ${business[("addressStateCode", "addressZipCode")]}
    </section>
  `;
  outEl.innerHTML += "<hr/>";
});

// // Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }

//     return inNewYork
//   })
