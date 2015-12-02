//setting up constructor with random customer generation + donuts purchased
function DonutShop(shopLoc, minCust, maxCust, avgDonuts) {
	this.shopLoc = shopLoc;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgDonuts = avgDonuts;
	var totalSales = 0;
  //generate random customer between min and max cust
	this.randomCust = function () {
	   	var customers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
		  return customers;
	}
  //customer number multiplied by average donuts
	this.hourlySales = function() {
    	var customers = this.randomCust();
    	var hourlyDonuts = (customers * this.avgDonuts);
    	return hourlyDonuts;
	}
  //adds sales to total
	this.addTotal = function(plusSales) {
    	totalSales = totalSales + plusSales;
  }
  //total sales by shop
  this.dailySales = function() {
   		return totalSales;
  }
}
//empty array to populate with shops
var allShops = [];

//starting data for table info 
function shopData() {
	var downtown = new DonutShop('Downtown', 8 , 43 , 4.50);
	var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2.00);
	var southLakeUnion = new DonutShop('South Lake Union', 9 , 23, 6.33);
	var wedgewood = new DonutShop('Wedgewood', 2, 28 , 1.25);
	var ballard = new DonutShop('Ballard', 8 , 58 , 3.75);
  //fill array with shopData from shop constructor
	allShops = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];
	tableRender();
}
//uses shopData to render table on html frontpage
function tableRender() {
    allShops.forEach(function(shop) {
    //select shop element and create new table info
    var table = document.getElementById("shops");
    var newRow = document.createElement("tr");
    var name = document.createElement("td");
    //shoploc string in first column
    name.textContent = shop.shopLoc;
    newRow.appendChild(name);
    //loop 12 times putting in sales data and adding to total
      for (i = 0; i < 11; i++) {
        var salesByHour = document.createElement("td");
        var sales = shop.hourlySales();
        salesByHour.textContent = sales.toFixed(1);
        shop.addTotal(sales);
        newRow.appendChild(salesByHour);
      }
    table.appendChild(newRow);
    // prints total sales for location
    var salesTotal = document.createElement("td");
    salesTotal.textContent = shop.dailySales().toFixed(1);
    newRow.appendChild(salesTotal);
    table.appendChild(newRow);
  });
}

shopData();