export function requestTime(req, res, next) {
    req.requestTime = Date.now()

    next() //эту функция нужна чтобы запустить новый middleware
}

export function logger(req, res, next) {  // тут мы будем выводить красиво данные с requestTime
    console.log(`req.time: ${req.requestTime}`)
    next()
}