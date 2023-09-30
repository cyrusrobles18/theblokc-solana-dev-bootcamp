import * as Web3 from '@solana/web3.js'
const PUBLIC_KEY = 'HiXn35uYRBpsi8cHRrUkDXAfc5hCYPmJymU2N1DZ7WcP';
import base58 from 'bs58'
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
const PRIVATE_KEY = '2iG3aN1xeV6yfa1DQmH88tBszpPuRuWXqRjKeiKpN371myCLDWNDXA3gxXjNareuYt8YUxZ83hciBiLA6ZJWzXJX'
const signer = Web3.Keypair.fromSecretKey(base58.decode(PRIVATE_KEY))
const PROG_ID = '79iH8j9YRTMNtCe6CXha4aPpRpnQPQVpkb5Nxa82fVUX'

async function main() {
    const transaction = new Web3.Transaction().add(new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: new Web3.PublicKey(PUBLIC_KEY),
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey(PROG_ID),
    }));
    
    const signiture = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [signer],

    )

    console.log('SIGNITURE:', signiture)

}

main().then(() => process.exit(0)).catch(err => {
    console.error(err)
})