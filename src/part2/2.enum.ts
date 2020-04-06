/**
 * 枚举
 * 用于取值被限定在一定范围内的的场景，比如一周七天，颜色限定为红、绿、蓝
 * 枚举成员从0开始递增，同时也会对
 */

export default function part2() {

    // enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
    // console.log(Days[0], Days['Sun']);

    // 手动赋值，改了索引后，后面的值会跟着这个值递增
    // enum Days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat }
    // console.log(Days[0], Days[1], Days[2], Days['Sun']);

    // 手动赋值的枚举值可以不是数字，此时需要使用类型断言来然tsc无视类型检查（编译出来的js还是可以用的）
    enum Days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat = <any>"sat" }
    console.log(Days);

    // 常数项和计算所得项
    // enum Color { Red = 'red'.length, Green, Blue }
    enum Color { Green, Blue, Red = 'red'.length, }
    console.log(Color);


    // 常数枚举
    const enum Directions {
        Up,
        Down,
        Left,
        Right
    }
    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
    console.log(directions,directions[0]);
    

}