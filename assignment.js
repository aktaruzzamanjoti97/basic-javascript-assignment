// kilometer to meter calculate function
function kilometerToMeter(kilometer){
    
    //execute when value is positive
    if(kilometer >= 0){
        var meter = 1000 * kilometer;
        return meter.toFixed(4);
    }
    //execute when value negative
    else{
        return 'distance cannot be negative';
    }
}




//budgetCalculator function
function budgetCalculator(watch, mobile, laptop) {
    //execute when value is greater than zero
    if (watch && mobile && laptop > 0) {
        var forWatch = watch * 50; //per watch price = 50$ 
        var forMobile = mobile * 100; //per mobile price = 100$
        var forLaptop = laptop * 500; //per laptop price = 500$
        var totalBudget = (forWatch + forMobile + forLaptop); //total budget calculation
        return totalBudget;
    }
    //execute when value is negative or zero
    else{
        return 'budget can not be zero or negative';
    }
}




//hotelCost function
function hotelCost(days) {
    var totalCost = 0;

    //execute when value is greater than zero
    while (days > 0) {
        if (days <= 10) {
            totalCost = days * 100; //first 10 days, hotel cost is 100$
            return totalCost;
        }

        else if (days <= 20) {
            var first10 = 10 * 100;
            var remaining = days - 10;
            var second10 = remaining * 80; //for 11-20 days, hotel cost is 80$
            totalCost = first10 + second10;
            return totalCost;
        }

        else {
            first10 = 10 * 100;
            second10 = 10 * 80;
            remaining = days - 20;
            var restOfTheDays = remaining * 50; //for 20 or more days, hotel cost is 50$
            totalCost = first10 + second10 + restOfTheDays;
            return totalCost;
        }
    }

    //execute when value is negative or zero
    return 'days can not be zero or negative';
}




//megaFriend function
function megaFriend(friendsName) {
    //check string  array or not
    if (friendsName.length <= 1 || typeof friendsName != "object") {
        return 'You must provide an string array';
    }

    else {
        var largestName = ''; //set empty string
        for (var i = 0; i < friendsName.length; i++) {
            if (typeof friendsName[i] == "string") {
                var element = friendsName[i];
                //compare element's length
                if (element.length > largestName.length) {
                    largestName = friendsName[i]; //store largest name 
                }
            }
            else{
                return 'You must provide an string array';
            }
        }
        return largestName; //return largest name to function caller
    }

}