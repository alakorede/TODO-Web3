export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

export const contractABI = [
        {
            "type": "function",
            "name": "completeTask",
            "inputs": [
                { "name": "_id", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createTask",
            "inputs": [
                {
                    "name": "_title",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_description",
                    "type": "string",
                    "internalType": "string"
                },
                {   
                    "name": "_dueDate",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "getTask",
            "inputs": [
                { "name": "_id", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct TaskManager.Task",
                    "components": [
                        {
                            "name": "id",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "createdAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "stake",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "completedAt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "dueDate",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "title",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "description",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "isCompleted",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "owner",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tasks",
            "inputs": [
                { "name": "", "type": "uint256", "internalType": "uint256" }
            ],
            "outputs": [
                { "name": "id", "type": "uint256", "internalType": "uint256" },
                {
                    "name": "createdAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "stake",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "completedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "dueDate",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                { "name": "title", "type": "string", "internalType": "string" },
                {
                    "name": "description",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "isCompleted",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tasksCount",
            "inputs": [],
            "outputs": [
                { "name": "", "type": "uint256", "internalType": "uint256" }
            ],
            "stateMutability": "view"
        },
        {
            "type": "event",
            "name": "TaskCompleted",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "createTask",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "completedAt",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TaskCreated",
            "inputs": [
                {
                    "name": "id",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "dueDate",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "stake",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "completedAt",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "description",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "createdAt",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "isCompleted",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "title",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        { "type": "error", "name": "AlreadyCompleted", "inputs": [] },
        { "type": "error", "name": "Unauthorized", "inputs": [] }
]
