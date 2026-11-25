#include <iostream>
using namespace std;

class Animal
{
public:
    virtual void sound()
    {
        cout << "Animal makes a sound." << endl;
    }
};

class Dog : public Animal
{
public:
    void sound()
    {
        cout << "Dog barks." << endl;
    }
};

int main()
{
    Animal *a;
    Dog d;

    a = &d;

    a->sound();

    return 0;
}