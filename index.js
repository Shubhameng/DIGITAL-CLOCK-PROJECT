var a,b,c;
function clock(){ 
      let time = new Date();
      let a = time.getHours();
      let b=time.getMinutes();
      let c=time.getSeconds();
      let d="AM"

       if(a == 0){
        a = 12;
       }
      if(a > 12){
        a = a - 12;
        d = "PM";
       }
      if(a < 10){
        a = "0" + a;
       }
      if(b < 10){
        b ="0" + b;
       }
      if(c < 10)
      {
        c = "0" + c ;
      }

    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var hours=document.getElementById("hours");
    var am=document.getElementById("am");

      hours.innerHTML= a;
      minutes.innerHTML=b;
      seconds.innerHTML=c;
      am.innerHTML=d;
      

      newsettime();
    }
    setInterval(clock,1000);

// function Makediv(){
  
//   var container=document.createElement('div');
//   container.className='grid';
//   container.id='dynamic-block';
//   document.getElementById('main-container').appendChild(container);

//   var invalue=document.getElementById('Wakeup-time-container');
//   var value=invalue.options[invalue.selectedIndex].text;
//   console.log(value);
//   document.getElementById('dynamic-block').innerHTML="Wake Up time : "+ value ;
  

// }
// function Seconddiv()
// {   var container2=document.createElement('div');
//     container2.className='grid';
//     container2.id='dynamic-block2';
//     document.getElementById('main-container').appendChild(container2);

//   var invalue2=document.getElementById('lunch-time');
//   var value2=invalue2.options[invalue2.selectedIndex].text;

// document.getElementById('dynamic-block').innerHTML="lunch time : "+ value2 ;
// }


function newsettime(){
      //  var i=document.querySelector("#wakeup-time-container").value;
       var hourr=new Date().getHours();
       console.log(a,b,c);
       

       if(a==hourr){
         document.querySelector("#right-down-inner-container2").style.backgroundImage="url(./assets/wakeup.jpg)";
        document.querySelector("#right-down-inner-container1").innerHTML="Let's Have Some Breakfast";
        }
        // var j=document.querySelector("#lunch-time").value;
        if(b==hourr){
          document.querySelector("#right-down-inner-container2").style.backgroundImage="url(./assets/lunch_image.png)";
         document.querySelector("#right-down-inner-container1").innerHTML="Let's Have SomeLunch";
         }
        //  var k=document.querySelector("#snap-time").value;
        if(c==hourr){
          document.querySelector("#right-down-inner-container2").style.backgroundImage="url(./assets/nap.jpg)";
         document.querySelector("#right-down-inner-container1").innerHTML="Let's Go For Sleep";
         }  



       
      
}
function settime(){
 let val= document.querySelector("#Wakeup-time-container").value;
  console.log(val);
  let val2=document.querySelector("#lunch-time").value;
  console.log(val2);
  let val3=document.querySelector("#snap-time").value;
  console.log(val3);
  var container=document.createElement('div');
  container.className='grid';
  container.id='dynamic-block';
  document.querySelector("#main-container").appendChild(container);
  let div1 =document.createElement('div');
  div1.setAttribute('class','name1');
  if(val>=12){
   let vall1=val-12;
   div1.innerHTML="wakeup time :" +"0"+ vall1+"pm - 0"+ parseInt(vall1+1 )+"pm";
  }
  else{
    div1.innerHTML="wakeup time :" +"0"+ val+"am - 0"+ (parseInt(val )+1)+"am";
  }
  let div2 =document.createElement('div');
  div2.setAttribute('class','name2');
  if(val2>=12){
    let vall2=val2-12;
    div2.innerHTML="lunch time :" +"0"+ vall2+"pm - 0"+ parseInt(vall2+1 )+"pm";
   }
   else{
     div2.innerHTML="lunch time :" +"0"+ val2+"am - 0"+ (parseInt(val2 )+1)+"am";
   }
  let div3 =document.createElement('div');
  div3.setAttribute('class','name3');
  if(val3>=12){
    let vall3=val3-12;
    div3.innerHTML="nap time :" +"0"+ vall3+"pm - 0"+ parseInt(vall3+1 )+"pm";
   }
   else{
     div3.innerHTML="nap time :" +"0"+ val3+"am - 0"+ (parseInt(val3 )+1)+"am";
   }
   a=val;
   b=val2;
   c=val3;
  container.appendChild(div1);
  container.appendChild(div2);
  container.appendChild(div3);
}