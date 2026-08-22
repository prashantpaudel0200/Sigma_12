#include<iostream>
using namespace std;

class Parent{
    public:
    void show(){
        cout<<"I am Parent Function"<<endl;
    }
};
class Child: public Parent{
    public:
    void show(){
        cout<<"I am Child Function"<<endl;
    }
};

int main(){
    Child c1;
    c1.show();
    Parent p1;
    p1.show();
    return 0;
}