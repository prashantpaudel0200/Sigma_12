#include<iostream>
using namespace std;

template <class T>

class Calculator{
    T num1, num2;
    public:
    Calculator(T a,T b){
        num1 = a;
        num2 = b;
    }
    void showResult(){
        cout<<"Sum: "<<num1+num2<<endl;
        cout<<"Product: "<<num1*num2<<endl;
    }
};

int main(){
    Calculator<int> intCalc(10, 20);
    intCalc.showResult();//30 and 200

    Calculator<float> fltCalc(15.5, 25.5);
    fltCalc.showResult(); // 41 and ....

    return 0;
}