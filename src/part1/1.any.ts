export default function part1() {
    // 什么是任意类型，在ts中 普通类型是不允许被改变的 

    let myFavorite: string = 'book'
    // myFavorite = 1 //不能将类型“1”分配给类型“string”。

    // 但如果是any类型则允许被赋值为任意类型
    let myFavorite1: any = 'book'
    myFavorite1 = 7

    // 任意值的属性和方法，在任务属性上访问都是允许的
    let anyThing: any = 'hello'

    // 任意属性
    console.log(anyThing.myName);
    console.log(anyThing.myName.fristName);
    // 任意方法
    console.log(anyThing.setName('Jerry'));

    // 未声明类型的变量，
    // 变量在未声明时，未指定其类型，那么就会被类型推论未任意值类型（any)
    let myAny;// 等价于 myAny:any
    myAny = 1
    myAny = '1'
    myAny = Boolean




}
