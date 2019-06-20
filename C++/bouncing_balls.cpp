class Bouncingball
{
public:
    static int bouncingBall(double h, double bounce, double window)
    {
      if(h<0 || bounce <= 0 || bounce >=1 || window >=h)
        return -1;
      else {
        int count = 1;
        h*=bounce;
        while(h>=window)
        {
          count+=2;
          h*=bounce;
        }
        return count;
      }
    }
};
