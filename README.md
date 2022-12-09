# DiscordProtocolURLs

> **DISCLAIMER:** Discord does not officially support or document their protocol URLs.

This package allows you to easily build Discord's protocol URLs, and optionally format them to be clickable links in Discord.

## Install:
```
npm install discordprotocolurls
```

## Documentation:
https://github.com/Harvle/DiscordProtocolURLs/wiki/Documentation

## Missing Links:
Create an issue or a pull request with the link that is missing and it'll be implemented into the library. All the links that are in the library are from [this Gist](https://gist.github.com/ghostrider-05/8f1a0bfc27c7c4509b4ea4e8ce718af0), so all credit goes to the gist's creator and the comments on the gist for locating these links.

## Example Usages (TypeScript / ES):
```ts
// Standalone
import ProtocolURLBuilder from "discordprotocolurls";

const protocolURLs = new ProtocolURLBuilder();
console.log(protocolURLs.guild("1234567891011121314"));
// Output: "discord://-/channels/1234567891011121314"
```
```ts
// Extending Discord.JS Client
import { Client } from "discord.js";
import ProtocolURLBuilder from "discordprotocolurls";

class ExtendedClient extends Client {
    protocolURLs: ProtocolURLBuilder; // TypeScript only
    constructor(options) {
        this.protocolURLs = new ProtocolURLBuilder();
    };
};

const client = new ExtendedClient();
console.log(client.protocolURLs.guild("1234567891011121314"));
// Output: "discord://-/channels/1234567891011121314"
```

## Example Usages (CommonJS):
```js
// Standalone
const ProtocolURLBuilder = require("discordprotocolurls");

const protocolURLs = new ProtocolURLBuilder();
console.log(protocolURLs.guild("1234567891011121314"));
// Output: "discord://-/channels/1234567891011121314"
```
```js
// Extending Discord.JS Client
const { Client } = require("discord.js");
const ProtocolURLBuilder = require("discordprotocolurls");

class ExtendedClient extends Client {
    constructor(options) {
        this.protocolURLs = new ProtocolURLBuilder();
    };
};

const client = new ExtendedClient();
console.log(client.protocolURLs.guild("1234567891011121314"));
// Output: "discord://-/channels/1234567891011121314"
```