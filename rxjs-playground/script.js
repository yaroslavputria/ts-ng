

/*
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

*////////////

const ofObs = Rx.Observable.of(1, 2, 3, 4, 5);

const producer = function(obs, lim) {
    return function(newObs) {
        const subscrb = obs.subscribe(v => {
            for (let i = v; i <= lim; i++) {
                newObs.next(i);
            }
        });
        return function() {
            subscrb.unsubscribe();
        }
    }
}

const customObservable = Rx.Observable.create(producer(ofObs, 5));

const subscribtion = customObservable.subscribe(v => console.log(v));//1 2 3 4 5 2 3 4 5 3 4 5 4 5 5
////////////// operators:
/*
 - Creation operators:
    - of
    - interval
    ...

- Transformation Operators:
    - map
    - scan
    - mergeMap
    - switchMap
    ...

- Combination Operators
    - concat
    - merge
    ...

- Filtering Operators
    - filter
    - skip
    - debounce
    ...

- Multicasting Operators
    - multicast
    - publish
    - share
    ...
*/

const s = Rx.Observable
    .interval(1000)
    .filter(v => v <= 5 && v !== 0)
    .mergeMap(x => {
        return Rx.Observable.range(1, x)
            .map(v => v);
    })
    .subscribe(v => console.log(v));









