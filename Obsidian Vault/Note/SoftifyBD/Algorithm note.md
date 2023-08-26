``` c++
vector<int>vc(size,default_value)
vc.push_back(), vc.pop_back()
auto data = vc.begin() 
cout<<*data<<endl;
vc.clear()
vc.swap()
vector<int> v = {2,4,2,5,1};


//set
set<int,greater<int>>st; //it will sort in decending order
set s = {2,5,6,8};
set<int> s 
s.insert(5)
s.erase(s.find(5));
s.erase(5)
s.begin()

//map
map<string,int> m;
m["monkey"] = 4; 
m["banana"] = 3;

//dequeue
deque d; d.push_back(5); // [5] 
d.push_back(2); // [5,2] 
d.push_front(3); // [3,5,2] 
d.pop_back(); // [3,5] 
d.pop_front(); // [5]

//stack
stack <int> s;
s.push(2);
s.top();
s.pop();

//queue
queue<int>q;
q.push();
q.pop();
q.front()

//alogithm
count(arr, arr + n, 3); //how many 3 is occured
sort(v.begin(), v.end()); 
reverse(v.begin(), v.end());
sort(a, a+n); 
reverse(a, a+n);
*max_element(vc.begin(),vc.end());
*min_element(vc.begin(),vc.end());
accumulate(vc.begin(),vc.end());
binary_search(vc.begin(),vc.end())
```