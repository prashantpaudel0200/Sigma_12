#include<iostream>
using namespace std;

int FIBO(int n){
    if(n == 0){
        return 0;
    } else if(n == 1){
        return 1;
    } else {
        return FIBO(n-1)+FIBO(n-2);
    }
}

void fiboSeries(int n){
    for(int i = 0; i<=n; i++){
        cout<<FIBO(i)<<endl;
    }
}
int main(){
    int num;
    cout<<"Enter a number:";
    cin>>num;
    cout<<"The Fibonacci series up to "<< num << "is" << endl;
    fiboSeries(num);
    return 0;
}