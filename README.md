# TheBlock
The Block Seminar
    This is a source code for The Block Seminar
    NAME: Mr. Cyrus Rj W. Robles
    CCIT FACULTY

NOTES:
    SOLANA: 
     Expectations
       - Hands-on
       - Learn Collaboratively
       - Open discussion

    House Rules 
       - Refrain from using mobile phones
       - Ask Question
       - Submit assessment on time
       - Attendance
       - Take notes

    What you will Learn
       - Blockchain
       - Solana
       - Terminologies
       - System Program
       - Networks
       - Solona Program Library
       - Token Program
       - Create own NFT
       - Metaplex
       - Anchor framework 
       - aApp Integration with Solana

Solana 101
  - First Block March 16 2020
  - Consensus: Proof of Stake
    Why Solana?
      - Fast
        >> 4,090 per stransact
      - Scalable
      - Decentralize
      - Energy Efficient

    Token
      - Native Token: Sol
      Lampart
        - Fractional
    Account
        const solanaWeb3 = require('@solana/web3.js');
        // Connect to the cluster
        const connection = new solanaWeb3.Connection(
        solanaWeb3.clusterApiUrl('devnet'),
        'confirmed'
        );
        // Generate a new keypair and airdrop SOL
        (async () => {
        const keypair = solanaWeb3.Keypair.generate();
        console.log('Generated keypair:', keypair);

        const airdropSignature = await connection.requestAirdrop(
            keypair.publicKey,
            solanaWeb3.LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(airdropSignature);

        const balance = await connection.getBalance(keypair.publicKey);
        console.log('Balance:', balance);
        })();

        >> Solana Transaction -> Read >> Process >> Transmit
        >> KeyPairs
          - Public key refers to accounts
          - Private organization key
          1 Sol ->> 1B Lamports

        RUN TYPESCRIPT
        >> npx ts-node | tsx <FILENAME>
        >> bun <FILENAME>
        SET SOLANA
        >> npm i -g solana-key-decoder-cli
        >> npx solana-key-decoder-cli <private-key>
        >> solana config set -k <path-here>
        >> solana config set -u devnet
        >> solana airdrop
        >> solana balance

        
          