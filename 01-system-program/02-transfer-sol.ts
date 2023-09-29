import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
const PUBLIC_KEY = 'HiXn35uYRBpsi8cHRrUkDXAfc5hCYPmJymU2N1DZ7WcP';
const PRIVATE_KEY = '2iG3aN1xeV6yfa1DQmH88tBszpPuRuWXqRjKeiKpN371myCLDWNDXA3gxXjNareuYt8YUxZ83hciBiLA6ZJWzXJX'
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
async function main() {
    const signer = Web3.Keypair.fromSecretKey(base58.decode(PRIVATE_KEY))
    const transaction = new Web3.Transaction()

    const sendSOLTransaction = Web3.SystemProgram.transfer(
        {
            fromPubkey: new Web3.PublicKey(PUBLIC_KEY),
            toPubkey: new Web3.PublicKey('AmYAjuGDXratrsJDRo63fWmUvKQRuoik3a4geavi9okz'),
            lamports: 10000
        },
    )
    transaction.add(sendSOLTransaction)

    const txHash = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    )
}

main()

