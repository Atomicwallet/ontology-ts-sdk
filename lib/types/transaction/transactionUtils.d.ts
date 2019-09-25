import { Address } from '../crypto';
import { Transaction } from './transaction';
/**
 * Creates transaction to invoke native contract
 * @param funcName Function name of contract to call
 * @param params Parameters serialized in hex string
 * @param contractAddr Adderss of contract
 * @param gasPrice Gas price
 * @param gasLimit Gas limit
 * @param payer Address to pay for transaction gas
 */
export declare function makeNativeContractTx(funcName: string, params: string, contractAddr: Address, gasPrice?: string, gasLimit?: string, payer?: Address): Transaction;
