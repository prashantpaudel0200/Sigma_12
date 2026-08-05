#include<iostream>
using namespace std;
int num=100;
int main(){
    int num=50;
    cout<<"Local Variable: "<<num <<endl;
    cout<<"Global Variable: "<<::num<<endl;
    return 0;
}