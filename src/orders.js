const database = require('./loadDatabase.js');
let data = database.getData();
data.then(function(data) { // To overcome issues with variable as a Promise data type
    let customersData = data[0]
    let companiesData = data[1]
    let deliveriesData = data[2]
    let orderItemsData = data[3]
    let ordersData = data[4]

    let ordersArray = []; 
    for (let i=0; i < ordersData.length; i++) {
        currentOrder = ordersData[i];
        orderObject = {
            "orderName": currentOrder['order_name'],
            "customerCompany": returnCustomerCompany(currentOrder['customer_id']),
            "customerName": currentOrder['customer_id'],
            "orderDate": currentOrder['created_at'],
        };
        ordersArray.push(orderObject);
    }
    
    function returnCustomerCompany(id) {
        for (let i=0; i < customerData.length; i++) {
            if (customerData[i]['user_id'] == id) {
                return customerData[i]['company_id']
            }
        }
    }

    function displayTableData(query) {
        for (let i=0; i< ordersData.length; i++) {
            if (ordersData[i]['order_name'].search(query)) {

            }
        }
    }

    new Vue({
        el: "#table",
        data: {
            query = document.getElementById('searchQuery').value,
            displayTableData(query)
        }
    })
});