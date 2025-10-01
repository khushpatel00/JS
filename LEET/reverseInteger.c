#include <stdio.h>
#include <limits.h>
int reverse(int x);
int main(){
       reverse(1534236469);
}
int reverse(int x){
    long long int result = 0;
    do
    {
        result = result*10 + (x % 10);
        x = x/10;
        printf("x == %d, result == %d \n", x,result);
    } while (!(x == 0));
    if (result > INT_MAX || result < INT_MIN) {
        return 0;
    }
}