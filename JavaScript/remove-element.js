var removeElement = function (nums, val) {
    let i = 0;
    for (let step = 0; step < nums.length; step++) {
        if (nums[step] !== val) {
            nums[i] = nums[step];
            i++;
        }
    }
    return i;
};
