import * as wsClient from '../src/network/websocket/websocketBuilder'
import { buildGetDDOTx } from '../src/smartcontract/ontidContractTxBuilder';
import TxSender from '../src/transaction/txSender'
import { TEST_ONT_URL } from '../src/consts';
import {Address} from '../src/crypto'

describe('test websocket', () => {
    
    // var wsClient = new WebsocketClientApi()
    var txSender = new TxSender(TEST_ONT_URL.SOCKET_URL)
    var txHash = 'd5200d614994ea5242462f3a6601134ef235b9be03b6ce2f39e871fec2c36768',
        blockHash = '9d51e95d4cc0365b3ed06f66c5df4808491c09723810cc28ad37d5be152f230b',
        codeHash = 'ff00000000000000000000000000000000000003',
        height = 1000,
        ontid = 'did:ont:TA7j42nDdZSyUBdYhWoxnnE5nUdLyiPoK3',
        address = 'TA5k9pH3HopmscvgQYx8ptfCAPuj9u2HxG'

    test('send heartbeat', () => {
        let param =  wsClient.sendHeartBeat()
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('send heartbeat')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('send subscribe', () => {
        let param = wsClient.sendSubscribe()
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('send subscribe')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test sendRawTransaction', ()=> {
        let tx = buildGetDDOTx(ontid)
        let param = wsClient.sendRawTransaction(tx.serialize())
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('sendRawTransaction')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

     test('test getRawTransaction', () => {
        let param = wsClient.getRawTransaction(txHash)
         let callback = function (err, res, socket) {
             if (err) {
                 console.log(err)
                 return;
             }
             console.log('getRawTransaction')
             console.log(res)
             socket.close()
         }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getRawTransactionJson', () => {
        let param = wsClient.getRawTransactionJson(txHash)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('sendRawTransactionJson')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)       
    })

    test('test getGenerateBlockTime', () => {
        let param =  wsClient.getGenerateBlockTime()
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getGenerateBlockTime')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)        
    })

    test('test getNodeCount', () => {
        let param =  wsClient.getNodeCount()
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getNodeCount')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)       
    })

    test('test getBlockHeight', () => {
        let param = wsClient.getBlockHeight()
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getBlockHeight')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)        
    })

    test('test getBlock by height', () => {
        let param = wsClient.getBlock(height)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getBlock by height')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getBlock by hash', () => {
        let param = wsClient.getBlock(blockHash)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getBlock by hash')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getBlockJson by height', () => {
        let height = 1000
        let param = wsClient.getBlockJson(height)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getBlockJson by height')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)        
    })
    
    test('test getBlockJson by hash', () => {
        let param = wsClient.getBlockJson(blockHash)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getBlockJson by hash')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getBalance', () => {
        let address = new Address('TA7T3p6ikRG5s2pAaehUH2XvRCCzvsFmwE')
        let param = wsClient.getBalance(address)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getBalance')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getContract', () => {
        let param = wsClient.getContract(codeHash)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getContract')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getContractJson', () => {
        let param = wsClient.getContractJson(codeHash)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getContractJson')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getSmartCodeEvent by height', () => {
        let height = 1000
        let param = wsClient.getSmartCodeEvent(height)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getSmartCodeEvent')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getSmartCodeEvent by txHash', () => {
        let param = wsClient.getSmartCodeEvent(txHash)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getSmartCodeEvent')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getBlockHeightByTxHash', () => {

        let param = wsClient.getBlockHeightByTxHash(txHash)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getBlockHeightByTxHash')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    test('test getStorage', () => {
        let key = '2a6469643a6f6e743a5443375a6b556a62694e36794b61415433687735567a714c713138587538635a4a5702'
        let param = wsClient.getStorage(codeHash, key)
        let callback = function (err, res, socket) {
            if (err) {
                console.log(err)
                return;
            }
            console.log('getStorage')
            console.log(res)
            socket.close()
        }
        txSender.sendTxWithSocket(param, callback)
    })

    // test('test getMerkleProof', () => {
    //     let hash = '8893c8648d8dfad8f99274e1bdd3abb3cd47ba87cb54543c0594ac9cf7110888'
    //     let param = wsClient.getMerkleProof(hash)
    //     txSender.sendTxWithSocket(param, callback)
    // })
})



// var callback = function (err, res, socket) {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(res)
// }
// var wsSocket = new WebsocketClient(callback)

// wsSocket.sendHeartBeat()