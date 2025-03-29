1. Retrieve the second-highest salary of employees✅:
SELECT MAX(salary) AS second_highest_salary
 FROM Employee 
WHERE salary < (SELECT MAX(salary) FROM Employee);

2. Get the total number of employees in each department✅:
SELECT department, COUNT(employee_id) AS total_employees 
FROM Employee 
GROUP BY department;

3. List customers who have not placed any orders✅:
SELECT c.customer_id, c.customer_name 
FROM Customers c 
LEFT JOIN Orders o ON c.customer_id = o.customer_id 
WHERE o.order_id IS NULL;

4. Find the product with the highest revenue✅:
SELECT product_id, SUM(quantity * price) AS total_revenue 
FROM Sales 
GROUP BY product_id 
ORDER BY total_revenue DESC 
LIMIT 1;


5. Retrieve employees who earn more than the average salary✅:
SELECT * 
FROM Employee 
WHERE salary > (SELECT AVG(salary) FROM Employee);

6. Get the list of products sold in the last 7 days✅:
SELECT DISTINCT product_id 
FROM Sales 
WHERE order_date >= DATEADD(DAY, -7, GETDATE());

 7. Find the number of orders placed each day:
SELECT order_date, COUNT(order_id) AS total_orders 
FROM Orders 
GROUP BY order_date;

8. Retrieve employees with the same salary✅:
SELECT employee_id, salary 
FROM Employee 
GROUP BY salary 
HAVING COUNT(employee_id) > 1;

9. List the customers who have placed the most orders✅:
SELECT customer_id, COUNT(order_id) AS total_orders 
FROM Orders 
GROUP BY customer_id 
ORDER BY total_orders DESC 
LIMIT 1;

10. Get the total quantity of each product sold per month✅:
SELECT product_id, MONTH(order_date) AS month, SUM(quantity) AS total_quantity 
FROM Sales 
GROUP BY product_id, MONTH(order_date);
