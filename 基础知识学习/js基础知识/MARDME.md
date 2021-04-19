### JS 中的变量 variable

> 变量：可变的量， 在编程语言中，变量其实就是一个名字， 用来存储和代表不同的值
> 定义方式： `var`/`let`/`const`/`function`/`import`/`class`
> 变量没有类型， 只有值才有类型

```javacript
 // ES3
 var a = 12

//  ES6
let b = 100
const c = 100

// 创建函数也相当于在创建变量
function(){}

// 创建类也相当于创建变量
class A{}

// ES6的导入模块也相当于创建变量
import A from './a.js'

// Symbol 创建唯一值
let d = Symbol(100)
```

### JS 中的命名规范

- 严格区分大小写
- 使用数字，字母，下划线，$ , 数字不能作为开头
- 使用驼峰命名法：首字母小写，其余每一个有意义的单词的首字母都要大写
- 当下有特殊含义的关键字和未来可能成为关键字的保留字不能使用

### JS 中常用的数据类型

- 基本数据类型
  - 数字 number
    常规数字和 NaN
  - 字符串 string
    所有单引号，双引号，反引号包起来的都是字符串
  - 布尔 boolean
  - 空对象指针 null
  - 未定义 undefined
  - 符号 symbol
- 引用数据类型
  - 对象数据类型
    - {} 普通对象
    - [] 数组对象
    - 正则对象
    - Math 数学函数对象
    - 日期对象
    - ...
  - 函数数据类型 function

#### number 数字类型

> 包含：常规数字和 NaN

##### NaN

- NaN: 不是一个数，但是属于数字类型
  NaN 和任何值(包括自己)都不相等： `NaN != NaN`, 我们不能使用相等的方式判断是否是有效数字

- isNaN：`isNaN([val])`检测一个值是否为非有效数字， 如果不是有效数字返回 true, 反之是有效数字返回 false
- isNaN 在检测时， 会检测值是否为数字， 如果不是，先用 Number()这个方法，先把值转换成数字类型，在检测
- ES6 Number.isNaN()只针对 NaN 才返回 true, 非 NaN 一律返回 false `typeof value === 'number' && isNaN(value)`
  ```javascript
  isNaN("NaN"); // true
  Number.isNaN("NaN"); // false
  ```

##### 其他类型转换成数字类型

- `Number([val])`字符串转换成数字， 只要字符串中包含任意一个非有效数字字符（第一个点除外）结果都是 NaN

  ```javascript
  Number("12.5.5"); // NaN
  Number(""); // 0
  Number(null); // 0
  Number(undefined); // NaN

  // 引用数据类型
  // 为了将值转换为相应的基本类型值，抽象操作 ToPrimitive（参见 ES5 规范 9.1 节）会首先（通过内部操作 DefaultValue，参见 ES5 规范 8.12.8 节）检查该值是否有 valueOf() 方法。如果有并且返回基本类型值，就用该值进行强制类型转换。如果没有就使用 toString()的返回值（如果存在）来进行强制类型转换。
  Number([]); // 0
  Number([12]); // 12
  Number([12, 12]); // NaN
  Number({}); // NaN

  ParseInt(12);
  ParseFloat(12.5);
  ```

- `ParseInt(string,radix)/ParseFloat(string,radix)` 遵循按照字符串从左往右查找的机制找有效数字字符（所以传递的值一定是字符串， 不是也要转换成字符串查找)
  ```javascript
  ParseInt(null); //NaN
  ParseInt(undefined); // NaN
  ```

#### string 字符串类型

> 所有单引号，双引号，反引号包起来的都是字符串

##### 把其他类型转换成 string

- `[val].toString()`
- `null`和`undefined`是禁止直接 toString 的，但是转换的结果是'null' 和 'undefined'
  ```javascript
  null.toString(); // 报错
  ```
- 普通对象上.toString()的结果是`[object Object]`, 原因： `Object.prototype.toString`方法不是转换为字符串的，而是用来检测数据类型的
- 四则运算中, 加法可能存在字符串拼接（**一旦遇到字符串，则不是数学运算，而是字符串拼接**）

#### boolean

> true/false

- 转换成 false: `''/0/null/undefined/NaN`

#### null 和 undefined

> null 和 undefined 都代表的是没有

- null: 意料之中（一般是开始不知道值，我们手动先设置为 null， 后期在给予复制操作）【null 不在栈中有自己的存储空间位置】

- undefined: 意料之外(不是我能决定的) 创建一个变量没有赋值， 默认为 undefined

#### object 对象数据类型-普通对象

> {[key]:[value], ...} 任何一个对象都是由零到多组键值对组成

- 参考《你不知道的 javaScript 上》

#### object 对象数据类型-数组对象

> 数组是特殊的对象
> 参考《你不知道的 javaScript 中》

### 数据类型的区别

- 栈内存中 有变量存储空间和值存储空间
- 基本类型： 按值操作(直接操作的是值)，所以也叫值类型
- 引用类型： 操作的是堆内存的地址

```javascript
let a = 2;
// 【简单类型】
// 1. 创建变量a放到当前栈内存变量存储区域中
// 2. 创建一个值12，把它存储到当前栈内存值区域中
// 3. = 为赋值， 就是让变量和值相互关联的过程
// 【复杂类型】
// 1.在内存中分配一块新内存， 用来存储引用类型值（内存中有一个16进制的地址）
// 2. 把对象中的键值对（属性名：属性值）依次存储到堆内存中
// 3.把堆内存地址和变量关联起来
```
