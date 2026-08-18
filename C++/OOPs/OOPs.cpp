#include<iostream>
#include<string>
using namespace std;

class Teacher{
    //Properties/ Attributes
    protected:
        double salary;
    public:
    //Non-Parameterized Constructor
    Teacher(){
        dept = "Computer Science";
    }
    //Parameterized Constructor
    Teacher(string n, string sub, double s){
        name = n;
        subject = sub;
        salary = s;
    }
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
    Teacher T1("Prashant","Java", 8000);
    // T1.name = "Prashant Paudel";
    // T1.subject = "C++";
    // T1.setSalary(10000);
    cout<<T1.name<<endl;
    cout<<T1.getSalary()<<endl;

    return 0;
}