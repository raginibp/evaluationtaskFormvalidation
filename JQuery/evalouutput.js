$(document).ready(function() {
    loadData();
});

function loadData() {
    $('#table').append('<tr><td>' + localStorage.name + 
                      '</td><td>' + localStorage.age + 
                      '</td><td>' + localStorage.email +
                      '</td><td>' + localStorage.phone +
                      '</td><td>' + localStorage.Gender+
                      '</td><td>' + localStorage.sunday+
                      '</td><td>' + localStorage.monday+ 
                      '</td><td>' + localStorage.tuesday+
                      '</td><td>' + localStorage.wednesday+
                      '</td><td>' + localStorage.thursday+
                      '</td><td>' + localStorage.friday +
                      '</td><td>' + localStorage.saturday);
}
