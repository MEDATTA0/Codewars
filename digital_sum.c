#include <stdio.h>

int recursive_1(int);
int recursive_2(int);

int main(int argc, char const *argv[])
{
    int n = 19834;
    int sum = recursive_2(n);
    printf("sum = %d", sum);
    return 0;
}

int recursive_1(int n)
{
    if (n < 10)
        return n;
    else
        return n % 10 + recursive_1(n / 10);
}

int recursive_2(int n)
{
    int sum_checked = recursive_1(n);
    if (sum_checked < 10)
        return sum_checked;

    else
        recursive_2(sum_checked);
}