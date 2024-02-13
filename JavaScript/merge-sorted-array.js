var merge = function (nums1, m, nums2, n) {
    let step = m + n - 1;
    while (n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[step] = nums1[m - 1];
            m--;
        } else {
            nums1[step] = nums2[n - 1];
            n--;
        }
        step--;
    }
};
