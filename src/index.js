module.exports = function longestConsecutiveLength(array)
{
  // your solution here:


        var max = 1;
        var count = 1;
        for (var i = 1; i <= array.length - 1; ++i) {
            if (array[i] === array[i - 1]) continue;
            if (array[i] - 1 === array[i - 1]) {
                count++;
            } else {
                diff = array[i] - i;
                count = 1;
            }
            max = Math.max(count, max);
        }
        return max;
    


}
