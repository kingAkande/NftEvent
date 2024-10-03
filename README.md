# On-Chain SVG NFT Smart Contract

This project contains a smart contract that mints NFTs with SVG images stored entirely on-chain. The images are generated as SVG and stored in the token metadata, which is returned in Base64 format.

## Features

- **On-chain SVG images**: The SVG image is stored on-chain and generated directly in the smart contract.
- **ERC721 standard**: The contract implements the ERC721 standard using OpenZeppelin's library.
- **Base64 encoding**: SVG and metadata are encoded in Base64 for on-chain storage.

## How It Works

1. **Minting an NFT**: Call the `createNFT` function to mint an NFT.
2. **SVG Generation**: The contract generates an SVG image (a blue rectangle with a yellow circle) in the `generateSVG` function.
3. **Token URI**: The `tokenURI` function returns the metadata, which includes the Base64-encoded SVG image.

