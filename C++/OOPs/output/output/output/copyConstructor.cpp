#include<iostream>
using namespace std;

class Student{
    public:
        int rollNumber;

    Student(int i){
        this->rollNumber = i;
    }
    Student(Student &i){
        rollNumber = i.rollNumber;
    }
    void getInfo(){
        cout<<"Roll Number: "<<rollNumber;
    }
};

int main(){
    Student s1(202);
    Student s2(s1);
    cout<<"The details of s1 is:\n";
    s1.getInfo();
    cout<<"\nThe details of s2 is:\n";
    s2.getInfo();
}