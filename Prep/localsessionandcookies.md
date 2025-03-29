Local Storage, Session Storage, and Cookies are all methods used for storing data in a web browser, but they have different use cases and behaviors.
All use key-value pair

Local Storage: 
1. Scope: Stores data with no expiration time. Data persists even after the browser is closed and reopened.
2. Storage Limit: Around 5MB per domain.
3. Accessibility: Only accessible via JavaScript (not sent with HTTP requests).
4. Use Case: Storing user preferences, theme settings, authentication tokens (not sensitive data).
5. API Example: 
        localStorage.setItem("username", "Jeet");
        console.log(localStorage.getItem("username")); // "Jeet"
        localStorage.removeItem("username");

Session Storage
1. Scope: Stores data only for the duration of the page session. Data is lost when the page is closed.
2. Storage Limit: Around 5MB per domain.
3. Accessibility: Only accessible via JavaScript (not sent with HTTP requests).
4. Use Case: Storing temporary session data like form inputs before submission.
5. API Example:
            sessionStorage.setItem("sessionData", "12345");
            console.log(sessionStorage.getItem("sessionData")); // "12345"
            sessionStorage.removeItem("sessionData");

Cookies:
1. Scope: Can have an expiration date or persist until manually deleted. Sent with every HTTP request to the server.
2. Storage Limit: Around 4KB per cookie.
3. Accessibility: Can be accessed by both JavaScript and the server.
4. Use Case: Authentication tokens, user tracking, session management.
5. API Example: 
    document.cookie = "user=Jeet; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    console.log(document.cookie); // "user=Jeet"


Which One to Use?
Use Local Storage when you need to store data long-term without expiration (e.g., dark mode settings).
Use Session Storage when you need temporary data storage for a session (e.g., form data before submission).
Use Cookies for storing small pieces of data that need to be sent to the server with each request (e.g., authentication tokens).