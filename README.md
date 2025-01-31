# 8844006_Jatin_SENG8071_MidtermAssignment

# MidTerm - Online Book Store

```sql 

## Table Attributes

### Customers table

| Attribute        |       Type       |
| ---------------- | :--------------: |
| customerID       | VARCHAR(10) (PK) |
| customerName     |   VARCHAR(100)   |
| customerEmail    |   VARCHAR(100)   |
| CustomerPassword |   VARCHAR(100)   |
| totalAmountSpent |  DECIMAL(10,2)   |
| registrationDate |       DATE       |


### Authors Table

| Attribute  |     Type     |
| ---------- | :----------: |
| authorID   |   INT (PK)   |
| authorName | VARCHAR(100) |
| authorBio  |     TEXT     |


#### Publishers Table

| Attribute        |     Type     |
| ---------------- | :----------: |
| publisherId      |   INT (PK)   |
| publisherName    | VARCHAR(100) |
| publisherAddress | VARCHAR(200) |


#### Books Table

| Attribute         |                  Type                  |
| ----------------- | :------------------------------------: |
| bookID            |                INT (PK)                |
| bookTitle         |              VARCHAR(200)              |
| bookGenre         |              VARCHAR(50)               |
| authorID          |                INT (FK)                |
| publisherID       |                INT (FK)                |
| bookFormat        | ENUM('physical', 'ebook', 'audiobook') |
| bookPrice         |             DECIMAL(10,2)              |
| publicationDate   |                  DATE                  |
| bookAverageRating |              DECIMAL(3,2)              |


#### Reviews Table

| Attribute     |   Type   |
| ------------- | :------: |
| reviewId      | INT (PK) |
| customerId    | INT (FK) |
| bookId        | INT (FK) |
| reviewRating  |   INT    |
| reviewComment |   TEXT   |
| reviewDate    |   DATE   |

#### Purchases Table

| Attribute     |     Type      |
| ------------- | :-----------: |
| purchaseId    |   INT (PK)    |
| customerId    |   INT (FK)    |
| bookId        |   INT (FK)    |
| reviewRating  |      INT      |
| purchaseDate  |     DATE      |
| purchasePrice | DECIMAL(10,2) |
```

## CREATE Table Statements: 

```sql

#### CREATING Schema

CREATE SCHEMA midterm_bookstore;


### Customers table

CREATE TABLE Customers (
    customerId VARCHAR(10) PRIMARY KEY,
    customerName VARCHAR(100) NOT NULL,
    customerEmail VARCHAR(100) UNIQUE NOT NULL,
    customerPassword VARCHAR(100) NOT NULL,
    totalAmountSpent DECIMAL(10, 2) DEFAULT 0,
    registrationDate DATE NOT NULL
);


### Authors Table

CREATE TABLE Authors (
    authorId INT PRIMARY KEY,
    authorName VARCHAR(100) NOT NULL,
    authorBio TEXT
);


#### Publishers Table

CREATE TABLE Publishers (
    publisherId INT PRIMARY KEY,
    publisherName VARCHAR(100) NOT NULL,
    publisherAddress TEXT
);


#### Books Table

CREATE TABLE Books (
    bookId INT PRIMARY KEY,
    bookTitle VARCHAR(200) NOT NULL,
    bookGenre VARCHAR(100),
    authorId INT,
    publisherId INT,
    bookFormat VARCHAR(50),
    bookPrice DECIMAL(10, 2),
    publicationDate DATE,
    bookAverageRating DECIMAL(3, 2),
    FOREIGN KEY (authorId) REFERENCES Authors(authorId),
    FOREIGN KEY (publisherId) REFERENCES Publishers(publisherId)
);


#### Reviews Table

CREATE TABLE Reviews (
    reviewId INT PRIMARY KEY,
    customerId VARCHAR(10),
    bookId INT,
    reviewRating DECIMAL(2, 1),
    reviewComment TEXT,
    reviewDate DATE,
    FOREIGN KEY (customerId) REFERENCES Customers(customerId),
    FOREIGN KEY (bookId) REFERENCES Books(bookId)
);


#### Purchases Table

CREATE TABLE Purchases (
    purchaseId INT PRIMARY KEY,
    customerId VARCHAR(10),
    bookId INT,
    purchaseDate DATE,
    purchasePrice DECIMAL(10, 2),
    FOREIGN KEY (customerId) REFERENCES Customers(customerId),
    FOREIGN KEY (bookId) REFERENCES Books(bookId)
);
```

```sql
## INSERT Data Into Tables

--Inserting Data Into Customers

INSERT INTO Customers (customerId, customerName, customerEmail, customerPassword, totalAmountSpent, registrationDate)
VALUES 
('jtg001', 'Ravi Kumar', 'ravi.k@jvbs.com', 'password123', 150.00, '2023-01-15'),
('jtg002', 'Aditi Sharma', 'aditi.s@jvbs.com', 'securepassword', 300.00, '2022-10-05'),
('jtg003', 'Rajesh Patel', 'rajesh.p@jvbs.com', 'rajeshsecure', 450.00, '2023-03-22'),
('jtg004', 'Sneha Singh', 'sneha.s@jvbs.com', 'snehapass', 600.00, '2022-11-12'),
('jtg005', 'Anil Gupta', 'anil.g@jvbs.com', 'anilpassword', 750.00, '2023-05-30'),
('jtg006', 'Priya Verma', 'priya.v@jvbs.com', 'priyapass', 900.00, '2022-07-14'),
('jtg007', 'Suresh Reddy', 'suresh.r@jvbs.com', 'sureshsecure', 1050.00, '2023-04-18'),
('jtg008', 'Neha Jain', 'neha.j@jvbs.com', 'nehapassword', 1200.00, '2022-09-01'),
('jtg009', 'Amit Mehta', 'amit.m@jvbs.com', 'amitpass', 1350.00, '2023-06-10'),
('jtg010', 'Divya Nair', 'divya.n@jvbs.com', 'divyasecure', 1500.00, '2022-12-25'),
('jtg011', 'Karan Desai', 'karan.d@jvbs.com', 'karanpass', 1650.00, '2023-02-08'),
('jtg012', 'Pooja Bhatia', 'pooja.b@jvbs.com', 'poojapass', 1800.00, '2022-10-15'),
('jtg013', 'Vikram Singh', 'vikram.s@jvbs.com', 'viksecure', 1950.00, '2023-01-27'),
('jtg014', 'Rina Shah', 'rina.s@jvbs.com', 'rinapass', 2100.00, '2022-08-05'),
('jtg015', 'Manish Joshi', 'manish.j@jvbs.com', 'manish123', 2250.00, '2023-03-15'),
('jtg016', 'Anjali Kulkarni', 'anjali.k@jvbs.com', 'anjsecure', 2400.00, '2022-11-20'),
('jtg017', 'Rohit Chauhan', 'rohit.c@jvbs.com', 'rohitpassword', 2550.00, '2023-05-02'),
('jtg018', 'Nisha Kapoor', 'nisha.k@jvbs.com', 'nishapass', 2700.00, '2022-07-28'),
('jtg019', 'Sanjay Thakur', 'sanjay.t@jvbs.com', 'sanjaypass', 2850.00, '2023-04-11'),
('jtg020', 'Meera Iyer', 'meera.i@jvbs.com', 'meerasecure', 3000.00, '2022-09-18');


--Inserting Data Into Authors

INSERT INTO Authors (authorId, authorName, authorBio)
VALUES 
(1, 'Chetan Bhagat', 'Chetan Bhagat is an Indian author, columnist, and speaker. He is known for his bestselling novels, which often explore themes of love, relationships, and social issues.'),
(2, 'Arundhati Roy', 'Arundhati Roy is an Indian author and activist. She gained international fame with her first novel, "The God of Small Things," which won the Man Booker Prize for Fiction in 1997.'),
(3, 'Ruskin Bond', 'Ruskin Bond is an Indian author of British descent. His works depict the simplicity of life in the Himalayan foothills and are popular among children and adults alike.'),
(4, 'Jhumpa Lahiri', 'Jhumpa Lahiri is an American author of Indian origin. Her debut collection of short stories, "Interpreter of Maladies," won the Pulitzer Prize for Fiction in 2000.'),
(5, 'Amish Tripathi', 'Amish Tripathi is an Indian author known for his mythological fiction. His "Shiva Trilogy" and "Ram Chandra Series" have been widely acclaimed.'),
(6, 'Vikram Seth', 'Vikram Seth is an Indian novelist and poet. His novel "A Suitable Boy" is one of the longest novels ever published in a single volume in the English language.'),
(7, 'Anita Desai', 'Anita Desai is an Indian novelist and short story writer. Her works often explore themes of cultural clashes and inner conflicts among characters.'),
(8, 'Salman Rushdie', 'Salman Rushdie is a British-Indian novelist and essayist. He is best known for his novel "Midnight''s Children," which won the Booker Prize in 1981.'),
(9, 'R.K. Narayan', 'R.K. Narayan was an Indian writer known for his works set in the fictional town of Malgudi. His novels and short stories depict everyday Indian life with humor and warmth.'),
(10, 'Vikram Chandra', 'Vikram Chandra is an Indian-American writer known for his novels and short stories exploring themes of identity, crime, and Indian society.'),
(11, 'Chitra Banerjee Divakaruni', 'Chitra Banerjee Divakaruni is an Indian-American author and poet. Her works often explore themes of immigration, womens issues, and Indian mythology.'),
(12, 'Rohinton Mistry', 'Rohinton Mistry is an Indian-Canadian author known for his novels depicting life in India and the Indian diaspora, often addressing social and political issues.'),
(13, 'Amitav Ghosh', 'Amitav Ghosh is an Indian author known for his novels and essays exploring historical and environmental themes, often set in India and Southeast Asia.'),
(14, 'Anita Nair', 'Anita Nair is an Indian-English writer known for her novels, short stories, and poetry, often reflecting contemporary Indian life and culture.'),
(15, 'Aravind Adiga', 'Aravind Adiga is an Indian-Australian author known for his debut novel "The White Tiger," which won the Man Booker Prize in 2008.'),
(16, 'Ashwin Sanghi', 'Ashwin Sanghi is an Indian author known for his historical and mythological thrillers, often blending fact and fiction.'),
(17, 'Kiran Desai', 'Kiran Desai is an Indian author known for her novel "The Inheritance of Loss," which won the Man Booker Prize in 2006.'),
(18, 'Devdutt Pattanaik', 'Devdutt Pattanaik is an Indian mythologist, speaker, and author known for his interpretations of ancient Indian scriptures, myths, and legends.'),
(19, 'Shashi Tharoor', 'Shashi Tharoor is an Indian author, politician, and diplomat known for his novels and non-fiction works exploring Indian history, politics, and society.'),
(20, 'Preeti Shenoy', 'Preeti Shenoy is an Indian author and artist known for her bestselling novels exploring themes of love, relationships, and personal growth.');


--Inserting Data Into Publishers

INSERT INTO Publishers (publisherId, publisherName, publisherAddress)
VALUES 
(1, 'Penguin Random House India', 'Noida, Uttar Pradesh, India'),
(2, 'HarperCollins Publishers India', 'Gurugram, Haryana, India'),
(3, 'Hachette India', 'New Delhi, India'),
(4, 'Rupa Publications', 'New Delhi, India'),
(5, 'Westland Publications', 'Chennai, Tamil Nadu, India'),
(6, 'Bloomsbury India', 'New Delhi, India'),
(7, 'Pan Macmillan India', 'Gurugram, Haryana, India'),
(8, 'Aleph Book Company', 'New Delhi, India'),
(9, 'Scholastic India', 'Gurugram, Haryana, India'),
(10, 'Srishti Publishers', 'New Delhi, India'),
(11, 'Juggernaut Books', 'New Delhi, India'),
(12, 'Speaking Tiger Books', 'New Delhi, India'),
(13, 'Jaico Publishing House', 'Mumbai, Maharashtra, India'),
(14, 'Oxford University Press India', 'New Delhi, India'),
(15, 'Penguin Viking', 'Noida, Uttar Pradesh, India'),
(16, 'Hachette Book Group USA', 'New York, USA'),
(17, 'Macmillan Publishers', 'New York, USA'),
(18, 'Simon & Schuster', 'New York, USA'),
(19, 'Harlequin Enterprises', 'Toronto, Canada'),
(20, 'Random House', 'New York, USA');


--Inserting Data Into Books

INSERT INTO Books (bookId, bookTitle, bookGenre, authorId, publisherId, bookFormat, bookPrice, publicationDate, bookAverageRating)
VALUES 
(1, 'Five Point Someone', 'Fiction', 1, 1, 'Paperback', 299.00, '2004-05-01', 4.2),
(2, 'The God of Small Things', 'Fiction', 2, 2, 'Hardcover', 499.00, '1997-05-01', 4.4),
(3, 'The Room on the Roof', 'Fiction', 3, 3, 'Paperback', 199.00, '1956-05-01', 4.1),
(4, 'Interpreter of Maladies', 'Fiction', 4, 4, 'Paperback', 350.00, '1999-05-01', 4.3),
(5, 'The Immortals of Meluha', 'Mythology', 5, 5, 'Paperback', 399.00, '2010-02-01', 4.5),
(6, 'A Suitable Boy', 'Fiction', 6, 6, 'Hardcover', 999.00, '1993-05-01', 4.0),
(7, 'The Village by the Sea', 'Fiction', 7, 7, 'Paperback', 250.00, '1982-01-01', 4.1),
(8, 'Midnight''s Children', 'Fiction', 8, 8, 'Hardcover', 799.00, '1981-05-01', 4.2),
(9, 'Malgudi Days', 'Fiction', 9, 9, 'Paperback', 299.00, '1943-01-01', 4.3),
(10, 'Sacred Games', 'Thriller', 10, 10, 'Hardcover', 699.00, '2006-05-01', 4.0),
(11, 'The Palace of Illusions', 'Mythology', 11, 11, 'Paperback', 350.00, '2008-02-01', 4.4),
(12, 'A Fine Balance', 'Fiction', 12, 12, 'Paperback', 499.00, '1995-05-01', 4.3),
(13, 'The Glass Palace', 'Historical Fiction', 13, 13, 'Paperback', 450.00, '2000-05-01', 4.1),
(14, 'Ladies Coupe', 'Fiction', 14, 14, 'Paperback', 299.00, '2001-05-01', 4.0),
(15, 'The White Tiger', 'Fiction', 15, 15, 'Hardcover', 399.00, '2008-05-01', 4.2),
(16, 'The Rozabal Line', 'Thriller', 16, 16, 'Paperback', 299.00, '2007-05-01', 3.9),
(17, 'The Inheritance of Loss', 'Fiction', 17, 17, 'Paperback', 350.00, '2006-05-01', 4.1),
(18, 'Jaya: An Illustrated Retelling of the Mahabharata', 'Mythology', 18, 18, 'Hardcover', 599.00, '2010-05-01', 4.5),
(19, 'Inglorious Empire', 'Non-fiction', 19, 19, 'Hardcover', 499.00, '2017-05-01', 4.2),
(20, 'Life is What You Make It', 'Self-help', 20, 20, 'Paperback', 199.00, '2011-05-01', 4.0);


--Inserting Data Into Reviews

INSERT INTO Reviews (reviewId, customerId, bookId, reviewRating, reviewComment, reviewDate)
VALUES 
(1, 'jtg001', 1, 4.0, 'A compelling read with relatable characters.', '2023-05-01'),
(2, 'jtg002', 2, 4.5, 'A beautifully written novel with deep themes.', '2023-04-15'),
(3, 'jtg003', 3, 4.0, 'A charming story that captures the essence of youth.', '2023-03-10'),
(4, 'jtg004', 4, 4.3, 'A well-crafted collection of stories.', '2023-02-20'),
(5, 'jtg005', 5, 4.5, 'An engaging and imaginative mythological tale.', '2023-01-25'),
(6, 'jtg006', 6, 4.0, 'A sprawling and immersive novel.', '2023-05-15'),
(7, 'jtg007', 7, 4.1, 'A touching and heartwarming story.', '2023-04-30'),
(8, 'jtg008', 8, 4.2, 'A brilliant and groundbreaking novel.', '2023-03-05'),
(9, 'jtg009', 9, 4.3, 'A delightful collection of stories.', '2023-02-10'),
(10, 'jtg010', 10, 4.0, 'A thrilling and intricate narrative.', '2023-01-20'),
(11, 'jtg011', 11, 4.4, 'A beautifully retold epic.', '2023-05-10'),
(12, 'jtg012', 12, 4.3, 'A powerful and moving novel.', '2023-04-25'),
(13, 'jtg013', 13, 4.1, 'A rich and evocative historical novel.', '2023-03-15'),
(14, 'jtg014', 14, 4.0, 'A poignant and insightful story.', '2023-02-05'),
(15, 'jtg015', 15, 4.2, 'A gripping and thought-provoking novel.', '2023-01-30'),
(16, 'jtg016', 16, 3.9, 'A fast-paced and intriguing thriller.', '2023-05-20'),
(17, 'jtg017', 17, 4.1, 'A beautifully written novel with profound themes.', '2023-04-10'),
(18, 'jtg018', 18, 4.5, 'An enlightening and engaging retelling.', '2023-03-01'),
(19, 'jtg019', 19, 4.2, 'A compelling and informative non-fiction work.', '2023-02-25'),
(20, 'jtg020', 20, 4.0, 'An inspiring and motivational book.', '2023-01-15');


--Inserting Data Into Purchases

INSERT INTO Purchases (purchaseId, customerId, bookId, purchaseDate, purchasePrice)
VALUES 
(1, 'jtg001', 1, '2023-02-10', 12.99),
(2, 'jtg002', 2, '2022-12-05', 15.50),
(3, 'jtg003', 3, '2023-01-20', 9.99),
(4, 'jtg004', 4, '2022-11-18', 18.75),
(5, 'jtg005', 5, '2023-03-15', 14.95),
(6, 'jtg006', 6, '2022-09-30', 16.99),
(7, 'jtg007', 7, '2023-04-25', 13.50),
(8, 'jtg008', 8, '2022-08-12', 11.25),
(9, 'jtg009', 9, '2023-05-10', 8.99),
(10, 'jtg010', 10, '2022-10-20', 12.50),
(11, 'jtg011', 11, '2023-01-05', 14.99),
(12, 'jtg012', 12, '2022-11-30', 10.99),
(13, 'jtg013', 13, '2023-02-15', 9.75),
(14, 'jtg014', 14, '2022-07-10', 15.25),
(15, 'jtg015', 15, '2023-03-05', 11.50),
(16, 'jtg016', 16, '2022-12-15', 14.50),
(17, 'jtg017', 17, '2023-06-20', 13.99),
(18, 'jtg018', 18, '2022-09-25', 17.95),
(19, 'jtg019', 19, '2023-04-05', 10.25),
(20, 'jtg020', 20, '2022-08-20', 16.50);
```

```sql
## REQUIREMENT Capturing

--Power Writers
SELECT authorId, authorName
FROM Authors
WHERE 
    (SELECT COUNT(*) FROM Books WHERE Books.authorId = Authors.authorId     AND publicationDate >= CURRENT_DATE - INTERVAL '6 years') >=1;


--Loyal Customers

SELECT customerid, customername, totalamountspent
FROM Customers
WHERE 
    totalamountspent >= 2500 AND registrationdate >= CURRENT_DATE - INTERVAL '5 year'
Order by 3 desc;


--Well Reviewed Books

SELECT bookid, booktitle, bookaveragerating
FROM Books
WHERE 
    bookaveragerating > (SELECT AVG(bookaveragerating) FROM Books)
order by 3 desc
Limit 5;


--Most Popular Genre by Sales

SELECT 'The highest selling book genre is: '|| bookgenre as Book_Genre,count(1)
FROM Books
JOIN Purchases ON Books.bookid = Purchases.bookid
GROUP BY bookgenre
ORDER BY SUM(bookprice) DESC 
LIMIT 1;


--10 Most Recent Reviews

SELECT reviewid, customerid, bookid, reviewrating, reviewcomment, reviewdate
FROM Reviews
ORDER BY reviewdate DESC
LIMIT 10;
```


```sql

## Typescript Interface

// Name of file: customer_service.ts

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
```