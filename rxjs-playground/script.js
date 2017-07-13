


//const myLazyColdObservable = Rx.Observable.of('23');

function ofProducer(...params) {
    return function(observer) {
        params.forEach(p => observer.next(p));
        observer.complete();
    }
}

const ofObservable = Rx.Observable.create(ofProducer(1, 2, 4));

// myLazyColdObservable.subscribe(v => {
//     console.log(v);
// }, err => {
//     console.log(err);
// }, () => {
//     console.log('obs is completed');
// });

const subsrbOfObs = ofObservable.subscribe({
    next(v) {
        console.log(v);
    },
    error() {

    },
    complete() {
        console.log('obs is completed');
    }
});

//const subsrbOfObs = myLazyColdObservable.subscribe(observerObj);// or ...subscribe(nextFn, errorFn, completedFn)

subsrbOfObs.unsubscribe(); //there is no need if observable completed

const intervalObservable = Rx.Observable.interval(1000);
const intevalSubscription = intervalObservable.subscribe({
    next(v) {
        console.log(v);
    },
    error() {

    },
    complete() {
        console.log('obs is completed');
    }
});

setTimeout(() => {
    intevalSubscription.unsubscribe();
}, 3000);

//---------------

function intervalProducer(time) {
    return function(observer) {
        let i = 0;
        const interval = setInterval(() => {
            observer.next(i++);
        }, time);
        return function() {
            clearInterval(interval);
        };
    }
}
const customIntervalObservable = Rx.Observable.create(intervalProducer(1000));

const subscrb = customIntervalObservable.subscribe({
    next(v) {console.log(v)}
});
setTimeout(() => {
    subscrb.unsubscribe();
}, 3000);