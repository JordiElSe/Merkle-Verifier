# Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script that will ask for a name through command line and then send it to the server. The server will then respond with a gift if the name is in the list of names.

## Server

You can run the server from the top-level directory with `node server/index`. This file verifies that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

## How it works
A merkle tree is generated with the list of names. The server only stores the 32 byte value of the root hash. The client sends the name to the server. The server then generates the merkle proof for the name and verifies it. It is valid, then the client's name is in the list and the server can send the gift.
