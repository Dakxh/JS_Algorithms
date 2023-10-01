process.stdin.resume();
process.stdin.setEncoding('utf8');

input = '';
process.stdin.on('data', (value) => input += value);

process.stdin.on('end', () => {
    input = input.trim().split('\n');

    input.shift();
    for (let i = 1; i < input.length; i = i + 2) {

        let s = input[i];
        let arrs = [...s];
        let final = "";
        let ans = arrs.reduce((obj, item) => {
            key = item;
            if (!obj[key]) {
                obj[key] = [];
            }
            obj[key].push(item);
            return obj;
        }, {})
        for (let key in ans) {
            if (ans[key].length % 2 === 0) {
                final = "YES";
            } else {
                final = "NO";
                break;
            }
        }
        console.log(final);
    }

})