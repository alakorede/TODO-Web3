// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;


//CRUD
//Create createTask()
//Read getTask()
//Update completeTask()

contract TaskManager {
    struct Task {
        uint256 id;
        uint256 createdAt;
        uint256 completedAt;
        uint256 dueDate;
        string title;
        string description;
        bool isCompleted;
        address owner;
    }

    Task[] public tasks;

    function cresteTask(string memory _title, string memory _description, uint256 _dueDate) public {
        Task memory newTask = Task({
            id: tasks.length + 1,
            createdAt: block.timestamp,
            completedAt: 0,
            dueDate: _dueDate,
            title: _title,
            description: _description,
            isCompleted: false,
            owner: msg.sender
        });
        tasks.push(newTask);

        emit TaskCreated(newTask.id, newTask.title, newTask.description, newTask.dueDate, newTask.createdAt, newTask.completedAt, newTask.owner);
    }

    event TaskCreated(uint256 id, string title, string description, uint256 dueDate, uint256 createdAt, uint256 completedAt, address owner);

    function getTask(uint256 _id) public view returns (Task memory) {
        require(_id > 0 && _id <= tasks.length, "Task does not exist");
        return tasks[_id - 1]; // Adjust for zero-based index
    }

    event TaskCompleted(uint256 id, uint256 completedAt);
    // error Unauthorized();
    // error AlreadyCompleted();

    function completeTask(uint256 _id) public {
        require(_id > 0 && _id <= tasks.length, "Task does not exist");
        Task storage task = tasks[_id - 1]; // Adjust for zero-based index
        require(!task.isCompleted, "Task already completed");
        require(task.owner == msg.sender, "Only the owner can complete the task");

        task.isCompleted = true;
        task.completedAt = block.timestamp;

        emit TaskCompleted(task.id, task.completedAt);

        // if(task.owner != msg.sender) {
        //     revert Unauthorized();
        // }
        // if(task.isCompleted == true) {
        //     revert AlreadyCompleted();
        // }
        // task.isCompleted = true;
        // task.completedAt = block.timestamp;
    }

//     mapping(uint256 => Task) private tasks;
//     uint256 private taskCount;

//     event TaskCreated(uint256 id, string description);
//     event TaskCompleted(uint256 id);

//     function createTask(string memory _description) public {
//         taskCount++;
//         tasks[taskCount] = Task(taskCount, _description, false);
//         emit TaskCreated(taskCount, _description);
//     }

//     function getTask(uint256 _id) public view returns (Task memory) {
//         require(_id > 0 && _id <= taskCount, "Task does not exist");
//         return tasks[_id];
//     }

//     function completeTask(uint256 _id) public {
//         require(_id > 0 && _id <= taskCount, "Task does not exist");
//         tasks[_id].completed = true;
//         emit TaskCompleted(_id);
//     }
// }
}
