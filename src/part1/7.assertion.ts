/**
 * 类型断言：用于手动指定一个值的类型
 * 语法：值 as 类型 || <类型>值，
 * PS:在tsx中只能使用as,因为在jsx中<>使用会带来语法的解析困难。而<类型> 这种还可能是泛型的意思，所以还是使用as
 */

export default function part7() {
    // 类型断言的用处

    // 将一个联合类型断言为其中一个类型，之前提到过，当TS不确定一个联合类型的变量到底是哪个类型时，我们只能访问联合类型中所有类型的共有属性和方法
    interface Cat {
        name: string
        run(): void
    }
    interface Fish {
        name: string
        swim(): void
    }

    function getName(animal: Cat | Fish) {
        return animal.name
    }
    // 在某些时候，我们确实在还不确定类型的时候就访问其中一个类型特有的属性或方法
    function isFish(animal: Cat | Fish): boolean {
        // swim不是共有方法，Cat上没有，    
        // if (typeof animal.swim === 'function ') {
        //     return true
        // }
        // return false

        // 我们可以使用类型断言。 需要注意的是，断言只能欺骗TS检验，无法避免运行时的报错 
        if (typeof (animal as Fish).swim === 'function') {
            return true
        }
        return false
    }

    function swim(animal: Cat | Fish) {
        (animal as Fish).swim()
    }
    // const tom: Cat = {
    //     name: 'tom',
    //     run() {
    //         console.log('1')
    //     }
    // }

    // swim(tom);// Uncaught TypeError: animal.swim is not a function
    // 使用断言时，需要格外的注意，调用方法和深层的属性，以减少运行时的错误


    // 将任何一个类型断言为any，any类型上，访问任何属性都是允许的
    // window.foo = 1// error
    (window as any).foo = 1
    // any是TS的最后一个手段，使用它极可能会掩盖真正的类型错误,如果不是非常确定，还是不要使用any
    // 但是也不要完全否认any的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡，才能发挥出TS的最大价值


    // 将any断言为一个具体的类型
    // 对历史遗留代码设置为any的我们也可以改造成精确的类型
    function getCacheData(key: string): any {
        console.log(key);

        return (window as any).cache[key]
    }
    interface Cat {
        name: string
        run(): void
    }

    // const tom1 = getCacheData('tom') as Cat
    // tom1.run()

    // 双重断言
    // 1.任何类型都可以断言为any
    // 2.any可以被断言为任何类型
    // 那么是不是可以使用双重断言 as any as Foo来将任何一个类型断言为任何另一个类型呢
    void function () {
        interface Cat {
            run(): void
        }
        interface Fish {
            swim(): void
        }
        function testCat(cat: Cat) {
            // return (cat as Fish)// Cat和Fish不兼容，直接as Fish 报错
            return (cat as any as Fish)
            // 使用双重断言，可以打破【要使得A能够被断言为B，需要A兼容B或者B兼容A】
            // 都不兼容的情况下去使用双重断言,很可能会导致运行时错误
            // 结论 除非迫不得已，不要使用双重断言
        }
    }()

    // 类型转换和类型断言:类型断言只在TS编译时起作用，编译后会被删除
    void function () {

        function toBoolean(somethind: any): boolean {
            return somethind as boolean
        }
        console.log('类型断言是否会类型转换：', toBoolean(1))// 答案是：并不会转换类型

        function toBoolean1(somethind: any): boolean {
            return Boolean(somethind)// 需要手动的转换
        }
        console.log('类型断言是否会类型转换：', toBoolean(1), toBoolean1(1))
    }()


    // 类型转换和类型声明
    void function () {
        interface Animal {
            name: string
        }
        interface Cat {
            name: string
            run(): void
        }
        const animal: Animal = {
            name: 'tom',
        }
        let tom = animal as Cat //ok
        // let tom: Cat = animal // Property 'run' is missing in type 'Animal' but required in type 'Cat'.

        /**
         * 类型断言和赋值的区别：
         * animal【断言】为cat，只需要满足animal兼容cat或者cat兼容animal即可
         * animal【赋值】给cat，需要满足cat兼容animal才行
         * 类型声明比类型断言更严格
         */

    }()


    // 类型断言与泛型
    void function () {
        function getCache<T>(key: string): T {
            return (window as any).cache[key]
        }
        interface Cat {
            name: string
            run(): void
        }
        // const tom = getCache<Cat>('tom')
        // tom.run()

    }()
}