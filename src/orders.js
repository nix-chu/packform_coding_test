const database = require('./loadDatabase.js');
let data = database.getData();
data.then(function(data) { // To overcome issues with variable as a Promise data type
    // Organise data into each category
    let customersData = data[0]
    let companiesData = data[1]
    let deliveriesData = data[2]
    let orderItemsData = data[3]
    let ordersData = data[4]

    // Upon opening of HTML document, will return an array of all delivery information
    let ordersArray = []; 
    for (let i=0; i < ordersData.length; i++) {
        currentOrder = ordersData[i];
        orderObject = {
            "orderName": currentOrder['order_name'],
            "customerCompany": returnCustomerCompany(currentOrder['customer_id']),
            "customerName": currentOrder['customer_id'],
            "orderDate": currentOrder['created_at']
            // Delivered amount
            // Total amount
        };
        ordersArray.push(orderObject);
    }
    
    // Returns the corresponding enumerated company
    function returnCustomerCompany(id) {
        for (let i=0; i < customerData.length; i++) {
            if (customerData[i]['user_id'] == id) {
                return customerData[i]['company_id']
            }
        }
    }

    // Updates the table based on search query
    function displayTableData(query) {
        for (let i=0; i< ordersData.length; i++) {
            if (ordersData[i]['order_name'].search(query)) {
                // Checks if search query matches all objects
            }
        }
        // Returns the objects that match the search query
    }

    new Vue({
        el: "#table",
        data: {
            query = document.getElementById('searchQuery').value,
            displayTableData(query)
        }
    })
});