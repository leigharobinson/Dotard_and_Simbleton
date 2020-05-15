import businesses from "./customers.js";

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

export default { resultObjs, makeNewObjComponent };
