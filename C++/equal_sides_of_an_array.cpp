#include <vector>
using namespace std;

int find_even_index (const vector <int> numbers) {
  if(numbers.size()==0)
    return 0;
  else {
    vector<int> my_numbers(numbers);
    my_numbers.push_back(0);
    my_numbers.insert(my_numbers.begin(), 0);
    int first=0;
    int sum=0;
    for(int i=0; i<((int)my_numbers.size()); i++)
    {
      first+=my_numbers.at(i);
      for(int j=((int)(my_numbers.size()-1)); j>i+1; j--)
      {
        sum+=my_numbers.at(j);
        if(first==sum)
            if(j-i-1==1)
              return i;
      }
      sum=0;
    }
  }
  return -1;
}
