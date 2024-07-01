import { Customer } from './customer';

async function main() {
    const customer = new Customer();

    // Create a customer
    const newCustomer = await customer.create({
        customerId: 'jtg021',
        customerName: 'Ramesh Sharma',
        customerEmail: 'ramesh.sharma@example.com',
        customerPassword: 'password123',
        totalAmountSpent: 0,
        registrationDate: new Date(),
    });
    console.log('Created customer:', newCustomer);

    // Read a customer
    const customerId = 'jtg021';
    const fetchedCustomer = await customer.read(customerId);
    console.log('Fetched customer:', fetchedCustomer);

    // Update a customer
    const updatedCustomer = await customer.update(customerId, {
        customerName: 'Sunil Joshi',
        customerEmail: 'sunil.joshi@example.com',
        customerPassword: 'newpassword456',
        totalAmountSpent: 100.50,
        registrationDate: new Date(),
    });
    console.log('Updated customer:', updatedCustomer);

    // Delete a customer
    await customer.delete(customerId);
    console.log('Customer deleted successfully');
}

main().catch(err => console.error('Error:', err));