import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import 'dotenv/config'
import base58 from 'bs58'

const url = Web3.clusterApiUrl('devnet')
const connection = new Web3.Connection(url);
const PUBLIC_KEY = new Web3.PublicKey('HiXn35uYRBpsi8cHRrUkDXAfc5hCYPmJymU2N1DZ7WcP');
const decodedKeyPair = Web3.Keypair.fromSecretKey(base58.decode(process.env.PRIVATE_KEY as any))
const tokenMint = new Web3.PublicKey('sKfUNja3P16Pk4ogmQjLYmk8nJugu7tgP6qNfQhH5Le');
const PRIVATE_KEY = '2iG3aN1xeV6yfa1DQmH88tBszpPuRuWXqRjKeiKpN371myCLDWNDXA3gxXjNareuYt8YUxZ83hciBiLA6ZJWzXJX'
const tokenAccount = 'DivYPfo5kJeuuoJfKcE9wPKAEQkxzauLR2fWZk6JkGt'
async function main() {
  // To mint
  console.log('TOKEN ACCOUNT: ' + tokenAccount)
  const signer = Web3.Keypair.fromSecretKey(base58.decode(PRIVATE_KEY))
  const minTo = await token.mintTo(
    connection,
    decodedKeyPair,
    PUBLIC_KEY,
    new Web3.PublicKey(tokenAccount),
    PUBLIC_KEY,
    200000
  );
  
}

main()