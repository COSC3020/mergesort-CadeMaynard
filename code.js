function mergesort(array) {
    for(i = 1; Math.pow(2, i  - 1) < array.length; i++ ){ // Sorts the array in chunks the size of 2^i
        section = Math.pow(2, i);
        a = 0;
        do {
            loSec = a;
            if(section > array.length) {hiSec = section/2; } 
            else { hiSec = loSec + (section/2) }

            loSecIn = loSec;
            hiSecIn = hiSec;

            while(loSecIn < hiSecIn && hiSecIn < (loSec + section) && hiSecIn < array.length){ //Sorts the section
                if(array[loSecIn] <= array[hiSecIn]) {
                    loSecIn++;
                } else {   //Shifts the unsorted section of the array to the right and puts the recently compared item and the end of the sorted section.
                        temp = array[hiSecIn];
                        for(b = hiSecIn; b >= loSecIn; b--)
                            array[b] = array[b - 1]
                        array[loSecIn] = temp;
                        
                        hiSecIn ++;  //These are incremented because the array is shifted, they must refer to the same values as before.
                        loSecIn++;
                    }
                
            }
            a += section;
        } while (a < array.length)
    }
    return array;
}
/*
Sources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow 
*/
