
//This rogram that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
let day= window.prompt("Enter the day",20);
let Month = window.prompt("Enter the month","March")
if((day>20 && day<=31) && (Month=="March" && Month=="April" && Month=="May" && Month =="June")){
    return true;
}
else{
    return false;
}