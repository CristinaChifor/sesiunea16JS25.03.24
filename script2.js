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

const promise = new Promise((resolve,reject) => {
    const resolved = true; // schimba in true sau false

    setTimeout(()=> {
        if (resolved) {
            resolve('Valoare dupa rezolvare');
        } else {
            reject('Valoare dupa respingere');
        }
    }, 2000);
});

promise.then((resolvedValue) => {
    console.log('S-a rezolvat cu valoarea: ', resolvedValue);   
}).catch((rejectedValue) => {
    console.log('S-a respins cu valoarea: ', rejectedValue);
}).finally(() => {
    console.log('Se executa mereu!');
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
    let users =  [
            {username: 'username1', password: 'pass1'},
            {username: 'username2', password: 'pass1'}
        ]
    return users;
}

const users = getUsers();
console.log(users);

users.then((users) => {
    console.log(users);
}).catch((e) => console.log(e));

async function doSomethingWithUsers() {
    let users = await getUsers();
    console.log('users din await: ', users);
}

doSomethingWithUsers();

// Gestionarea erorilor cu try/ catch
/**
 * Blocul de cod try/catch poate fi folosit pentru gestionarea erorilor în funcțiile asincrone, făcând codul mai robust și mai ușor de întreținut.
 */

try {
    const labels = ['label1'];
    //saySomething('bgigx');
    console.log(`First label is ${labels[0]}`);
} catch (error) {
    console.log('An error has occured: ', error);
} finally {
    console.log('Finally has executed');
}

console.log('After try/ catch');

// API Request
// Aplication Programming Interface (web server + database -url)
/**
 * În JavaScript, un "request" (cerere) se referă la o solicitare făcută de către o aplicație sau script către un server pentru a obține sau a trimite date. 
 * În urma unei cereri se obține un răspuns (response) cu detalii privind rezultatul cererii.
Există mai multe moduri de a face cereri în JavaScript, iar două dintre cele mai comune metode sunt 
folosirea obiectului XMLHttpRequest și a funcției fetch(). 
Aceste metode permit dezvoltatorilor să trimită cereri HTTP către server specificand 
metoda cererii (GET, POST, PUT, DELETE) și să gestioneze răspunsurile în mod asincron.
 */

// fetch - returneaza o promisiune
/**
 * fetch() este o funcție integrată în JavaScript, introdusă în ECMAScript 2015 (ES6), care permite realizarea de cereri HTTP asincrone către resurse precum servere web. 
 * Această funcție simplifică și modernizează gestionarea cererilor și răspunsurilor HTTP în comparație cu metodele mai vechi, cum ar fi XMLHttpRequest.
 */
// status code example 404

