#include <iostream>
using namespace std;

class Demo
{
public:
    ~Demo()
    {
        cout << "Memory is released";
    }
};

int main()
{
    Demo obj;

    return 0;
}