#include<iostream>
using namespace std;
template<class T>

class Base{
    protected: 
    T val;
    public:
    void setval(T a) {
    val = a;
    }
};

template<class T>
class Derived: public Base<T>{
    public:
    void setval(T b){
        Base<T>:: setval(b);
    }
    void display(){
        cout<<"Derived Value: "<<this->val;
    }
};
int main(){
    Derived <int> d;
    d.setval(4);
    d.display();
    return 0;
}
