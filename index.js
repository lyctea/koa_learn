function getSyncTime() {
    return new Promise((resolve, reject) => {
        try {
            let startTime = new Date().getTime()
            setTimeout(() => {
                let endTime = new Date().getTime()
                let data = endTime - startTime
                resolve(data)
            }, 500)
        } catch (err) {
            console.log('never log')
            reject(err)
        }
    })
}

async function getSyncData() {
    let time = await getSyncTime()
    let data = `endTime - startTime = ${time}`
    return data
}

async function getData() {
    let data = await getSyncData()
    console.log(data)
}

console.log(getData())

/**
 * async/await的特点
 * 可以让异步逻辑用同步写法实现
 * 最底层await返回需要是promise对象
 * 可以通过多层async function的同步写法代替传统的callback嵌套
 */