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

// xhr produser


