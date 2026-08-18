#include<iostream>
#include<string>
using namespace std;

class Teacher{
    //Properties/ Attributes
    protected:
        double salary;
    public:
    string name;
    string dept;
    string subject;

    //Methods / Member functions
    void changeDept(string newDept){
        dept = newDept;
    }
    //setter
    void setSalary(double s){
        salary = s;
    }
    //getter
    double getSalary(){
        return salary;
    }
};


int main(){
    Teacher T1;
    T1.name = "Prashant Paudel";
    T1.dept = "Computer Science";
    T1.subject = "C++";
    T1.setSalary(100000);
    double sal = T1.getSalary();
    cout<<sal;
    return 0;
}