var countGoodSubstrings = function(s) {
    var good_str = 0
    for (let i = 0; i < s.length - 2; i++) {
        if (new Set(s.substring(i, i + 3)).size == 3) {
            good_str++
        }
    }
    return good_str
};