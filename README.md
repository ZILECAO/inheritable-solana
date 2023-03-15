![Inheritable UI](https://gateway.pinata.cloud/ipfs/QmVdp1PWSGuReLyXZQDPoLX46yps4QBQdFfCJRqApfsemy?_gl=1*a7z32h*_ga*Y2YyOTEzZDYtZDk3YS00MjQ1LTlmNTgtNDFjMDE0YjQxY2U4*_ga_5RMPXG14TE*MTY3ODg2ODM2NC43LjAuMTY3ODg2ODM2NS41OS4wLjA.)

## Hackathon Supplementals

### Extra Links

Slide Deck: https://docs.google.com/presentation/d/1y7aFhTgXRT0kUugmepj17SMQB-stcUpSZg4qx7Pntqg/edit#slide=id.g21c90c5dd05_8_188

Twitter: https://twitter.com/Inheritable_xyz

Live Website: https://inheritable-nextjs.vercel.app/writer_page

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

Backend Stack: Inheritable is built on top of Solana and utilizes the Weavechain API. Our frontend code makes a call to a public Weavechain API Node that is configured with two specific Solana Accounts (one for writing hashes of the wills and one for oracle voting & unlocking of wills). See more documentation about the Weavechain API here: https://docs.weavechain.com/api.html. 

Design: We used various tools like Figma and Canva to initially design our UI and logos. We then implemented these desgins in our final dapp.

---

### 3. Testing instructions for Judges


---


### 4. Project Demo/Walkthrough

Youtube: https://youtu.be/AS2wmoxLfF4


---

### 5. Team Members: 

Zile Cao, Eric Chen, Paul Loh, Brandon Kong, Intel Chen, Winnie Wang, Aashika Vishwanath, and Nathaniel Luu (all students at the University of Pennsylvania)

---

### 6. Long Description

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
