document.querySelector('.form-client-data input[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.'))
    })
     .then( response => response.text() )
     .then( html => document.querySelector('.server-response')
                                .innerHTML = html );
}

document.querySelector('.client-email input[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.client-email'))
    })
     .then( response => response.text() )
     .then( html => document.querySelector('.server-response')
                                .innerHTML = html );
}