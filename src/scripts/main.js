import businesses from "./customers.js";
import newYorkBusinesses from "./NewYorkBusinesses.js";
import manufacturingBusinesses from "./manufacturingBusinesses.js";
import purchasingAgentsObj from "./purchasingAgents.js";

console.log("Hello, it's working!");
const outElTop = document.querySelector("#outputTop");
// outElTop.innerHTML = "<h1>Businesses Search Results</h1>";

//_________________________________________________________________//
document
  .querySelector("#companySearch")
  .addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
      const foundBusiness = businesses.find((business) =>
        business.companyName.includes(keyPressEvent.target.value)
      );
      outElTop.innerHTML += `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <div> $${foundBusiness.orders[4]} </div>
                <section>
                ${foundBusiness.addressFullStreet}
                
                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
                <hr/>
            `;
    }
  });

//_________________________________________________________________//
function outputShow() {
  document.getElementById("output").style.display = "block";
}
//_________________________________________________________________//
//ACTIVE BUSINESSES//
const outEl = document.querySelector("#output");
outEl.innerHTML = "<h1>Active Businesses</h1>";

businesses.forEach((business) => {
  let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => (currentTotal += nextValue),
    0
  );
  outEl.innerHTML += `
    <h3>Company Name: ${business.companyName}</h3>
    <section>
      ${business.addressFullStreet}
    </section>
    <section> $${totalOrders} </section>
    <section>
        ${business.addressCity}
        ${business[("addressStateCode", "addressZipCode")]}
    </section>
  `;
  outEl.innerHTML += "<hr/>";
});
//_________________________________________________________________//
//NEW YORK BUSINESSES//
const outElone = document.querySelector("#output1");
outElone.innerHTML += "<h1>New York Businesses</h1>";
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
//______________________________________________________________; //

//PURCHASING AGENTS//
const outElThree = document.querySelector("#output3");
outElThree.innerHTML += "<h1>Purchasing Agents</h1>";

//THis is rendering it to the DOM
const renderResultObjs = (newObj) => {
  // outElThree.innerHTML = "";
  for (let i = 0; i < newObj.length; i++) {
    outElThree.innerHTML += purchasingAgentsObj.makeNewObjComponent(newObj[i]);
  }
};
// This is acutually Pushing resultsObjs to the DOM
const purchasingAgentsQuery = purchasingAgentsObj.resultObjs;
renderResultObjs(purchasingAgentsQuery);

//Searching Agents by full name
const agentOutPut = document.getElementById("agentOutPut");
document
  .querySelector("#companySearchOne")
  .addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
      const foundBusiness = purchasingAgentsQuery.find((business) =>
        business.fullName.includes(keyPressEvent.target.value)
      );
      agentOutPut.innerHTML += `
                <h2>
                ${foundBusiness.fullName}
                ${foundBusiness.company}
                ${foundBusiness.phoneNumber}
                </h2>
                <hr/>
            `;
    }
  });
