#include<iostream>
using namespace std;

class Parent{
    public:
    void show(){
        cout<<"I am Parent Function"<<endl;
    }
    virtual void hello(){
        cout<<"Hello from parent class";
    }
};
class Child: public Parent{
    public:
    void show(){
        cout<<"I am Child Function"<<endl;
    }
    void hello(){
        cout<<"Hello from child class";
    }
};

int main(){
    Parent p1;
    p1.hello();
    return 0;
}