function caughtSpeeding (x , y){
    let isBirthday =x;
    let speed = y;
}
    if(isBirthday){
        speed = speed - 5;
    }

    if(speed <= 60){
        return 0;}
    
        else if(speed <= 80 && speed >= 61){
            return 1;}
        else {
            return 2;}