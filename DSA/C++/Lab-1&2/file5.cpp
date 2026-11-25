#include<iostream>
using namespace std;
int add(int a, int b){
    return a+b;
}
int add(int a, int b, int c){
    return a+b+c;
}
int main(){
    cout<<"The sum of two integers = "<< add(10,20)<<endl;
    cout<<"The sum of three integers = "<<add(10,20,30)<<endl;
    return 0;
}