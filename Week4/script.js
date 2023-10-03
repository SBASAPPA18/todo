
let customers = [
    { id: 1, name: "Sharana Basappa", email: "sharanabasappa@.com", phone: "1818185865" }
];

function generateCustomerId() {
    return Math.max(...customers.map(customer => customer.id), 0) + 1;
}

function addCustomer(name, email, phone) {
    const newCustomer = {
        id: generateCustomerId(),
        name,
        email,
        phone,
    };

    customers.push(newCustomer);
    populateCustomerList();
}

const deleteCustomerButton = document.getElementById("delete-customer");
deleteCustomerButton.addEventListener("click", () => {
    const customerInfo = document.getElementById("customer-info");
    const customerId = parseInt(customerInfo.dataset.customerId);
    
    if (!isNaN(customerId)) {
        if (confirm("Are you sure you want to delete this customer?")) {
            deleteCustomer(customerId);
        }
    } else {
        alert("No customer selected.");
    }
});

function deleteCustomer(customerId) {
    customers = customers.filter(customer => customer.id !== customerId);
    populateCustomerList();
    displayCustomerDetails(null);
}

function displayCustomerDetails(customer) {
    const customerInfo = document.getElementById("customer-info");

    if (customer) {
        customerInfo.innerHTML = `
            <h3>${customer.name}</h3>
            <p>Email: ${customer.email}</p>
            <p>Phone: ${customer.phone}</p>
        `;
        customerInfo.dataset.customerId = customer.id;
    } else {
        customerInfo.innerHTML = "";
        delete customerInfo.dataset.customerId;
    }
}

function populateCustomerList() {
    const customerList = document.getElementById("customers");
    customerList.innerHTML = "";

    customers.forEach((customer) => {
        const listItem = document.createElement("li");
        listItem.textContent = customer.name;
        listItem.addEventListener("click", () => {
            displayCustomerDetails(customer);
        });
        customerList.appendChild(listItem);
    });
}

const addCustomerButton = document.getElementById("add-customer");
const addCustomerForm = document.getElementById("add-customer-form");

addCustomerButton.addEventListener("click", () => {
    addCustomerForm.style.display = "block";
});

const customerForm = document.getElementById("customer-form");
customerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all fields.");
        return;
    }

    addCustomer(name, email, phone);

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";

    addCustomerForm.style.display = "none";
});
populateCustomerList();
