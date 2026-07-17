#include<iostream>
using namespace std;

void swap(int &a, int &b)
{
    int temp;
    temp = a;
    a = b;
    b = temp;
}
int main(){
    int x=10;
    int y=20;
    
    cout<<"Value Before Swapping:"<<endl;
    cout<<"X= "<<x <<" Y= "<<y<<endl;
    
    swap(x, y);
    cout<<"Value After Swapping"<<endl;
    cout<<"X= "<<x << " Y= "<<y<<endl;
    
    return 0;
}