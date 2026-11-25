#include<iostream>
#include<string>
using namespace std;

class Book{
    private:
    int price;
    string name;
    public:
    void setData(int p, string n){
        price = p;
        name = n;
    }
    void display(){
        cout<<"Name: "<<name<<" Price: "<<price<<endl;
    }
    Book getCheaper(Book B1, Book B2){
        if(B1.price< B2.price){
            return B1;
        } else{
            return B2;
        }
    }
};

int main(){
    Book b1, b2, result;
    b1.setData(505, "The Art & The Artist");
    b2.setData(550, "Power");
    result = result.getCheaper(b1, b2);
    result.display();
    return 0;
}