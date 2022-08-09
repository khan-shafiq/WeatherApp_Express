const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById("city_name");
const cityName=document.getElementById("cityName");
const temp_status=document.getElementById("temp_status");
const temp_val=document.getElementById("temp_val");
const day1=document.getElementById("day");
const date1=document.getElementById("date");

let date=new Date();
const day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
day1.innerText=day[date.getDay()];
date1.innerText=` ${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;
console.log(`${month[date.getMonth()]} ${date.getDate()} | ${date.getFullYear()} | ${day[date.getDay()]}`);


const getinfo=async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;

    if(cityval===""){
        city_name.innerText="Please enter some value";
        temp_val.innerText="-- : --";
        temp_status.innerText="-- : --"

    }else{
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=1820dc2bb812973bc1158608ae969f7e`;
            const response=await fetch(url);
            const data=await response.json();
            const arrdata=[data];
            temp_val.innerHTML=arrdata[0].main.temp;
            // temp_status.innerText=arrdata[0].weather[0].main;
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
            
            let tempMood=arrdata[0].weather[0].main;
            if(tempMood=="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud style='color:yellow;'></i>";
            }
            else if(tempMood=="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun style='color:#eccc68;'></i>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML=
                "<i class='fas fa-sun style='color:#eccc68;'></i>";
            }
            // console.log(data);               


        }
        catch{
            city_name.innerText="Please enter a proper value";
            temp.innerText="-- : --";
            temp_status.innerText="-- : --"
        }
    }
}
submitBtn.addEventListener('click',getinfo)