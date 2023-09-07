import axios from "axios";
axios.get('https://jsonplaceholder.typicode.com/users/1')
.then(res => {
  console.log("Wooo!!!");
  console.log(res.data)
})
.catch(e => {
  console.log("ERROR!", e);
})