let month 
month = prompt("Enter Month Name")
switch (true) {
    case month.toUpperCase() == "JANUARY":
        console.log('January has 31 days')
        break;
    case month.toUpperCase() == "FEBRUARY":
        console.log('February has 28 days')
        break;
    case month.toUpperCase() == "MARCH":
        console.log('March has 31 days')
        break;
    case month.toUpperCase() == "APRIL":
        console.log('April has 30 days')
        break;
    case month.toUpperCase() == "MAY":
        console.log('May has 31 days')
        break;
    case month.toUpperCase() == "JUNE":
        console.log('June has 30 days')
        break;
    case month.toUpperCase() == "JULY":
        console.log('July has 31 days')
        break;
    case month.toUpperCase() == "AUGUST":
        console.log('August has 31 days')
        break;
    case month.toUpperCase() == "SEPTEMBER":
        console.log('September has 30 days')
        break;
    case month.toUpperCase() == "OCTOBER":
        console.log('October has 31 days')
        break;
    case month.toUpperCase() == "NOVEMBER":
        console.log('November has 30 days')
        break;
    case month.toUpperCase() == "DECEMBER":
        console.log('December has 31 days')
        break;

    default:
        console.log("You Enter Invalid String")
        break;
}