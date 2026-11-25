#include <iostream>
using namespace std;

class Grandfather
{
public:
    void showGrandfather()
    {
        cout << "This is Grandfather class." << endl;
    }
};

class Father : public Grandfather
{
public:
    void showFather()
    {
        cout << "This is Father class." << endl;
    }
};

class Son : public Father
{
public:
    void showSon()
    {
        cout << "This is Son class." << endl;
    }
};

int main()
{
    Son s;

    s.showGrandfather();
    s.showFather();
    s.showSon();

    return 0;
}