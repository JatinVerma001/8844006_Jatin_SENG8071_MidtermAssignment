# 8844006_Jatin_SENG8071_MidtermAssignment

# MidTerm - Online Book Store


## Create Schema
```sql 
CREATE SCHEMA midterm_bookstore;
```

## Table Attributes & CREATE Table Statements


### Customers table

| Attribute        |       Type       |
| ---------------- | :--------------: |
| customerID       | VARCHAR(10) (PK) |
| customerName     |   VARCHAR(100)   |
| customerEmail    |   VARCHAR(100)   |
| CustomerPassword |   VARCHAR(100)   |
| totalAmountSpent |  DECIMAL(10,2)   |
| registrationDate |       DATE       |

```
CREATE TABLE midterm_bookstore.Customers (
    customerId VARCHAR(10) PRIMARY KEY,
    customerName VARCHAR(100) NOT NULL,
    customerEmail VARCHAR(100) UNIQUE NOT NULL,
    customerPassword VARCHAR(100) NOT NULL,
    totalAmountSpent DECIMAL(10, 2) DEFAULT 0,
    registrationDate DATE NOT NULL
);
```
### Authors Table

| Attribute  |     Type     |
| ---------- | :----------: |
| authorID   |   INT (PK)   |
| authorName | VARCHAR(100) |
| authorBio  |     TEXT     |

```sql
CREATE TABLE midterm_bookstore.Authors (
    authorId INT PRIMARY KEY,
    authorName VARCHAR(100) NOT NULL,
    authorBio TEXT
);
```


#### Publishers Table

| Attribute        |     Type     |
| ---------------- | :----------: |
| publisherId      |   INT (PK)   |
| publisherName    | VARCHAR(100) |
| publisherAddress | VARCHAR(200) |

```sql 
CREATE TABLE midterm_bookstore.Publishers (
    publisherId INT PRIMARY KEY,
    publisherName VARCHAR(100) NOT NULL,
    publisherAddress TEXT
);
```
