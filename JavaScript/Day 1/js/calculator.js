var s=0;
var st="";
var c=0;
function myf(z)
{
  
   st=st+z;
    
   document.getElementById('i').value=st;



}
function cal()
{
   var x,i,a,b,c;
   x=document.getElementById('i').value;
   //document.getElementById('p').innerHTML=x;
   for(i=0;i<x.length;i++)
   {


      document.getElementById('p').innerHTML=x.elements[i].value;
        /*if(x.elements[i].value="+")
        {
            a=parseInt(x.elements[i-1].value);
            b=parseInt(x.elements[i+1].value);
            document.getElementById('p').innerHTML=a;
            document.getElementById('p').innerHTML=b;
            c=a+b;
            x.elements[i+1]=c;
           
        }*/
   }
    document.getElementById('p').innerHTML=c;
}