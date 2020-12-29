const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve('Do something Async'), 3000)
        : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('before1')
doSomething()
console.log('after1')

const anotherfunction = async () => {
    try{
        const something = await doSomethingAsync()
        console.log(something)
    }catch{
        console.error(error)
    }
}

console.log('before2')
anotherfunction()
console.log('after2')