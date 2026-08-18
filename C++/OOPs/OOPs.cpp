#include<iostream>
#include<string>
using namespace std;

class Teacher{
    //Properties/ Attributes
    public:
    string name;
    string dept;
    string subject;
    double salary;

    //Methods / Member functions
    void changeDept(string newDept){
        dept = newDept;
    }


};


int main(){
    Teacher T1;
    T1.name = "Prashant Paudel";
    T1.dept = "Computer Science";
    T1.subject = "C++";
    T1.salary = 100000;


    cout<<T1.name;
    return 0;
}