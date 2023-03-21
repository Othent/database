import { Exm } from '@execution-machine/sdk';
import { readFileSync } from 'fs';
import dotenv from "dotenv";
dotenv.config();

const exm = new Exm({ token: process.env.EXM_API_TOKEN });

const functionID = readFileSync('functionID.js', 'utf-8')

const readTx = await exm.functions.read(functionID);
console.log(readTx);