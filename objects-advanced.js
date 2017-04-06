var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(saleData, taxRates) {
  var finalSalesData = {};
  for (var i of saleData) {
    if (finalSalesData.hasOwnProperty(i.name)) {
      var currentSales = getTotalSales(i.sales);
      finalSalesData[i.name].totalSales += currentSales;
      finalSalesData[i.name].totalTaxes += getTaxes(taxRates[i.province], currentSales);
    } else {
      var currentSales = getTotalSales(i.sales);
      finalSalesData[i.name] = {
        totalSales: currentSales,
        totalTaxes: getTaxes(taxRates[i.province], currentSales)
      };
    }
  }
return finalSalesData;
}

function getTaxes(taxRate, salesAmount) {
  var tax = salesAmount * taxRate;
  return tax;
}

function getTotalSales(salesAmount) {
  tempTotal = 0;
  for (var i of salesAmount) {
    tempTotal += i;
  }
  return tempTotal;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

