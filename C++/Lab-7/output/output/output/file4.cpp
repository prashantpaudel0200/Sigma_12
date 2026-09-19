#include <iostream>
using namespace std;

ostream& tab(ostream& out) {
    out << "\t";
    return out;
}

int main() {
    cout << "Name" << tab << "Age" << tab << "Address" << endl;
    cout << "Ram" << tab << "20" << tab << "Kathmandu" << endl;

    return 0;
}