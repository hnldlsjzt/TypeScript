/**
 * class和接口
 * 接口对类进行抽象
 * 
 */

export default function part4() {
    // 类实现接口:implements
    void function () {
        interface Alarm {
            alert(): void
        }
        class Door { }

        class SecurityDoor extends Door implements Alarm {
            alert() {
                console.log('SecurityDoor alert');

            }
        }

        class Car implements Alarm {
            alert() {
                console.log('cat alert');

            }
        }
    }()

    // 一个类实现多个接口
    void function () {
        interface Alarm {
            alert(): void
        }

        interface Light {
            lightOn(): void
            lightOff(): void
        }

        class Car implements Alarm, Light {
            alert() {
                console.log('car alrt');
            }

            lightOn() {
                console.log('on');

            }

            lightOff() {
                console.log('off');

            }
        }
    }()

    // 接口继承接口
    void function () {
        interface Alarm {
            alert(): void
        }

        interface LightAlarm extends Alarm {
            lightOn(): void
            lightOff(): void
        }

        const light: LightAlarm = {
            alert: () => { },
            lightOff: () => { },
            lightOn: () => { }
        }
    }()

    // 接口继承类

    void function () {
        class Point {
            x: number
            y: number
            constructor(x: number, y: number) {
                this.x = x
                this.y = y
            }
        }

        interface Point3d extends Point {
            z: number
        }
        let point3d: Point3d = {
            x: 1,
            y: 2,
            z: 3
        }
        console.log(point3d);


        // 为什么接口还能继承类。在声明class Point时，除了创建Point类，同时也创建了一个名为Point的interface.所以2个都可以用
        // 等价于
        void function () {
            class Point {
                x: number
                y: number
                constructor(x: number, y: number) {
                    this.x = x
                    this.y = y
                }
            }

            interface PointInterface {
                x: number
                y: number
            }
            function printPoint(p: PointInterface) {
                console.log(p.x, p.y);

            }
            printPoint(new Point(1, 2))

        }()

    }()





}

