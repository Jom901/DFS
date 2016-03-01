# A node.js implementation of a simple DFS

## Summary
This is a project based on the final project of my Operating Systems class. The idea is to make a simple distributed file system and learn some Node.js in the process. This respository will contain 3 different 'applets' so to speak. A metadata server, which contains information on the DFS' file system, a datanode, which receives chunks of the files stored in the DFS, and a client which is capable of enacting different capabilities. Currently a work in progress.

### Current feature list:

 * A metadata server that creates a database of Nodes to, well, keep track of nodes that contain file chunks. Currently configurated for sqlite3.
 * This database also keeps track of file paths in the distributed file system.
 * Datanode which registers with the metadata server.
### To be implemented

 * Client to access the DFS 
 * Datanode storing chunks
 * Client - Datanode interactions