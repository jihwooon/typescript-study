const mergeExtend = <T extends string, U extends object>(objA: T, objB: U) => {
    return Object.assign(objA, objB)
}

const mergedExtendObj = mergeExtend<
    string,
    { age: number }
>('Max', { age: 30 })
console.log(mergedExtendObj)
