const express = require('express');
const passwd = require('passwd-linux');

const PORT = 1973;

let server = express();

function random(start, end, base = 1) {
    if (Array.isArray(start)) {
        return start[random(0, start.length - 1)];
    } else {
        return Math.floor(Math.random() * ((end - start) / base + 1)) + start;
    }
}

server.get('/login', (req, res) => {
    const username = req.query.username;
    let x = random(1000, 9999);
    let y = random(10, 99);
    let z = random(10, 99);
    const source = `${x}${y}${z}`;
    const password = (x - y + z).toString();
    console.log(password);
    passwd.changePassword(username, password, (error, response) => {
        if (response) {
            console.log(`Password of ${username} has been prismized with the source of ${source}. `);
            res.send(source);
            console.log(`Password of ${username} will be randomly reset after 100 seconds.`);
            setTimeout(() => {
                passwd.changePassword(username, random(10000000, 99999999).toString(), (error, response) => {
                    if (response) {
                        console.log(`Password of ${username} has been randomly reset.`);
                    } else {
                        console.log(`Password of ${username} failed to be randomly reset.`);
                        console.log(error);
                    }
                });
            }, 100000);
        } else {
            console.log(`Password of ${username} failed to be prismized.`);
            console.log(error);
            res.send(`Error.`);
        }
    });
});

server.listen(PORT);
console.log(`Prism Password is listening on port ${PORT}. `);