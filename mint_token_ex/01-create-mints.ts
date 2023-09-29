import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import 'dotenv/config'
import base58 from 'bs58'

const url = Web3.clusterApiUrl('devnet')
const connection = new Web3.Connection(url);
const PUBLIC_KEY = new Web3.PublicKey('HiXn35uYRBpsi8cHRrUkDXAfc5hCYPmJymU2N1DZ7WcP');
const decodedKeyPair = Web3.Keypair.fromSecretKey(base58.decode(process.env.PRIVATE_KEY as any))

async function main() {
    const tokenMint = await token.createMint(
        connection, decodedKeyPair, PUBLIC_KEY,PUBLIC_KEY, 9
    );
    console.log('TOKEN MINT: ' + tokenMint.toBase58())
}

main()