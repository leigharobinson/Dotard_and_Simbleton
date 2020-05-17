import businesses from "./customers.js";

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter((business) => {
  let inNewYork = false;
  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }
  // console.log(inNewYork);
  return inNewYork;
});

export default newYorkBusinesses;
