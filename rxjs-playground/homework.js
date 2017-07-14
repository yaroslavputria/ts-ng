// event producer
function fromEventProducer(el, event) {
    return function(observer) {
        function handler(e) {
            observer.next(e);
        };
        el.addEventListener(event, handler);
        return function() {
            el.removeEventListener(event, handler);
        };
    };
}
const btn = document.getElementById('btn');
const observableClickEvent = Rx.Observable.create(fromEventProducer(btn, 'click'));
const btnClickSubscription = observableClickEvent.subscribe({
    next(e) {
        console.log(e.target + ' was clicked');
        //this.unsubscribe(); this === subscription 
    },
    complete() {},
    error() {}
});
const unsbscrb = document.getElementById('unsbscrb');
unsbscrb.addEventListener('click', function handler() {
    btnClickSubscription.unsubscribe();
    unsbscrb.removeEventListener('click', handler);
});

// xhr produсer

function xhrProducer(options) {
    return function(observer) {
        xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url, true);
        xhr.onload = function() {
            observer.next(this);
        };
        xhr.onerror = function(err) {
            observer.error(err);
        };
        xhr.send();
        return function() {
            xhr.abort();
        };
    };
}
const obserableXhrRequest = Rx.Observable.create(xhrProducer({method: 'GET', url: 'https://api.github.com/users/yaroslavputria/repos'}));
const xhrSubscription = obserableXhrRequest.subscribe({
    next(res) {
        console.log(res);
    },
    complete() {},
    error(err) {
        console.log(err.message);
    }
});
//xhrSubscription.unsubscribe();