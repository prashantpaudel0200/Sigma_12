#include<iostream>
#include<string.h>
using namespace std;

class Student{
    private:
        int rollNo;
        string name;
    public:
        Student(int r, string n){ rollNo = r; name = n;}
        Student(const Student &s){
            rollNo = s.rollNo;
            name = s.name;
        }
    void display(){
        cout<<"Roll Number: "<<rollNo<< " Name: "<<name<<endl;
    }
};

int main(){
    Student s1(101, "Aarav");
    Student s2 = s1;

    cout<<"Details of Student S1"<<endl;
    s1.display();
    cout<<"Details of Student S2"<<endl;
    s2.display();

    return 0;
}