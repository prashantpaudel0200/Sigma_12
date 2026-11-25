#include<iostream>
using namespace std;
// template<class T1>
// T1 max(T1 a, T1 b){
//     if(a>b){
//         return a;
//     } else{
//         return b;
//     }
// }
    template<class T1>
    T1 max(T1 a, T1 b, T1 c){
        if(a> b && a>c){
            return a;
        } else if(b > c){
            return b;
        } else{
            return c;
        }
    }
int main(){
    int a, b;
    int c, z;
    cout<<"Enter value for A: "<<endl;
    cin>>a;
    cout<<"Enter value for B: "<<endl;
    cin>>b;
    cout<<"Enter value for C: "<<endl;
    cin>>c;
    z =max(a, b, c);
    cout<<"The largest is "<<z<<endl;
}