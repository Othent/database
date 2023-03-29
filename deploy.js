import { Exm, ContractType } from '@execution-machine/sdk';
import { readFileSync, writeFileSync } from 'fs';
import dotenv from "dotenv";
dotenv.config();

// init new EXM instance
const exm = new Exm({ token: process.env.EXM_API_TOKEN });

// fetch function source
const functionSource = readFileSync('function.js');

const state = {
    FUNCTION_NAME:"Othent.io (Contract Database)", 
    FIND_MORE_INFO_AT:"Othent.io", 
    user_ids: [], 
    wallet_contracts: {}
}


const functionID = await exm.functions.deploy(functionSource, state, ContractType.JS);
writeFileSync('./functionID.js', functionID.id)
console.log(functionID);

