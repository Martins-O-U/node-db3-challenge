# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    Ans: SELECT ProductName, CategoryName FROM Products
            JOIN Categories on Categories.CategoryID = Products.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
    Ans: SELECT OrderID, ShipperName FROM Orders as O
            JOIN Shippers as S on O.ShipperId = S.ShipperId
            WHERE OrderDate < "1997-01-09"


### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
    Ans: SELECT ProductName, Quantity FROM OrderDetails
            JOIN Products on Products.ProductID = OrderDetails.ProductID
            where orderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
    Ans: SELECT OrderID, CustomerName, LastName From Orders
            Join Employees on Employees.EmployeeID = Orders.EmployeeID
            Join Customers on Customers.CustomerID = Orders.CustomerID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 