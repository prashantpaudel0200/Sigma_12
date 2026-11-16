
#include <iostream>
using namespace std;

template <class T>
class Stack
{
    T arr[5];
    int top;

public:
    Stack()
    {
        top = -1;
    }

    void push(T value)
    {
        if (top == 4)
            cout << "Stack Overflow!" << endl;
        else
            arr[++top] = value;
    }

    void pop()
    {
        if (top == -1)
            cout << "Stack Underflow!" << endl;
        else
            cout << "Deleted element: " << arr[top--] << endl;
    }

    void display()
    {
        if (top == -1)
            cout << "Stack is empty!" << endl;
        else
        {
            cout << "Stack elements: ";
            for (int i = top; i >= 0; i--)
                cout << arr[i] << " ";
            cout << endl;
        }
    }
};

int main()
{
    Stack<int> s;

    s.push(10);
    s.push(20);
    s.push(30);

    s.display();
    s.pop();
    s.display();

    return 0;
}
