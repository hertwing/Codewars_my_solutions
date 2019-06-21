#include <string>

class Kata
{
public:
    std::vector<std::string> towerBuilder(int nFloors)
    {
      std::vector<std::string> tower;
      std::string floor = "";
      int spaces = 0;
      for(int i=nFloors; i>0; i--)
      {
        for(int k=0; k<(spaces*2); k++)
        {
            floor+=' ';
        }
        for(int j=(i*2)-1; j>0; j--)
        {
          floor.insert(floor.begin()+spaces, '*');
        }
        tower.push_back(floor);
        floor = "";
        spaces++;
      }
      std::reverse(tower.begin(), tower.end());
      return tower;
    }
};
