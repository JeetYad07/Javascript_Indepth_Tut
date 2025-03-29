SQL keys are constraints used to establish relationships between tables and ensure data integrity.

1. Primary Key: A Primary Key uniquely identifies each record in a table.
        Must be unique for each row.
        Cannot have NULL values.
        A table can have only one primary key.
    Example: 
        CREATE TABLE Employees (
        EmployeeID INT PRIMARY KEY,
        Name VARCHAR(100),
        Department VARCHAR(50)
        );

2. Foreign Key: A Foreign Key is a field that links to the Primary Key of another table.
        Maintains referential integrity.
        Ensures valid relationships between tables.

        Example: 
            CREATE TABLE Orders (
            OrderID INT PRIMARY KEY,
            EmployeeID INT,
            FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
            );

3. Unique Key :
            A Unique Key ensures that values in a column are unique but can contain NULL.
            Unlike Primary Key, a table can have multiple Unique Keys
            Example: 
                CREATE TABLE Customers (
                    CustomerID INT PRIMARY KEY,
                    Email VARCHAR(255) UNIQUE
                );

4. Composite Key: 
                A Composite Key is a combination of two or more columns to uniquely identify a row.
                Used when a single column cannot uniquely identify a record.
                Example: 

