class Tortoise
{
public:
    static std::vector<int> race(int v1, int v2, int g){
      if(v1>=v2)
        return {-1, -1, -1};
      else {
        double t = ((double)-g)/((double)v1-(double)v2);
        int t1 = (int)(t*3600);
        int s = t1%60;
        t1 = t1-s;
        int m = t1%3600/60;
        t1 = t1-(t1%3600);
        int h = t1/3600;
        std::vector<int> ret;
        ret.push_back(h);
        ret.push_back(m);
        ret.push_back(s);
        return ret;
      }
    }
};
