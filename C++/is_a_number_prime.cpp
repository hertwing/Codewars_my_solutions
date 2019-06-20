bool isPrime(int num) {
  if(num<=1)
    return false;
  else {
    int fin = sqrt(num);
    int n = 2;
    int m = fin;
    while(n<=(fin) || m==2)
    {
      if(num%n==0 || num%m==0)
        return false;
      ++n;
      --m;
    }
  }
  return true;
}
