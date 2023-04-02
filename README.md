# Protoss Exchange SDK

This repository contains the Protoss Exchange SDK code, Forked from the [Uniswap SDK](https://github.com/Uniswap/v2-sdk).

The Protoss Exchange SDK SDK exists to help developers build on top of Protoss Exchange SDK. It's designed to run in any environment that can execute JavaScript (think websites, node scripts, etc.).

# Installation

The easiest way to consume the SDK is via npm. To install it in your project, simply run `yarn add https://github.com/protoss-exchange/protoss-exchange-sdk.git#protoss` (or `npm install https://github.com/protoss-exchange/protoss-exchange-sdk.git#protoss`).

# Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

```typescript
import { ChainId } from 'protoss-exchange-sdk'
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
// The chainId of mainnet is 0x534e5f4d41494e.
```

## CommonJS (require)

```typescript
const L0KSWAP = require('protoss-exchange-sdk')
console.log(`The chainId of mainnet is ${L0KSWAP.ChainId.MAINNET}.`)
// The chainId of mainnet is 0x534e5f4d41494e.
```
