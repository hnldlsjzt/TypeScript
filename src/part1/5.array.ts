// 数组的类型

// 【类型 + 方括号】表示法
// 最简单的方法
let fib: number[] = [1, 2, 3];// 只允许数组中出现数字
// let fib: number[] = [1, 2, 3, '1'];// 只允许数组中出现数字,
fib.push(5)// ok
// fib.push('1')// 非number不允许出现

// 数组泛型
const fib1: Array<number> = [1, 2, 3]// 和上面只是定义类型的方式不同

// 接口来定义数组
interface NumberArray {
    [index: number]: number//  表示索引只能是数字，占位符只能是number和string类型
}
let fix2: NumberArray = [1, 2, 3]

// 类数组
function sum() {
    let args: {
        [index: number]: number
        length: number
        callee: Function
    } = arguments
}

// 数组中可以任意类型
let list: any[] = [{ a: 1 }, 'name', 18]