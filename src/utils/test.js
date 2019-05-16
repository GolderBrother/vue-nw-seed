export const name = 'james';
export const age = 18;
export default function(){
    return name + age;
}

// 其他文件导入
// import test, {name as name1, age as age2} from '@/utils/test';
// console.log(test,name1, age2);
// const name = 'james';
// const age = 18;
// function(){
//     return name + age;
// }

// import * as test from '@/utils/test'
// console.log(test);
// const test = {
//   age: 18,
//   default: function(){
//     return name + age;
//   },
//   name: 'james',
// }

