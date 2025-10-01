#include <iostream>
#include <climits>

class Solution {
    public:
    int reverse(int x) {
        long long int result = 0;
        do
        {
            result = result*10 + (x % 10);
            x = x/10;
        } while (!(x == 0));
        if (result > INT_MAX || result < INT_MIN) {
            return 0;
        }
    }
};