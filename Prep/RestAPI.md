🔥 Basic Questions

1️⃣ What is REST API?
👉 REST (Representational State Transfer) is an architectural style that allows communication between client and server using HTTP methods.

2️⃣ What are the common HTTP methods?
✅ GET – Fetch data
✅ POST – Create new resource
✅ PUT – Update entire resource
✅ PATCH – Update partial resource
✅ DELETE – Remove resource

3️⃣ What are Idempotent Methods?
👉 GET, PUT, DELETE are idempotent, meaning multiple identical requests result in the same outcome.
👉 POST is not idempotent, as it creates a new resource each time.


---

🎯 Scenario-Based Questions

4️⃣ Scenario: How would you design an API for a blogging platform?
🔹 Endpoints:

GET /posts – Retrieve all posts

POST /posts – Create a new post

GET /posts/{id} – Retrieve a specific post

PUT /posts/{id} – Update a post

DELETE /posts/{id} – Remove a post


🔹 Best Practices:
✅ Use nouns (/posts) instead of verbs (/getPost).
✅ Implement pagination (/posts?page=1&limit=10).
✅ Secure APIs using JWT/OAuth.


---

5️⃣ Scenario: A client reports a "404 Not Found" error. How do you debug?
✅ Check if the requested resource exists (GET /users/999).
✅ Verify the correct endpoint URL.
✅ Ensure the client is authorized to access the resource.
✅ Check if there are trailing slashes or case-sensitive issues.


---

🚀 Advanced Questions

6️⃣ How do you handle versioning in REST APIs?
👉 URL Versioning: /v1/users, /v2/users
👉 Header Versioning: Accept: application/vnd.company.v2+json
👉 Query Parameter Versioning: /users?version=2

7️⃣ How do you optimize REST API performance?
✅ Enable caching (Redis, CDN, HTTP caching)
✅ Use pagination & filtering to limit large responses
✅ Implement rate limiting to prevent abuse
✅ Use GZIP compression for faster responses


---

🔥 Bonus Tips

🔹 Always return proper status codes (200 OK, 201 Created, 400 Bad Request, 500 Internal Server Error).
🔹 Handle error responses with meaningful messages.
🔹 Keep API stateless – don’t store client session data on the server.
🔹 Use Swagger/Postman for API documentation & testing.
