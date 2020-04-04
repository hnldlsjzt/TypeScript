export default function port4() {
    // 什么是接口？ 
    // 1.对类的一部分进行抽象
    // 2.对对象的形状进行描述

    // example1 nomal
    void function () {
        interface Person {
            name: string
            age: number
        }

        // 完全按照接口的形状去书写，属性不能多也不能少
        const tom: Person = {
            name: 'tom',
            age: 1,// 缺少它 Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
            // gender:'male' //  Object literal may only specify known properties, and 'gender' does not exist in type 'Person'. 只能指定已知属性
        }
    }()


    // 可选属性
    // 应用场景：希望不要完全匹配一个形状，那么可以使用可选属性
    // 但仍然不允许添加未定义的属性
    void function () {
        interface Person {
            name: string
            age: number
            gender?: string | boolean
        }

        const tom: Person = {
            name: 'tom',
            age: 18,
            gender: true // 可选
            // height: 180 // 当多了个属性，Object literal may only specify known properties, and 'height' does not exist in type 'Person'.
        }

    }()

    // 任意属性
    void function () {
        interface Person {
            name: string
            age: number
            gender?: string | boolean
            [propsName: string]: any
            // [propsName: any]: any // An index signature parameter type must be either 'string' or 'number'.
            // 索引签名类型必需是string 或 number类型
            // 一旦使用了索引类型，其他已定义属性必需是他的子类
            // 如any改成string ,那aget gender都会报错，因为不是string子类
        }

        const tom: Person = {
            name: 'tom',
            age: 18,
            gender: true, // 可选
            link: 'eat'
        }

    }()

    // 只读属性 readonly
    void function () {
        interface Person {
            readonly name: string
            age: number
            gender?: string | boolean
            [propsName: string]: any
            // [propsName: any]: any // An index signature parameter type must be either 'string' or 'number'.
            // 索引签名类型必需是string 或 number类型
            // 一旦使用了索引类型，其他已定义属性必需是他的子类
            // 如any改成string ,那aget gender都会报错，因为不是string子类
        }

        const tom: Person = {
            name: 'tom',
            age: 18,
            gender: true, // 可选
            link: 'eat'
        }
        tom.age = 19 // ok
        // tom.name = '' //Cannot assign to 'name' because it is a read-only property.

    }()






}