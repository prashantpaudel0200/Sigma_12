#include<iostream>
using namespace std;
class Student
{
    private:
    int marks;
    
    public:
    void setMark(int m);
    void display();
};
void Student::setMark(int m){
    marks=m;
}
void Student::display(){
    cout<<"Marks is "<<marks;
}
int main(){
    Student s1;
    s1.setMark(90);
    s1.display();
    return 0;
}