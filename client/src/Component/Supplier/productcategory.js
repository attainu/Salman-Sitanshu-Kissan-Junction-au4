import React from "react";
import ProductRegister from "./productregistration.js";
class Productcategory extends React.Component {
  state = {
    seed: {
      subject: "Seeds and Pestisides",
      type: "Type i.e seed, pestiside",
      target: "Target Plants",
      price: "Price",
      size: "Size i.e 10 ml, 100 ml",
      dosage: "Dosage per hectare",
      description: "Add some description",
    },
    machine: {
      subject: "Machine for Rent",
      type: "Type i.e tractor, harvester",
      target: "Target Crops",
      price: "Rent Per Hour",
      size: "Power ie. 10Hw",
      dosage: "Max day to Hire",
      description: "Application i.e Picking, Binning",
    },
  };
  render() {
    return (
      <>
        <ProductRegister seed={this.state.machine} />
      </>
    );
  }
}
export default Productcategory;