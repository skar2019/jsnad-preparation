async function callCustomerAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'customId': ['1', '2', '3']});
        }, 1000);
    })
}

async function callUserAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'userId': ['4', '5', '6']});
        }, 2000);
    })
}

async function callAPIs() {
    const [customerData, userData] = await Promise.all([callCustomerAPI(), callUserAPI()]);

    const combined =  {
      user: customerData,
      posts: userData
    };

    console.log('Both API called');
    console.log(combined);
}

callAPIs()