
    npm install typescrip--save-dev

In this case, you'd want to have Typescript (a javascript-parseable coding language) available for development, but once the app is deployed, it is no longer necessary, as all of the code has been transpiled to javascript. As such, it would make no sense to include it in the published app. Indeed, it would only take up space and increase download times.

If you are using linux run this command.

    sudo apt install node-typescript