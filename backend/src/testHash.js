

const bcrypt = require('bcryptjs');

const password = "password";

(async () => {
  const hash = await bcrypt.hash(password, 10);
  console.log("Password: ", password);
  console.log("Generated hash:", hash);

  const result = await bcrypt.compare(password, hash);
  console.log("Does the password match?", result);
})();


/*const hash = "$2b$10$TlJxIikEub3MmV0cFBL5f.ZgffiKT2rrygPIw956UE17kNFnHklbu";

bcrypt.compare(password, hash).then(result => {
  console.log("Does the password match?", result);
});*/
