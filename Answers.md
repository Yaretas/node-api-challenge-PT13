- [ ] Mention two parts of Express that you learned about this week.
- I learned that with Express.js I can create CRUD operations that can single handle each request from the client.
  Also with the use of server - side Routing it runs similar to Routing in REACT and the managing of state in Redux.
  Personally I am not a fan of Redux, but with Express it has game a better understanding of how redux works. This is totally unrelated, but this is what I learned this week.

- [ ] Describe Middleware?
- A function that sits in the middle between a raw request ad the final intended route.
  Middleware function have access to the req object and the res object and the next function in the application's req-res cycle.

- [ ] Describe a Resource?
- It is an object that carry out data specifically to communicate with the client.

- [ ] What can the API return to help clients know if a request was successful?
- It can return a json code and a message to indicate if the request was handle successfully

- [ ] How can we partition our application into sub-applications?
- This was a tricky question at first, but the way we can partition our application into sub-application it is by splitting the project into multiple Express application instances, in which each instance handles a specific part of the overall application connected by Express Routing. For example: create an Express instance that handles only the Routing anf communication with the database and so on.
