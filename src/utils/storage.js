/*
 * @Author: james.zhang 
 * @Date: 2019-02-13 09:00:25 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-02-13 09:01:28
 * @Description: 本地存储工具封装 
 */


const ls = window.localStorage;
const ss = window.sessionStorage;

export const Cookie = {
    get(key) {
        let arr = document.cookie.split("; ");
        if (arr.length > 0) {
            for (let item of arr) {
                let cookieArr = item.trim().split('=');
                if (cookieArr[0] === key) {
                    return cookieArr[1]
                }
            }
        }
        return '';
    },
    set(key, value, day = 100) {
        // 获取key值
        let setting = arguments[0];
        // 判断是否为对象,是对象的话遍历set
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (let i in setting) {
                let oDate = new Date();
                oDate.setDate(oDate.getDate() + day);
                document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
            }
        } else {
            let oDate = new Date();
            oDate.setDate(oDate.getDate() + day);
            document.cookie = key + '=' + value + ';expires=' + oDate;
        }
    },
    remove(key) {
        let setting = arguments[0];
        // 判断为数组，就遍历
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
            setting.forEach(key => {
                this.set(key, 1, -1)
            })
        } else {
            this.set(key, 1, -1)
        }
    }
}

export const Local = {
    get(key) {
        if (key) {
            let value = "";
            if(ls.getItem(key) || ls.getItem(key) !== undefined) {
                value = JSON.parse(ls.getItem(key));
            // if(ls.getItem(key)) {
                // value = ls.getItem(key);
            }
            return value;
        }
        return null
    },
    set(key, val) {
        const setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
            for (let i in setting) {
                ls.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ls.setItem(key, JSON.stringify(val))
        }
    },
    remove(key) {
        if (key) {
            ls.removeItem(key)
        }
    },
    clear() {
        ls.clear()
    }
}

export const Session = {
    get(key) {
        if (key) ss.getItem(key)
    },
    set(key, value) {
        const setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
            for (let i in setting) {
                ss.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ss.setItem(key, JSON.stringify(value))
        }
    },
    remove(key) {
        if (key) {
            ss.removeItem(key)
        }
    },
    clear() {
        ss.clear()
    }
}