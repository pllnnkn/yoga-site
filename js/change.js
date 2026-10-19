change=document.getElementById("change")

change.addEventListener("click",change_all)

function change_all(){
if (document.getElementsByTagName("div")[1].innerHTML==="Иванов")
  {
    document.body.style.backgroundImage="url(img/eng_pas.jpg)"
    document.getElementsByTagName("div")[1].innerHTML="Ivanov" 
    document.getElementsByTagName("div")[2].innerHTML="Ivan"
    document.getElementsByTagName("div")[3].innerHTML="Ivanovich"
    document.getElementsByTagName("div")[4].innerHTML="male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20.07.2000"
  }
else {
  if (document.getElementsByTagName("div")[1].innerHTML==="Ivanov")
  {
    document.body.style.backgroundImage="url(img/passpotr_shablon.png)"
    document.getElementsByTagName("div")[1].innerHTML="Иванов" 
    document.getElementsByTagName("div")[2].innerHTML="Иван"
    document.getElementsByTagName("div")[3].innerHTML="Иванович"
    document.getElementsByTagName("div")[4].innerHTML="муж &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20.07.2000"
  }
}

}//function