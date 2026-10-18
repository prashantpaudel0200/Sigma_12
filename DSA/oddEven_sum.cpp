#include <iostream>
using namespace std;

int main() {
    int evenSum=0, oddSum=0;
    int n, num;
    cout<<"Enter total number:"<< endl;
    cin >> n;
    for(int i=0; i<n; i++){
        cout<<"\nEnter number:";
        cin>>num;
        if(num%2 ==0)
            evenSum += num;
        else
            oddSum += num;
    }
    cout<< "Even sum : "<< evenSum<<endl;
    cout<< "Odd sum : "<< oddSum;
    return 0;
}