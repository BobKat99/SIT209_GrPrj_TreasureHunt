$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

const API_URL = 'http://localhost:5000/api';

$.get(`${API_URL}/homepage`)
   
$('#register').on('click', function () {
    const user = $('#user').val();
    const password = $('#password').val();
    const confirm = $('#confirm').val();
    if (password !== confirm) {
        $('#message').append(`<p class="alert alert-danger">${response}</p>`);
    } else {
        $.post(`${API_URL}/registration`, {user, password})
        .then((response) => {
            if (response.success) {
                location.href = '/login';
            } else {
                console.log(response);
                $('#message').append(`<p class="alert alert-danger">${response}</p>`);
            }
        }
    )};
});

$('#login').on('click', () => {
    const user = $('#user').val();
    const password = $('#password').val();
    $.post(`${API_URL}/authenticate`, { user, password })
    .then((response) =>{
        if (response.success) {
            localStorage.setItem('token', response.token);
            location.href = '/';
    } else {
        $('#message').append(`<p class="alert alert-danger">${response}</p>`);
        }
    });
});
$('#loginstore').on('click', () => {
    const user = $('#user').val();
    const password = $('#password').val();
    $.post( ` ${API_URL}/authenticate ` , { user, password })
    .then((response) =>{
    if (response.success) {
        localStorage.setItem('token', response.token);
        location.href = '/store';
    } else {
        $('#message').append( ` <p class="alert alert-danger">${response}< /p>`);
    }
    });
});
   
const logout = () => {
    localStorage.removeItem('user');
    location.href = '/login';
    }



