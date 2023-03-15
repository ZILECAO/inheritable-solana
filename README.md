## Hackathon Supplementals

### Extra Links

Slide Deck: https://docs.google.com/presentation/d/1y7aFhTgXRT0kUugmepj17SMQB-stcUpSZg4qx7Pntqg/edit#slide=id.g21c90c5dd05_8_188

Twitter: https://twitter.com/Inheritable_xyz

Live Website: https://inheritable-nextjs.vercel.app

![Inheritable UI](https://gateway.pinata.cloud/ipfs/QmVdp1PWSGuReLyXZQDPoLX46yps4QBQdFfCJRqApfsemy?_gl=1*a7z32h*_ga*Y2YyOTEzZDYtZDk3YS00MjQ1LTlmNTgtNDFjMDE0YjQxY2U4*_ga_5RMPXG14TE*MTY3ODg2ODM2NC43LjAuMTY3ODg2ODM2NS41OS4wLjA.)

---

### 1. Why did you build your project?

Although Web3 assets are relatively new, it’s always important to plan for the future, and when looking at options for passing down Web3 assets, we found no compelling solutions. As a result, we built Inheritable to provide a publicly verifiable and quantum resistant solution to Web3 asset inheritance.

Our infrastructure method of anchoring Merkle Tree root hashes to Solana provides an exponential return on scalability, with GDPR-compliant privacy to boot.
* To put all of the data for a Will on-chain would be prohibitively expensive; putting just the Merkle Tree root hash is very feasible however, moreso when it’s done on a L1 like Solana. 
* Putting the data directly on-chain would also be illegal to boot, as GDPR compliance necessitates an erasure obligation, and you cannot delete from public blockchains.
* Our quantum-resistant dilithium signatures also are a novel way to guarantee that the will won’t be spoofed even in a future scenario where quantum computing is prevalent.
* Finally we love that we can use technology like Weavechain to leverage all of this security technology without having to build it from scratch. We believe that the future of Web3 is dependent on leveraging composable tools and frameworks, and hope that other projects see the potential of this approach.


---

### 2. How was it built?

Frontend Stack: We use react, next.js, and tailwind css to build our interactive UI. We also use Web3.js to connect our Phantom wallet to the app from the browser. 

Backend Stack: Inheritable is built on top of Solana and utilizes the Weavechain API. Our frontend code makes a call to a public Weavechain API Node that is configured with two specific Solana Program Accounts (one for writing hashes of the wills and one for oracle voting & unlocking of wills). See more documentation about the Weavechain API here: https://docs.weavechain.com/api.html. 
* When the Estate writes some claims, Weavechain will automatically create a private table in a local database on the machine which the node is hosted on and store the sensitive data there. Weavechain will then hash the raw data and organize it in a Merkle Tree data structure and store its root hash on Solana with a dilithium signature attached for Quantum Resistance. 
* Later, when a benefactor is retrieving or verifying a claim, the Weavechain node will automatically check the raw data that is stored in the data base, put it through the same hashing algorithim as before, and on the condition that both are the same, will return its actual value. The data stored in the private local databases will be encrypted. 

Design: We used various tools like Figma and Canva to initially design our UI and logos. We then implemented these desgins in our final dapp.

---

### 3. Testing instructions for Judges

Step 1: Writing a claim: 

* Unfortunately, at the moment only the Solana wallet address [ 7oATF4u22gFYsYKfgFV7AJZRztkNCtxx71ZCGTjZg9Le ] is able to write and hash Wills to https://explorer.solana.com/address/3uCfjcPxnvWyNRSpBQKcDwpBmuAaXraPw8v7SzKicfmq?cluster=testnet, and this account is the personal testnet account for our backend developer so it is not easy to share publicly here.
* The dApp is configured so that visitors of the site cannot write a Will successfully with their personal wallet accounts (If judges would like to test writing please reach out to zilecao@sas.upenn.edu and we can share the Estate testing account private key with you).
* Luckily, visitors can run through the other three pages in the flow safely: Oracle View, Check Claim, and Verify Claims
* For testing purposes, we have already set up a clean Will that has been hashed onto Solana with the information displayed in the text boxes when you view the Estate Write page

--

Step 2: Voting on the Decentralized Oracle of Death:

* Judges will need to add the following private keys to their Phantom wallet: [3XtpHubkVUZo6L1bvwvWhKySFcLMSfXfSyzEXXZmgkqm1JCuhh55S6oKWrXjGVCYuYfi3ipdb9DJCxpoN3LkrUZG] and [2qpMPEs8zKhiokHaybLLkevdoyfyDd719mVDa9Ygn6ETh94dfnL9xUTXesoQyQbPcn9oPrxNepxvm1GgiwHj9MGo]. These are the dummy accounts we have set up with some test SOL. 
* Make sure Phantom wallet is set to the TESTNET through developer settings. DevNet and Mainnet will not work here.
* These two accounts will be able to vote on the Decentralized Oracle of Death once you click 1. Connect Wallet and then 2. Bear witness to death 
* The tracker on the right-hand side should automatically increment once the wallet has signed the message successfully, and once 2 of 3 witnesses have signed, the Will will be unlocked.

--

Step 3: Retrieving a claim:

* Only once the Will has been unlocked, the two dummy wallet addresses that you have imported from above will be able to go here and view the information of a claim that has been bequeathed to them by 1. Connecting wallet and 2. Click to Retrieve Claim

--

Step 4: Verifying a claim: 

* Any Solana wallet account can come in to verify whether a claim is true or false. The reason we implemented this feature is to prevent the case where a Lawyer might come in and claim an inaccurate inheritance for their dishonest benefactor. 
* For best testing results, go back to the Estate Write view and copy any one of the item descriptions word-for-word that is pre-written in the text field along with the Amount to the beneficiary number. 
* Paste these into their respective verify claim fields and then 1. Connect wallet and 2. Verify Claim. Our dApp should now return a Merkle Tree visual which will show whether the string of text that you have inputted appears in the original Will or not. Here, it should return successfully.  
* Try to change even one letter in the description field and run the 2. Verify Claim button again. You will notice that now the Merkle Tree will not contain the faulty value and will return an error. 


---


### 4. Project Demo/Walkthrough

Youtube: https://youtu.be/AS2wmoxLfF4

---

### 5. Future Outlook: 

---

### 6. Team Members: 

Zile Cao, Eric Chen, Paul Loh, Brandon Kong, Intel Chen, Winnie Wang, Aashika Vishwanath, and Nathaniel Luu (all students at the University of Pennsylvania)

![Team Pic](https://gateway.pinata.cloud/ipfs/QmRiZZJZWnDD9sWmPfMcPMPxSsx5D4JfFHP2ciTW11SF1y?_gl=1*1rd1zuu*_ga*Y2YyOTEzZDYtZDk3YS00MjQ1LTlmNTgtNDFjMDE0YjQxY2U4*_ga_5RMPXG14TE*MTY3ODg2ODM2NC43LjEuMTY3ODg2ODc5Mi41Ny4wLjA.)

---

### 7. Long Description

Inheritable is a Web3 Will solution for secure, decentralized inheritance that’s Anchored on Solana and powered by Weavechain.

Traditionally, inheritance is managed by a centralized party like a lawyer, whom estates pay to act as a trustworthy party that can declare when they're dead and distribute their assets. Inheritable decentralizes this process by building verifiable Merkle trees of claims, and then utilizing a consensus process among trusted witnesses to determine death. This process is then hardened by being anchored to the Base blockchain with Quantum-Resistant Dilithium signatures, and maintains GDPR compliance by leveraging off-chain storage.

Here’s a detailed breakdown,

1. Estates create verifiable Merkle Trees of claims that inheritors can validate against. 

2. Weavechain Anchors the hash of the Merkle Root into smart contracts on Base to give inheritors cryptographic guarantees that the Will hasn’t been tampered with.

3. Quantum-Resistant Dilithium signatures are used as well to further ensure that the will cannot be spoofed.

4. Estates identify Witnesses who make a consensus attestation to death as a replacement for a centralized lawyer. These attestations are also managed by Weavechain in a smart contract on Base.

5. GDPR compliance is maintained because Weavechain stores the raw data off-chain with the estate, so that the will can be revoked and changed if necessary.


These security features aren’t just jargon; they are essential building blocks that enable privacy-preserving verifiability. Inheritable brings these tools together to create a secure, decentralized, and trustworthy inheritance system.


## Localhost Quickstart

```
npm install
cd frontend
npm run dev
```
Note: use node version 19
