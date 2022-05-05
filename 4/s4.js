function amPm(){
    let d= new Date();
    let o;
    let hour=d.getHours();
    if(hour> 12){
        o="Pm";
        hour -= 12;
    }else{
        o="Am";
    }
    console.log("time: ",hour, ":", d.getMinutes(), o );
    
}
amPm();