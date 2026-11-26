#include <iostream>
using namespace std;

void swap(int *x, int *y){
    int swap;
    swap = *x;
    *x=*y;
    *y=swap;
}
int main() {
    int x=65;
    int y=40;
    cout<<"Value before Swapping\n"<<"X = "<<x <<"\t Y= "<<y<<endl;
    swap(&x, &y);
    cout<<"Value After Swapping\n"<<"X = "<<x <<"\t Y= "<<y;
    return 0;
}