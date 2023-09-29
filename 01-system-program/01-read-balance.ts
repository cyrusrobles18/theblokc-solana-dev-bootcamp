import * as Web3 from '@solana/web3.js'
const PUBLIC_KEY = 'HiXn35uYRBpsi8cHRrUkDXAfc5hCYPmJymU2N1DZ7WcP';
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
async function main() {

    const bal = await connection.getBalance(new Web3.PublicKey(PUBLIC_KEY))
    const balWhole = bal / Web3.LAMPORTS_PER_SOL

    console.log('SOL BALANCE: ' + balWhole)

    // console.log('SOL BALANCE: ' + await new Web3.Connection(Web3.clusterApiUrl('devnet')).getBalance(new Web3.PublicKey('HiXn35uYRBpsi8cHRrUkDXAfc5hCYPmJymU2N1DZ7WcP')) / Web3.LAMPORTS_PER_SOL)
}

main()

//npx ts-node | tsx <FILENAME>
//bun <FILENAME>