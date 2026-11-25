#include <iostream>
using namespace std;

template <class T>
class Parent {
protected:
    T value;

public:
    Parent(T v) {
        value = v;
    }
};

template <class T>
class Child : public Parent<T> {
public:
    Child(T v) : Parent<T>(v) {}

    void display() {
        cout << "Value: " << this->value << endl;
    }
};

int main() {
    Child<int> obj(25);
    obj.display();

    return 0;
}