#include <iostream>
#include <string>
using namespace std;

class String
{
    string str;

public:
    void input()
    {
        cout << "Enter a string: ";
        cin >> str;
    }

    String operator+(String s)
    {
        String temp;
        temp.str = str + s.str;
        return temp;
    }

    void display()
    {
        cout << "Concatenated String = " << str << endl;
    }
};

int main()
{
    String s1, s2, result;

    s1.input();
    s2.input();

    result = s1 + s2;

    result.display();

    return 0;
}