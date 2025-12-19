#include<iostream>
using namespace std;
int main()
{
    int n=1238;
    //need to get last digit 8
    int m=n/10;

    int ans=n-m*10;
    cout<<ans;
}