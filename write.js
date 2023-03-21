import { Exm } from '@execution-machine/sdk';
import dotenv from "dotenv";
import { readFileSync } from 'fs';
dotenv.config();

const exm = new Exm({ token: process.env.EXM_API_TOKEN });
const functionID = readFileSync('functionID.js', 'utf-8')

// add new user
const unique_ID = 'lorimerjenkins1@gmail.com'
const wallet_contract = '12345'
const input = {'unique_ID': unique_ID, 'wallet_contract': wallet_contract}

const writeTx = await exm.functions.write(functionID, input);
console.log(writeTx.status);
