

// check for empty or null or undefined
function isEmpty(data) {
    if (data == null) return true;
    if (data == undefined) return true;
    if (Number.isNaN(data)) return true
    if (typeof data === 'string' || Array.isArray(data)) return data.length > 0;
    if (data instanceof Date) return data.toDateString().length > 0;
    if (typeof data === 'object') return Object.keys(data).length > 0;
    return false;
}

// check object
function isObject(data) {
    if (Array.isArray(data)) return false;
    return (data != null && typeof data === 'object') 
}

// check array
function isArray(data) {
    return Array.isArray(data);
}

// to check two objects or two arrays are equal
function deepEqual(data1, data2) {
    if (Array.isArray(data1) && Array.isArray(data2)) {
        if (data1.length !== data2.length)
            return false;

        const arr1 = data1.concat().sort();
        const arr2 = data2.concat().sort();

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }
    else if (isObject(data1) && isObject(data2)) {
        const keys1 = Object.keys(data1);
        const keys2 = Object.keys(data2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            const val1 = data1[key];
            const val2 = data2[key];
            const areObjects = isObject(val1) && isObject(val2);
            if (
                areObjects && !deepEqual(val1, val2) ||
                !areObjects && val1 !== val2
            ) {
                return false;
            }
        }

        return true;
    }
    return false;
}

// isFunction
function isFunction(value) {
    return typeof value === 'function';
}

// isString
function isString(value) { 
    return typeof value === 'string';
}

// conformsTo
function conformsTo(object, source) {
    // Check if object and source are both objects and not null
    if (!isObject(object) || !isObject(source)) return false;

    // Check if all keys in source are functions and validate them against the object
    return Object.keys(source).every((key) => {
        // Ensure the source value is a function
        if (!isFunction(source[key])) return false;

        // Call the function with the corresponding value from the object
        return source[key](object[key]);
    });
};

// cloneDeep
function cloneDeep(obj2) {
    // Check if obj2 is not an object or is null
    if (typeof obj2 !== 'object' || obj2 === null) {
        return obj2; // Return the value if obj2 is not an object
    }

    // Handle Date
    if (obj2 instanceof Date) {
        return new Date(obj2.getTime());
    }

    // Handle moment
    if (typeof moment !== 'undefined' && moment.isMoment(obj2)) {
        return moment(obj2);
    }

    // Create an array or object to hold the values
    let copy = Array.isArray(obj2) ? [] : {};

    for (let key in obj2) {
        // Check if the property is a direct property of the object
        if (obj2.hasOwnProperty(key)) {
            // Recursively call cloneDeep for nested objects and arrays
            copy[key] = cloneDeep(obj2[key]);
        }
    }

    return copy;
};

// function to capitalize 1st letter of every word in the sentences
function capFirstLetter(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// 
function separator(text, character) {
    return text.split(character).join(" ");
}

// separator to improve number's readability
function thousandSeparator(num) {
    let num_parts = num ? num.toString().split(".") : [""];
    num_parts[0] = num_parts[0] ? num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","): '';
    return num_parts.join(".");
}

// convert to camel case 
function toCamelCase(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map((word, i) => i !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join('');
}

// return type of item
function getTypes(data) {
    if(data == null)
        return null;
    if(typeof data === 'object') {
        if(data instanceof Date) return 'date';
        if(Array.isArray(data)) return 'array';
        if(data instanceof Set) return 'set';
        if(data instanceof Promise) return 'promise';
        if(data instanceof Error) return 'error';
        if(data instanceof Map) return 'map';
        if(data instanceof WeakMap) return 'weakmap';
        if(data instanceof WeakSet) return 'weakset';
        if(data.documentElement || data.innerHTML !== undefined) return 'html';
    }
    return typeof data;
}

// add hyphen in a string in place of space
function addHyphen(str) {
    return word.replace(/\s/g, '-').toLowerCase();
}

// get property from the obj with stringified path
function getObjectProp(obj, path) {
    const paths = path.split('.');
    let value = obj;
    for(let p of paths){ 
        if(value[p] !== undefined)
            value = value[p];
        else
            return null;
    }
    return value;
}

// set property in the obj with stringified path and value
function setObjectProp(obj, path, value) {
    return path.split('.').reduce((ob, key, i, array) => {
        if (i === array.length - 1) {
            ob[key] = value;
            return ob;
        }
        if (typeof ob[key] !== 'object') {
            if (Number.isNaN(parseInt(key, 10))) {
                ob[key] = {};
            } else {
                ob[key] = [];
            }
        }
        return ob[key];
    }, o);
}

module.exports = {
    isEmpty,
    isArray,
    isObject,
    deepEqual,
    isFunction,
    isString,
    conformsTo,
    cloneDeep,
    capFirstLetter,
    thousandSeparator,
    separator,
    toCamelCase,
    getTypes,
    addHyphen
} 