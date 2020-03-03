module.exports = function transform(arr) {


    if (!Array.isArray(arr)) { throw new Error(); }

    const controls = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (controls.includes(arr[i])) {
            switch (arr[i]) {
                case '--double-next':
                    if (i != arr.length - 1) { result.push(arr[i + 1]); }
                    break;
                case '--double-prev':
                    if (i != 0) { result.push(arr[i - 1]); }
                    break;
                case '--discard-next':
                    if (i != arr.length - 1) { i += 1; }
                    break;
                case '--discard-prev':
                    if (i != 0) { result.pop(); }
                    break;
                default:
                    result.push(arr[i]);
            }
        }
        else {
            result.push(arr[i]);
        }
    }

    return result;
};
