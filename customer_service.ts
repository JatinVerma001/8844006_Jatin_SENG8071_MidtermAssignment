// customer.ts

import { Pool } from 'pg';

export class Customer {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'root',
            host: 'localhost',
            database: '8844006_Jatin_SENG8071_MidtermAssignment',
            password: 'connect123',
            port: 5432,
        });
    }

	//Customer Creations
    async create(customerData: any): Promise<any> {
        const { customerId, customerName, customerEmail, customerPassword, totalAmountSpent, registrationDate } = customerData;
        const query = 'INSERT INTO Customers (customerId, customerName, customerEmail, customerPassword, totalAmountSpent, registrationDate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const values = [customerId, customerName, customerEmail, customerPassword, totalAmountSpent, registrationDate];

        try {
            const client = await this.pool.connect();
            const result = await client.query(query, values);
            client.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Error creating customer: ${err.message}`);
        }
    }

	//Reading from Table
    async read(customerId: string): Promise<any> {
        const query = 'SELECT * FROM Customers WHERE customerId = $1';
        const values = [customerId];

        try {
            const client = await this.pool.connect();
            const result = await client.query(query, values);
            client.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Error fetching customer: ${err.message}`);
        }
    }

	//Performing Update to table:
    async update(customerId: string, customerData: any): Promise<any> {
        const { customerName, customerEmail, customerPassword, totalAmountSpent, registrationDate } = customerData;
        const query = 'UPDATE Customers SET customerName = $1, customerEmail = $2, customerPassword = $3, totalAmountSpent = $4, registrationDate = $5 WHERE customerId = $6 RETURNING *';
        const values = [customerName, customerEmail, customerPassword, totalAmountSpent, registrationDate, customerId];

        try {
            const client = await this.pool.connect();
            const result = await client.query(query, values);
            client.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Error updating customer: ${err.message}`);
        }
    }

	//Deleting entry from table:
    async delete(customerId: string): Promise<void> {
        const query = 'DELETE FROM Customers WHERE customerId = $1';
        const values = [customerId];

        try {
            const client = await this.pool.connect();
            await client.query(query, values);
            client.release();
        } catch (err) {
            throw new Error(`Error deleting customer: ${err.message}`);
        }
    }
}
