const sortedArrayToBST = function(nums) {
  
  const rec = (start, end) => {
        if(start > end) {
            return null;
        }
        var mid = Math.trunc((start+end)/2);
        var node = new TreeNode(nums[mid]);
        node.left = rec(start, mid-1);
        node.right = rec(mid+1, end);
        return node;
    };
    return rec(0, nums.length-1);
}


/*
Success
Details 
Runtime: 154 ms, faster than 9.28% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 41 MB, less than 93.09% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
*/
