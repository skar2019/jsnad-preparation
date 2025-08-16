
async function Double(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 2);
        }, 1000)
    })
}

async function processArray(myArray) {
    for (const num of myArray) {
        const result = await Double(num)
        console.log(`Double of ${num} is ${result}`);
    }
}

const myArray = [1, 2, 3, 4, 5];
processArray(myArray) 
