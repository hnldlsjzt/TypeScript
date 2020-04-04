/**
 * 3.联合类型
 */
export default function part3() {
    let myType: string | number
    myType = "1"
    myType = 1
    // myType = false // Type 'false' is not assignable to type 'string | number'.

    // 访问联合类型的属性和方法
    // 当TS不确定一个联合属性的变量到底是属于哪个类型时，我们就只能访问联合类型中所有类型的共有属性或方法
    // function getLength(something: string | number): number {
    //     return something.length // Property 'length' does not exist on type 'string | number'. length不是string和number共有的方法
    // }

    // 联合类型在被赋值时，会自动类型推论
    let union: string | number
    union = 'string'
    console.log(union.length); // 6.
    union = 1 // 自动类型推论
    // console.log(union.length); // Type 'string' is not assignable to type 'number'.



}