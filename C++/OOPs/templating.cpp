
#include <iostream>
using namespace std;

template <class T>
T maximum(T a, T b)
{
    if (a > b)
        return a;
    else
        return b;
}

int main()
{
    int x = 10, y = 20;
    float p = 5.5, q = 3.2;

    cout << "Maximum integer: " << maximum(x, y) << endl;
    cout << "Maximum float: " << maximum(p, q) << endl;

    return 0;
}
