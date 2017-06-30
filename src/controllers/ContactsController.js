import contacts from "../contacts";
import ContactModel from "../models/ContactModel";

app.get("/users", (request, response) => {
ContactModel.find({}).exec()
.then(users => {
  return response.json(users);
});
});
