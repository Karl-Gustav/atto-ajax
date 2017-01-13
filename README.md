# Bare minimum lib for making http requests from javascript.

## Why?
There are many libraries like this, but I couldn't find one that you
could set the headers of the request. So I made another one...

## How to make me add features:
No

## But!
NO!!!

## Usage

    atto({
        url: '/',
        method: 'GET', // or POST, PUT, DELETE, and so on
        data: '<some data>',
        headers: {
            key: '<value>'
        }
    })
    .done(function(body, response) {
        ...
    })
    .error(function(error, response) {
        ....
    })
    .finally(function(error, response) {
        ...
    });

## Browser support
IE9+
