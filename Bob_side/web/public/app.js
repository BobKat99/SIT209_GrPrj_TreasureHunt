
$('#footer').load('footer.html');

const API_URL = 'http://localhost:5000/api'; 

const stores = JSON.parse(localStorage.getItem('stores')) || [];

// stores.forEach(function(store) {
//     $('#stores tbody').append(`
//         <tr>
//             <td>${store.name}</td>
//             <td>${store.password}</td>
//             <td>${store.position}</td>
//         </tr>`
//     );
// });

$('#progress').on('click', function() {  
    location.href = '/progress'
});
$('#virtual-items').on('click', function() {  
    location.href = '/virtual_items'
});
$('#package').on('click', function() {  
    location.href = '/package'
});

$('Markers').on('click', function() {  
    location.href = '/virtual_items'
    });

$('#register').on('click', function() {
    const name = $('#username').val();
    const password = $('#password').val();
    const confirmPassword = $('#confirm-password').val();
    const exists = stores.find(store => store.name === name);

    if (exists == undefined && password === confirmPassword)
    {
        $.post(`${API_URL}/registration`, { name, password })
        .then((response) =>{
        if (response.success) {
            location.href = '/login';
            } 
        else {
            $('#message').append(`${response}`);
        }
        });
    }
    else
    {
        var newText = "The account've already existed or the confirm password is not match";
        $('#message').text(newText);
    }
});

$('#login').on('click', () => {   
    const name = $('#usernameL').val();   
    const password = $('#passwordL').val();   
    $.post(`${API_URL}/authenticate`, { name, password })   
    .then((response) =>{     
        if (response.success) {       
            localStorage.setItem('user', name);     
            location.href = '/stores';     
        } 
        else {       
            $('#messageL').append(`${response}`);     
        }   
    }); 
});