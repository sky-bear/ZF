### JS 中的变量 variable

> 变量：可变的量， 在编程语言中，变量其实就是一个名字， 用来存储和代表不同的值
> 定义方式： `var`/`let`/`const`/`function`/`import`/`class`

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
- 引用数据类型
  - 对象数据类型
    - {} 普通对象
    - [] 数组对象
    - 正则对象
    - Math 数学函数对象
    - 日期对象
    - ...
  - 函数数据类型 function

### number 数字类型

> 包含：常规数字和 NaN

#### NaN

- NaN: 不是一个数，但是属于数字类型
  NaN 和任何值(包括自己)都不相等： `NaN != NaN`, 我们不能使用相等的方式判断是否是有效数字

- isNaN：`isNaN([val])`检测一个值是否为非有效数字， 如果不是有效数字返回 true, 反之是有效数字返回 false
- isNaN 在检测时， 会检测值是否为数字， 如果不是，先用 Number()这个方法，先把值转换成数字类型，在检测
- ES6 Number.isNaN()只针对 NaN 才返回 true, 非 NaN 一律返回 false `typeof value === 'number' && isNaN(value)`
  ```javascript
  isNaN("NaN"); // true
  Number.isNaN("NaN"); // false
  ```

#### 其他类型转换成数字类型
