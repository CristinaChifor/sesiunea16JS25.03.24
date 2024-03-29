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

// async/await syntactic sugar
/**
 * async/await este o funcționalitate în JavaScript care simplifică gestionarea codului asincron și face ca acesta să pară mai asemănător cu codul sincron. Aceasta a fost introdusă în ECMAScript 2017 (ES8) și oferă o sintaxă mai clară și mai ușor de citit decât utilizarea directă a promisiunilor sau a callback-urilor.
Definirea funcțiilor async:
Folosind cuvântul-cheie async în fața unei funcții, aceasta devine o funcție asincronă. 
Funcțiile asincrone returnează întotdeauna o promisiune.
 */

async function getUsers() { 
        let users = [
            {username: 'username1', password: 'pass1'},
            {username: 'username2', password: 'pass2'}
        ]
    return users;
}

const users = getUsers();
//console.log(users);
users.then((users) => {
    console.log(users);
}).catch((e) => console.log(e));

async function doSomethingWithUsers() {
    let users = await getUsers();
    console.log('Users din await: ', users);
}

doSomethingWithUsers();

// Gestionarea erorilor cu try/ catch
/**
 * Blocul de cod try/catch poate fi folosit pentru gestionarea erorilor în funcțiile asincrone, făcând codul mai robust și mai ușor de întreținut.
 */

try {
    const labels = ['label1'];
    //saySomething('nophP');
    console.log(`First label is ${labels[0]}`);
} catch (err) {
    console.log('An error has occured: ',err);
} finally {
    console.log('Finally has executed');
}

console.log('After try/catch');