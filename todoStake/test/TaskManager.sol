// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TaskManager} from "../src/TaskManager.sol";

contract TaskManagerTest is Test {
    TaskManager public taskManager;

    function setUp() public {
        taskManager = new TaskManager();
    }

    function test_CreateTask() public {
        address owner = address(this);
        vm.label(owner, "owner");
        vm.prank(owner);
        vm.expectEmit();
        emit TaskManager.TaskCreated(1, "Test Task", "This is a test task", block.timestamp + 1 days, block.timestamp, 0, owner);
        taskManager.cresteTask("Test Task", "This is a test task", block.timestamp + 1 days);
        
        TaskManager.Task memory task = taskManager.getTask(1);
        assertEq(task.id, 1);
        assertEq(task.title, "Test Task");
        assertEq(task.description, "This is a test task");
        assertTrue(task.isCompleted == false);
        assertEq(task.dueDate, block.timestamp + 1 days);
        assertEq(task.createdAt, block.timestamp);
        assertEq(task.completedAt, 0);
        assertEq(task.owner, owner);
    }

    function testCompleteTask() public {
        taskManager.cresteTask("Test Task", "This is a test task", block.timestamp + 1 days);
        taskManager.completeTask(1);
        assertEq(taskManager.getTask(1).isCompleted, true);
    }

    function testeCompleteTaskUnauthorized() public {
        taskManager.cresteTask("Test Task", "This is a test task", block.timestamp + 1 days);
        address unauthorizedUser = address(0x123);
        vm.label(unauthorizedUser, "unauthorizedUser");
        vm.prank(unauthorizedUser);
        
        vm.expectRevert("Only the owner can complete the task");
        taskManager.completeTask(1);
    }

    function testCompleteTaskAlreadyCompleted() public {
        taskManager.cresteTask("Test Task", "This is a test task", block.timestamp + 1 days);
        taskManager.completeTask(1);
        
        vm.expectRevert("Task already completed");
        taskManager.completeTask(1);
    }
}
