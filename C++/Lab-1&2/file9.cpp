#include <iostream>
using namespace std;

int add(int a, int b)
{
    return a + b;
}

int main()
{
    // Function pointer
    int (*ptr)(int, int);

    ptr = add;

    cout << "Result = " << ptr(10, 20);

    return 0;
}