let grade = 10
switch(true)
{
    case grade >= 80 && grade <= 100:
        console.log("You Have a Grade A")
        break
    case grade >= 70 && grade <= 89:
        console.log("You Have a Grade B")
        break
    case grade >= 60 && grade <= 69:
        console.log("You Have a Grade C")
        break
    case grade >= 50 && grade <= 59:
        console.log("You Have a Grade D")
        break
    case grade >= 0 && grade <= 49:
        console.log("You Have a Grade F")
        break
    default:
        console.log("You Enter Invalid number")
}
let month
// month = prompt("Enter a Month")
switch(true){
    case month == 'september' || month == 'october' || month == 'november' || month == 'September' || month == 'October' || month == 'November':
        console.log(`Autumn Season`)
    break
    case month == 'December' || month == "January" || month == "February" || month == 'december' || month == "january" || month == "february":
        console.log("Season is Winter")
    break
    case month == 'March' || month == 'April' || month == 'May' || month == 'march' || month == 'april' || month == 'may':
        console.log('Season is Spring')
    break
    case month == "June" || month == "July" || month == "August" || month == "june" || month == "july" || month == "august" :
        console.log('Season is Summer')
    break
    default :
        console.log("You Enter a Invalid String")
}
let day = "tuesday"
day = prompt("Enter Day Name To check is weekend or not")
switch(true){
    case day.toUpperCase() == "MONDAY" :
        console.log("Monday is Working Day")
    break
    case day.toUpperCase() == "TUESDAY" :
        console.log("Tuesday is Working Day")
    break
    case day.toUpperCase() == "WEDNESDAY" :
        console.log("Wednesday is Working Day")
    break
    case day.toUpperCase() == "THURSDAY" :
        console.log("Thursday is Working Day")
    break
    case day.toUpperCase() == "FRIDAY" :
        console.log("Friday is Working Day")
    break
    case day.toUpperCase() == "SATURDAY" :
        console.log("Saturday is Weekend")
    break
    case day.toUpperCase() == "SUNDAY" :
        console.log("Sunday is Weekend")
    break
}