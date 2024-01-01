import bcrypt from 'bcrypt';

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    console.log("hash : ", hash);

    bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
        // result == true
        console.log("result : ", result);

    });
    // Store hash in your password DB.
});
