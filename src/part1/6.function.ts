// 一等公民-函数的使用

export default function part6() {

    void function () {
        // 函数声明
        function sum1(x: any, y: any) {
            return x + y
        }

        // 函数表达式
        const sum2 = function (x: any, y: any) {
            return x + y
        }
    }()

    // 对函数参数进行类型定义
    void function () {
        // 函数声明
        function sum1(x: number, y: number): number {
            return x + y
        }

        // 函数表达式
        const sum2 = function (x: number, y: number): number {
            return x + y
        }
        // 参数多了少了都不行
        // sum1(1)// 应有 2 个参数，但获得 1 个。
        // sum1(1, 2, 3)// 应有 2 个参数，但获得 3 个。

        const sum3: (x: number, y: number) => number = function (x, y) {
            return x + y;// 上面定义了返回值，就必需返回指定的类型
        }
        // sum3(1, '')// 类型错误
        // sum3(1)// 缺少参数
        sum3(1, 2)
    }()

    // 用接口定义函数的形状
    interface SearchFunc {
        (source: string, subString: string): boolean
    }
    let mySearch: SearchFunc
    mySearch = function (source, substring) {
        return source.search(substring) !== -1
    }

    void function () {
        // 可选参数，上文提到参数个数必需完整匹配，那如何做到定义可选参数呢
        function buildName(fristName: string, lastName?: string): string {
            return lastName ? fristName + lastName : fristName
        }
        console.log(buildName('tom', 'cat'))
        console.log(buildName('tom'))
    }()

    // 参数默认值,有了默认值后，可以不写 ？(可选参数)。 TS会将添加了默认值的参数识别为可选参数
    void function () {
        // 1. 可选参数定义在最后面
        function buildName1(fristName: string, lastName?: string): string {
            return lastName ? fristName + lastName : fristName
        }

        // 2. 使用【默认值】代替?且定义在【最后面】
        function buildName2(fristName: string, lastName: string = 'cat'): string {
            return lastName ? fristName + lastName : fristName
        }

        // 3. 【最前面参数】项使用【可选】参数, 【返回值】需要重新定义 string| undefined || any
        function buildName3(fristName?: string, lastName: string = 'cat'): string | undefined {
            return lastName ? fristName + lastName : fristName
        }

        // 4. 【最前面参数】项使用默认值代替,返回值还是string
        function buildName4(fristName: string = 'tom', lastName: string): string {
            return lastName ? fristName + lastName : fristName
        }
        console.log(buildName4(undefined, 'cat1'))

        // console.log(buildName('tom1'))
    }()

    // 剩余参数
    void function () {
        // 使用...rest来获取剩下参数
        function push(array: Array<any>, ...items: any[]) {
            // 箭头函数定义类型需要加上括号
            items.forEach((item: any) => {
                array.push(item)
            })
        }
        let a: any[] = []
        push(a, 1, 2, 3)
    }()

    // 函数重载
    void function () {
        function reverse(x: number): number
        function reverse(x: string): string
        function reverse(x: number | string): number | string | undefined {
            if (typeof x === 'number') {
                return Number(x.toString().split('').reverse().join(''))
            } else if (typeof x === 'string') {
                return x.split('').reverse().join('')
            }

        }
        console.log(reverse('1,2,3'))

    }()
}





