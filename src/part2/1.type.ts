/**
 * 类型别名
 * 常用语联合类型
 */

export default function part2() {
    void function () {
        // example
        type Name = string
        type NameResolver = () => string
        type NameOrResolver = Name | NameResolver

        function getName(n: NameOrResolver): Name {
            if (typeof n === 'string') {
                return n
            } else {
                return n()
            }
        }
    }()

    // 字符串字面量类型：用来约束取值只能是某几个字符串中的一个
    void function () {
        // example
        type EventName = 'click' | 'scroll' | 'mousemove'
        type content = 'left' | 'center' | 'right'
        interface Props {
            colums: content
        }
        function handleEvent(ele: Element, event: EventName) {

        }
        let props: Props = {
            colums: "left"
        }
        // haneldEvent(document.getElementById('app'), 'click')
        handleEvent(document.querySelectorAll('.app')[0], 'scroll');  // 没问题
        // handleEvent(document.querySelectorAll('.app')[0], 'dbclick');  // 类型“"dbclick"”的参数不能赋给类型“EventName”的参数。
    }()
}