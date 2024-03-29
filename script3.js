// Asynchronous
/**
 * Asincronismul în programare se referă la modul în care operațiile sau acțiunile nu sunt executate într-o succesiune strictă sau sincronă. 
 * În JavaScript, asincronismul este adesea întâlnit în operațiile de rețea, citirea și scrierea fișierelor, manipularea bazelor de date și altele. 
 * Callback-urile, promisiunile și async/await sunt mecanisme specifice în JavaScript pentru gestionarea asincronismului și a codului non-blocant.
 */

// Promise
/**
 * O promisiune reprezintă o valoare care poate fi disponibilă acum, în viitor sau niciodată. 
 * O promisiune are trei stări posibile:
Pending (În așteptare): Starea inițială atunci când promisiunea este creată. Așteaptă finalizarea sau respingerea.
Fulfilled (Realizată): Starea în care operațiunea asincronă a avut succes și promisiunea returnează o valoare.
Rejected (Respinsă): Starea în care operațiunea asincronă a eșuat și promisiunea returnează un motiv pentru eșec.
 */

//const promiseHandler = (resolve, reject) => {
    // fa ceva
//}
/*const promiseHandler = (resolve, reject) => {

}*/

const promise = new Promise((resolve, reject) => {
    const resolved = false; // schimba in true sau false

    setTimeout(() => {
        if (resolved) {
            resolve('Valoare dupa rezolvare');
        } else {
            reject('Valoare dupa respingere');
        }
    }, 2000);
});

promise.then((resolveValued) => {
    console.log('S-a rezolvat cu valoarea: ', resolveValued);
}).catch((rejectedValue) => {
    console.log('S-a respins cu valoarea: ', rejectedValue);
}).finally(() => {
    console.log('Se executa mereu');
})

console.log('Cod ce se executa simultan cu promisiunea');