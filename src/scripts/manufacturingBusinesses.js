import businesses from "./customers.js";

const manufacturingBusinesses = businesses.filter((business) => {
  let inManufacturingIndustry = false;
  if (business.companyIndustry === "Manufacturing") {
    inManufacturingIndustry = true;
  }
  return inManufacturingIndustry;
});

export default manufacturingBusinesses;
