# sample-server

## Example

```js
function logMessage(message) {
    const data = JSON.stringify({
        message: message,
    });

    const options = {
        hostname: "192.168.2.1",
        port: 4500,
        path: "/log",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": data.length,
        },
    };

    const req = http.request(options, function (resp) {
        // The whole response has been received. Print out the result.
        resp.on("end", function () {});
    })
    .on("error", function () {});

    req.write(data);
}
```
