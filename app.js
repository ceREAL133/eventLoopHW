//скласти свій розпорядок дня використовуючи event loop та користуючись асинхронністю js 
//(приблизно таке було формулювання)

let phoneCharge = 50;
let isFood = false;
let money = 200; 
let time = 10;


awake(true, (err, message)=>{
    if (!err) {
        console.log(message);
    } else{
        console.warn(err);
    }

    checkMessages(phoneCharge, (err, message) => {
        if(!err){
            console.log(message);
        } else{
            console.warn(err);
        }

        checkFridge(isFood, (err, message) => {
            setTimeout(() => {
                
                if (!err) {
                    console.log(message); 
                    programming(time, (err, message) => {
                        if (!err) {
                            console.log(message);

                        } else{

                            console.warn(message);
                        }
                        sleepOrAnime(phoneCharge, (err, message) => {
                            if (!err) {
                                console.log(message);

                            } else{
                                console.log(err);
                            }
                        })
                    });
                } else{
                    console.warn(err);
                    goShopping(money, (err, message) => {
                        if (!err) {
                            isFood = true;
                            money = money - 200;
                            time -= 30;
                        
                            console.log(message);

                            programming(time, (err, message) => {
                                if (!err) {
                                    console.log(message);

                                } else{                                
                                    console.warn(message);
                                }
                            
                                sleepOrAnime(phoneCharge, (err, message) => {
                                    if (!err) {
                                        console.log(message);

                                    } else{
                                        console.log(err);
                                    }
                                })
                            
                            });

                        } else{
                            console.error(err);

                            goWork(money, (err, message) => {
                                if (!err) {
                                    console.log(message);
                                } else{
                                    console.log(message);
                                }
                                programming(time, (err, message) => {
                                    if (!err) {
                                        console.log(message);

                                    } else{
                                        console.warn(err);
                                    
                                    }
                                
                                    sleepOrAnime(phoneCharge, (err, message) => {
                                        if (!err) {
                                            console.log(message);

                                        } else{
                                            console.log(err);
                                        }
                                    })
                                });
                            });
                        }
                    });
                }
            },1000)
        })
    });
});

function awake(awaked, cb) {
    setTimeout(() => {
        if (awaked) {
            cb(null, 'hey, you have finally awake');
        }else{
            cb('wake da FORK up, Samurai, we have a city to burn')
        }
    }, 1000)
}

function checkMessages(phoneCharge, cb) {
    setTimeout(() =>{
        if (phoneCharge > 39) {
            time -= 30; 
            console.log('no new messages, as always(');
            phoneCharge -= 10

            cb(null, `phone charge = ${phoneCharge}`);
        } else{
            cb('crap, I forgot to charge my phone');
        }
    }, 500)
}



function checkFridge(isFood, cb) {
    console.log('checking fridge...');
    if (isFood) {
        cb(null, 'im hot hungry, lets make some programms');
    }else{
        cb('we need to go shopping');
    }
}

function goShopping(money, cb) {
    setTimeout(() => {
        console.log('its shopping time!!!');
        if (money >= 300) {
            isFood = true
            cb(null, 'I have food');

            console.log(`there are ${money} money left`); 
            console.log(`there are ${time} minutes left`); 
        } else{
           cb('im poor student, gonna eat my shoes');
           
           console.log(`there are ${money} money left`);
           console.log('need to earn some money');
           console.warn('I need to go work');
        }
    },1000)
}

function goWork(money, cb) {
    setTimeout(() => {
        if (money < 300){
            console.log('working');
            console.log('working harder');
            console.log('WORKING SUPER HARD');
            console.log('hooraaay, I can eat something');

            money += 500;
            isFood = true;
            time -= 80;
            phoneCharge -= 20;

            cb(null, 'I have enough money, lets get programming');
        }else{
            cb('Im not hungry, lets get programming');
        }
    }, 1500)
}

function programming(time, cb) {
    setTimeout(() => {
        if (time >= 100) {

            phoneCharge -= 10;

            cb(null, 'Im programming...')
        } else{
            console.log(`time left ${time}`);
            cb('i have no enough time')
        }
    }, 1500)
}

function sleepOrAnime(phoneCharge, cb) {
    setTimeout(() => {
        if (phoneCharge > 20) {
            cb(null, 'watching anime')
            console.warn('go sleep!');
        } else{
            cb('no anime today, phone is almost dead, go sleep')
            
        }
    }, 1500)
}

