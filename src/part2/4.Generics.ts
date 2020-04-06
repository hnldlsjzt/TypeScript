/**
 * 泛型：在定义函数、接口、类的时候，在不预先指定具体的类型，而在使用的时候在执行类型的一种特性
 */

export default function part2() {
    // 下面代码虽然不会报错，但是返回值没有精确的指定，理想情况应该是value的类型
    void function () {
        function createArray(len: number, value: any): Array<any> {
            let result = []
            for (let i = 0; i < len; i++) {
                result[i] = value
            }
            return result
        }
        console.log(createArray(3, 'x'))
    }()

    // 使用泛型指定
    void function () {
        function createArray<T>(len: number, value: T): Array<T> {
            let result = []
            for (let i = 0; i < len; i++) {
                result[i] = value
            }
            return result
        }
        console.log(createArray(3, 1))// 这个<string>可以不写，让TS自动推论
    }()

    // 多个参数类型
    void function () {
        function swap<T, U>(tuple: [T, U]): [U, T] {
            return [tuple[1], tuple[0]]
        }
        console.log(swap([7, 'tuple']))
    }()

    // 泛型约束:在函数内部使用泛型变量的时候，由于事先不知道他的类型，所以不能随意的操作他的属性和方法
    void function () {
        // function loggin<T>(arg: T): T {
        //     // console.log(arg.length);
        //     return arg.length// arg上不一定存在len属性，所以报错
        // }


        interface Lengthwise {
            length: number
        }
        // 对传入的参数做限制，必需传入有length属性的变量
        function loggin<T extends Lengthwise>(arg: T): T {
            console.log(arg.length);
            return arg
        }
        loggin('1')
    }()

    // 泛型接口
    void function () {
        interface SearchFun {
            (source: string, subString: string): boolean
        }
        let mySearch: SearchFun
        mySearch = function (source: string, subString: string): boolean {
            return source.search(subString) !== -1
        }

        // 使用泛型来定义
        void function () {
            interface CreateArrayFunc {
                <T>(length: number, value: T): Array<T>
            }
            let createArray: CreateArrayFunc
            createArray = function <T>(length: number, value: T): Array<T> {
                let result = []
                for (let i = 0; i < length; i++) {
                    result.push(value)
                }
                // 函数声明类型不为void和any的，必需有返回值
                return result
            }
            console.log('泛型', createArray(3, 1))
            console.log('泛型', createArray(3, 'x'))
        }()
        // 使用泛型来定义
        void function () {
            interface CreateArray<T> {
                (length: number, value: T): Array<T>
            }
            let createArray: CreateArray<any>
            createArray = function <T>(length: number, value: T): Array<T> {
                let result: T[] = []
                for (let i = 0; i < length; i++) {
                    result.push(value)
                }
                return result
            }
            console.log('泛型', createArray(3, 1))
            console.log('泛型', createArray(3, 'x'))
        }()

    }()

    // // 泛型类
    // void function () {
    //     class GenericNumber<T>{
    //         zeroValue: T;
    //         add: (x: T, y: T) => T
    //     }
    //     let my = new GenericNumber<number>()
    //     my.zeroValue = 0
    //     my.add = function (x, y) {
    //         return x + y
    //     }
    // }()

    // 泛型的默认值:当使用泛型时没有在代码中直接指定类型参数，从实际参数中也无法推测时，默认参数就会起作用
    void function () {
        function createArray<T = string>(length: number, value: T): Array<T> {
            let result = []
            for (let i = 0; i < length; i++) {
                result.push(value)
            }
            return result
        }
        console.log(createArray(3,1))
    }()


}