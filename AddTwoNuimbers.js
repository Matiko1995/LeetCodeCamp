// 计算两数之和
var twoSum = function name(nums, taget) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const component = taget - nums[i];
        if (map.has(complement)) {
            return [map.get(component),i];
        } else {
            map.set(num[i], i)
        }
    }
}