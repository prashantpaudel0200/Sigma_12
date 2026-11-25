#include<iostream>
#include<string>
using namespace std;

class Employee{
    protected:
    string name, gender;
    int age;
    public:
    Employee(string n, string g, int a){
        name = n;
        gender = g;
        age = a;
        cout<<"\nEmployee Constructor Called"<<endl;
    }
    ~Employee(){
        cout<<"\nEmployee Destructor Called"<<endl;
    }
    void display(){
        cout<<"\n Name: "<<name<<"\n Gender: "<<gender;
        cout<<"  Age: "<<age<<endl;
    }
};
class EmployeeSalary: public Employee{
    protected :
    float monthlySalary;
    public:
    EmployeeSalary(string n, string g, int a, float ms): Employee(n, g, a){
        monthlySalary = ms;
        cout<<"EmployeeSalary Constructor Called";
    }
    ~EmployeeSalary(){
        cout<<"\nEmployeeSalary Destructor Called";
    }
    void calcYearlySalary(){
        float yearly = monthlySalary * 12;
        float Net = yearly - (0.15* yearly);
        display();
        cout<<" Net Salary After 15% Tax : "<<Net<<endl;
    }
};
int main(){
    EmployeeSalary emp("Arav", "Male", 20, 25000);
    emp.calcYearlySalary();
    return 0;
}