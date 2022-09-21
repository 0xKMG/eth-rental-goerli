 Eth-Rental

## Deployed version url:


## How to run this project locally:

### Prerequisites

- Node.js >= v14
- Truffle and Ganache
- Yarn
- `git fetch --all --tags`
- `git checkout tags/v1.0 -b cert`

### Contracts

- Run `yarn install` in project root to install Truffle build and smart contract dependencies
- Run local testnet in port `7545` with an Ethereum client, e.g. Ganache
- `truffle migrate --network development`
- `truffle console --network development`
- Run tests in Truffle console: `test`

### Frontend

- `cd client`
- `yarn install`
- `yarn start`
- Open `http://localhost:3000`

### How to populate locally deployed contract with listings

- `truffle migrate --network development`
- `truffle console --network development`
- `let rr = await Rentals.deployed()`
- Add two listings:
- `rr.addProperty(web3.utils.toWei("0.00156"), "Ocean Sea Block 2", "1 bedroom with a nice view", "https://google.com","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ocean_Pride_in_2020.jpg/1200px-Ocean_Pride_in_2020.jpg")`
- `rr.addProperty(web3.utils.toWei("0.002"), "MK House", "2 bedrooms with a really bad view", "https://google.com","https://cdn.hk01.com/di/media/images/dw/20220117/559776922540707840591268.jpeg/NDKhrQPBhoMyjVDiGlsOEr3ZhvcR3mBIrjRDKa40Qyk?v=w1920r16_9")`
- Send ETH to local wallet: `web3.eth.sendTransaction({ from: "<your local address>", to: "<your local network wallet>", value: web3.utils.toWei("10") })`
- `cd client && yarn start`
- Open local ui from `http://localhost:3000`
- Make sure your Metamask localhost network is in port `7545`.
- If you get `TXRejectedError` when sending a transaction, reset your Metamask account from Advanced settings.

## Simple workflow

1. Enter service web site
2. Login with Metamask
3. Browse apartments
4. Select apartment
5. Agree on contract, pay first installment with Metamask (smart contract call)
6. Tenantship is transferred to user account (smart contract call)
7. Receive key phrase / token / OTP / etc. to access apartment with smart lock app (this part will be mocked in project)

## Scheduled workflow for late payments (Not implemented)

1. Run scheduled contract weekly (Gelato? https://docs.gelato.network/tutorial)
2. Check for made payments for each rental agreement (from renter wallet to owner wallet)
3. If last payment is late 7 days, send reminder
4. If last payment is late >= 30 days, remove tenant. Revoke user token access rights to apartment smart lock.

## Directory structure

- `client`: Project's React frontend.
- `contracts`: Smart contracts that are deployed in the Ropsten testnet.
- `migrations`: Migration files for deploying contracts in `contracts` directory.
- `test`: Tests for smart contracts.

## Environment variables (not needed for running project locally)

```
GOERLI_INFURA_PROJECT_ID=
GOERLI_MNEMONIC=
```

## TODO features

- Tenant payments tracking
- Tenant removal
- Fund withdrawal
