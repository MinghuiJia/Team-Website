/*
 * @Author: jiaminghui
 * @Date: 2024-05-16 14:28:10
 * @LastEditTime: 2024-06-28 14:41:07
 * @LastEditors: jiaminghui
 * @FilePath: \lixi\src\aaa.js
 * @Description: 
 */
// 冒泡排序
function arraySort(arr) {
    let i = 0;
}

function arraySort(arr) {
    // 冒泡排序
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // 交换位置
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }   

function getCurrentTime() {
    let date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function intToDate(time) {
    let date = new Date();
    date.setTime(time);
    return date;
}
