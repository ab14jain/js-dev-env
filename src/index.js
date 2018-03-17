import './index.css';
import{getUsers} from './api/userApi';
import numeral from 'numeral';

getUsers().then(result => {
    let userBody = "";
    result.forEach(user => {
        userBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
    });
    global.document.getElementById('users').innerHTML = userBody; 
});


const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome kick start folder`);// eslint-disable-line no-console