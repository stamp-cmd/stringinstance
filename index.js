/**
 * 
 * @param {string} message 
 * @param {string} compare 
 * @returns 
 */

function StringInstance(message, compare) {
    let count = 0;
    if (typeof(message) !== "string") {
        throw new TypeError("1st Argument must be string");
    }else if (typeof(compare) !== "string") {
        throw new TypeError("2nd Argument must be string");
    }else {
        let letter = message.split('');
        for (let i = 0; i < letter.length; i++) {
            if (letter[i] === compare) {
                count++;
            }
        };
        return count;
    }
}

exports.StringInstance = StringInstance;