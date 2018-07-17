# How work
 * **note**: cmd2json only works for stdout with the following column-style format

ex:
```bash
docker images

REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
imagea                   5                   45e620dfcb22        3 days ago          853MB
imagea                   4                   473d6f3ef985        3 days ago          853MB
<none>                   <none>              591ea9c79b5c        3 days ago          853MB
<none>                   <none>              c1fca1d2ea67        3 days ago          853MB
<none>                   <none>              98384d284c0f        3 days ago          853MB
<none>                   <none>              9810b899e015        3 days ago          674MB
imagea                   2                   0a4f777ac0df        3 days ago          1.27GB
imagea                   1                   10fbdbb6e445        3 days ago          1.27GB
imagea                   latest              61e483914a01        3 days ago          1.27GB
node                     latest              932354abf0cc        10 days ago         674MB
imageb                   latest              abf4f729a2f6        2 weeks ago         5.38GB
```

output to json 

```json
[
    {
        "REPOSITORY": "imagea",
        "TAG": "5",
        "IMAGE ID": "45e620dfcb22",
        "CREATED": "3 days ago",
        "SIZE": "853MB",
    },
    ...
]
```

# API

`static exec(command:String): String`

```js
let shell = require('cmd2json')

let json = shell.exec("docker images")
console.log(typeof json) // inspect json
```