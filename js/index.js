const XHR_DONE = 4;
const HTTP_OK = 200;

document.querySelector('.form-client-data input[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.form-client-data'))
    })
     .then( response => response.text() )
     .then( html => document.querySelector('.server-response')
                                .innerHTML = html );
}

document.querySelector('.get-shiba').addEventListener('click', getShiba);

function getShiba() {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
	const apiUrl = 'http://shibe.online/api/shibes?count=1';
    fetch(corsAnywhere + apiUrl)
        .then( response => response.json() )
        .then( shibas => {
            document.querySelector('.shiba').innerHTML = '<img class="shiba-img"src="' + shibas[0] + '">';
        });
}

getShiba();