let productState = {
  productList: [],
  machineList: [],
  machineListCopy: [],
  productListCopy: [],
};

function productList(state = productState, action) {
  console.log(action);
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    //to add machine
    case "add_machine":
      stateCopy.machineList = [...action.payload];
      stateCopy.machineListCopy = [...action.payload];
      return stateCopy;

    // to add product
    case "add_product":
      stateCopy.productList = [...action.payload];
      stateCopy.productListCopy = [...action.payload];
      return stateCopy;

    //to filter machine on price
    case "filter_machine_price":
      var price = parseInt(action.payload);
      var priceFiltered = stateCopy.machineList.filter((value) => {
        return value.price <= price;
      });
      stateCopy.machineListCopy = [...priceFiltered];
      return stateCopy;

    //to filter productlist on price
    case "filter_product_price":
      var price = parseInt(action.payload);
      console.log(price);
      var priceFiltered = stateCopy.productList.filter((value) => {
        return value.price <= price;
      });
      stateCopy.productListCopy = [...priceFiltered];
      return stateCopy;

    //filter based upon targetplant for machine
    case "filter_machine_targetplant":
      var targetCropFiltered = stateCopy.machineList.filter((value) => {
        return value.targetplant.toLowerCase() === action.payload.toLowerCase();
      });
      stateCopy.machineListCopy = [...targetCropFiltered];
      return stateCopy;

    //filter based upon targetplant for product
    case "filter_product_targetplant":
      var targetCropFiltered = stateCopy.productList.filter((value) => {
        return value.targetplant.toLowerCase() === action.payload.toLowerCase();
      });
      stateCopy.productListCopy = [...targetCropFiltered];
      return stateCopy;

    //filter based upon category for machine
    case "filter_machine_category":
      var categoryCropFiltered = stateCopy.machineList.filter((value) => {
        return value.productType.toLowerCase() === action.payload.toLowerCase();
      });
      stateCopy.machineListCopy = [...categoryCropFiltered];
      return stateCopy;

    //filter based upon category for product
    case "filter_product_category":
      var categoryCropFiltered = stateCopy.productList.filter((value) => {
        return value.productType.toLowerCase() === action.payload.toLowerCase();
      });
      stateCopy.productListCopy = [...categoryCropFiltered];
      return stateCopy;
    default:
      return state;
  }
}
export default productList;
