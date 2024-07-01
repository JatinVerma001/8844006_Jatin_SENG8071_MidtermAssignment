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

```sql 
CREATE TABLE midterm_bookstore.Books (
    bookId INT PRIMARY KEY,
    bookTitle VARCHAR(200) NOT NULL,
    bookGenre VARCHAR(100),
    authorId INT,
    publisherId INT,
    bookFormat VARCHAR(50),
    bookPrice DECIMAL(10, 2),
    publicationDate DATE,
    bookAverageRating DECIMAL(3, 2),
    FOREIGN KEY (authorId) REFERENCES midterm_bookstore.Authors(authorId),
    FOREIGN KEY (publisherId) REFERENCES midterm_bookstore.Publishers(publisherId)
);
```

#### Reviews Table

| Attribute     |   Type   |
| ------------- | :------: |
| reviewId      | INT (PK) |
| customerId    | INT (FK) |
| bookId        | INT (FK) |
| reviewRating  |   INT    |
| reviewComment |   TEXT   |
| reviewDate    |   DATE   |

```sql 
CREATE TABLE midterm_bookstore.Reviews (
    reviewId INT PRIMARY KEY,
    customerId VARCHAR(10),
    bookId INT,
    reviewRating DECIMAL(2, 1),
    reviewComment TEXT,
    reviewDate DATE,
    FOREIGN KEY (customerId) REFERENCES midterm_bookstore.Customers(customerId),
    FOREIGN KEY (bookId) REFERENCES midterm_bookstore.Books(bookId)
);
```
