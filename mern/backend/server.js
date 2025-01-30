// CORS - Cross Origin Resource Sharing
// CORS is a security feature implemented in browsers that restricts websites from making requests to a different domain than the one that served the website. 
// This is a security feature to prevent malicious websites from making requests to other websites and stealing data. 
// In our case, we are running the frontend on port 3000 and the backend on port 5050. Since these are different ports, the browser will block requests from the frontend to the backend. 
// To allow requests from the frontend to the backend, we need to enable CORS in the backend. We can do this by using the cors package in Express.
// Application is running on port 5050 by default and user can give any port. 
// We are using cors() to enable CORS in our Express application. This will allow requests from any domain to access our backend API.

import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
