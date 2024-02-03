const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value - 1, fn) : value;
}

countdown(10, value => console.log(value))

const countdown1 = (value, fn, delay = 1000) => {
    fn(value)
    return (value > 0) ? setTimeout(() => countdown(value - 1, fn), delay) : value;
}

countdown1(10, value => console.log(value))
