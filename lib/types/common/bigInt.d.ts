/**
 * Big positive integer base on BigNumber
 */
export default class BigInt {
    /**
     * Create BigInt from string
     * @param hex Byte string value
     */
    static fromHexstr(hex: string): BigInt;
    value: string | number;
    ledgerCompatible: boolean;
    constructor(value: string | number, ledgerCompatible?: boolean);
    /**
     * Create hex string from BigInt
     */
    toHexstr(): string;
}
