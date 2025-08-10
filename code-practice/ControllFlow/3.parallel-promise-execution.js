async function task1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("From task 1")
        }, 2000)
        
    })
}

async function task2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("From task 2")
        }, 1000)
    })
}

async function task3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("From task 3")
        }, 3000)
    })
}

async function callAllTasks() {
 // Run tasks in parallel using Promise.all
        const tasks = [task1(), task2(), task3()];
        // Log results as they complete
        await Promise.all(tasks.map(async (task, index) => {
            const result = await task;
            console.log(`Result ${index + 1}: ${result}`);
        }));
        console.log("All tasks completed");
}

callAllTasks();