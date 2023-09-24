```CPP
#include <bits/stdc++.h>
using namespace std;

vector <string> arrData{"ALFA","BRAVO","HOTEL","INDIA","JULIETT","KILO","LIMA","X-RAY","YANKEE","ZULU","MIKE","NOVEMBER","UNIFORM","OSCAR","PAPA","QUEBEC","ROMERO","SIERRA","TANGO","VICTOR","WHISKEY","CHARLIE","DELTA","ECHO","FOXTROT"};


bool isHaveToSwape (string i,string j){
    if(i>j) return true;
    else return false;
}

bool isValidString (string s,int n){
    if((s.size()-1)<n) return false;
    else return true;
}


void sortData(int n){
    for(int i = 0 ; i<arrData.size() ; i++){
        if(!isValidString(arrData[i],n)) continue;
        for(int j = i+1 ; j<arrData.size() ; j++){
            if(!isValidString(arrData[j],n)) continue;
            if(isHaveToSwape(arrData[i].substr(n),arrData[j].substr(n))){
                swap(arrData[i],arrData[j]);
            }
        }
    }

    for(string i : arrData){
        if(isValidString(i,n)){
            cout<<i.substr(n)<<endl;
        }
    }
}

int main(){
    while(1){
        cout<<"Enter your choice: ";
        int choice;
        cin>>choice;
        system("clear");
        if(choice == 0) return 0;
        else sortData(choice-1);
    }
    return 0;
}

```

