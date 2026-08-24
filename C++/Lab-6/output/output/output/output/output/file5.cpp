#include <iostream>
using namespace std;

template <class T, class U>
class Student {
    T rollNo;
    U name;

public:
    Student(T r, U n) {
        rollNo = r;
        name = n;
    }

    void display() {
        cout << "Roll No: " << rollNo << endl;
        cout << "Name: " << name << endl;
    }
};

int main() {
    Student<int, string> s(101, "Prashant");
    s.display();

    return 0;
}