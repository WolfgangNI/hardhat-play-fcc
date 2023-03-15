/* eslint-disable no-process-exit */
// yarn hardhat node
// yarn hardhat run scripts/readPrice.js --network localhost
const { ethers } = require("hardhat")

async function readPrice() {
    const priceConsumerV3 = await ethers.getContract("PriceConsumerV3")
    const price = await priceConsumerV3.getLatestPrice()
    console.log(price.toString())
}

/*
Lesson 11 probelems Solved:
spin up a node: hh node 
deploy the contracts: yarn hardhat run --network localhost scripts/deployment/main.js
start the conosole: hh console --network localhost
since above uses deprecated syntax, for the manual console I should use getContractAt. And defined the contract address:
const contractAddr = "0x0165878A594ca255338adfa4d48449f69242Eb8F"
> undefined
const priceConsumerV3 = await ethers.getContractAt("PriceConsumerV3", contractAddr)
> undefined
(await priceConsumerV3.getLatestPrice()).toString()
*/

readPrice()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
