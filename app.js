//скласти свій розпорядок дня використовуючи event loop та користуючись асинхронністю js 
//(приблизно таке було формулювання)

let phoneCharge = 40;
let isFood = false;
let money = 200; 
let time = 180;

function awake(awaked, cb) {
    setTimeout(() => {
        if (awaked) {
            cb(null, 'hey, you have finally awake');
            checkMessages(phoneCharge, (err, phoneCharge) => {
                if(!err){
                    console.log(phoneCharge);
                } else{
                    console.warn(err);
                }
            });
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
            cb(null, `phone charge = ${phoneCharge -= 10}`);

            setTimeout(() =>{
                console.log('i wanna eat');

                checkFridge(isFood, (err, message) => {
                    if (!err) {
                        console.log(message); 
                    } else{
                        console.warn(err);
                    }
                })
            }, 500)

        } else{
            cb('crap, I forgot to charge my phone');
            
            setTimeout(() =>{
                console.log('i wanna eat');

                checkFridge(isFood, (err, message) => {
                    if (!err) {
                        console.log(message); 
                    } else{
                        console.warn(err);
                    }
                })
            }, 500)
        }
    }, 500)
}

awake(true, (err, message)=>{
    if (!err) {
        console.log(message); 
    } else{
        console.warn(err);
    }
});


function checkFridge(isFood, cb) {
    console.log('checking fridge...');
    if (isFood) {
        cb(null, 'im hot hungry, lets make some programms');
        
        programming(time, (err, message) => {
            if (!err) {
                console.log(message);
            } else{
                console.log(`time left ${time}`);
                console.warn('not enough time, lets sleep');

                sleepOrAnime(phoneCharge, (err, message) => {
                    if (!err) {
                        console.log(message);
                        console.warn('go sleep!');
                    } else{
                        console.log(err);
                    }
                })
            }
        })

    }else{
        cb('we need to go shopping');

        goShopping(money, (err) => {
            if (!err) {
                isFood = true;
                money = money - 200;
                time -= 30;

                console.log('I have food');
                console.log(`there are ${money} money left`); 
                console.log(`there are ${time} minutes left`); 
                
                
            } else{
                console.error(err);
                console.log(`there are ${money} money left`);
                console.log('need to earn some money');
            }
        })
    }
}

function goShopping(money, cb) {
    setTimeout(() => {
        console.log('its shopping time!!!');
        if (money >= 300) {
            cb(null, isFood = true);

            programming(time, (err, message) => {
                if (!err) {
                    console.log(message);
                    setTimeout(() => {
                        console.log('enough programming, lets sleep');

                        sleepOrAnime(phoneCharge, (err, messageAnime) => {
                            if (!err) {
                                console.log(messageAnime);
                                console.warn('go sleep!');
                            } else{
                                console.log(err);
                            }
                        })
                    })
                } else{
                    console.log(`time left ${time}`);
                    console.warn('not enough time, lets sleep');

                    sleepOrAnime(phoneCharge, (err, message) => {
                        if (!err) {
                            console.log(message);
                            console.warn('go sleep!');
                        } else{
                            console.log(err);
                        }
                    })
                }
            })

        } else{
           cb('im poor student, gonna eat my shoes');
           console.warn('I need to go work');
           
            goWork(money, (err, message) => {
                if (!err) {
                    money += 500;
                    isFood = true;
                    console.log('hooraaay, I can eat something');
                } else{
                    console.log(message);
                }
            })
        }
    },1000)
}

function goWork(money, cb) {
    setTimeout(() => {
        if (money < 300){
            console.log('working');
            console.log('working harder');
            console.log('WORKING SUPER HARD');
            time -= 80;
            phoneCharge -= 20;

            cb(null, 'I have enough money, lets get programming');
            programming(time, (err, message) => {
                if (!err) {
                    console.log(message);
                } else{
                    console.log(`time left ${time}`);
                    console.warn('not enough time, lets sleep');

                    sleepOrAnime(phoneCharge, (err, message) => {
                        if (!err) {
                            console.log(message);
                            console.warn('go sleep!');
                        } else{
                            console.log(err);
                        }
                    })
                    
                }
            })
        }else{
            cb('I have enough money, lets get programming');
            programming(time, (err, message) => {
                if (!err) {
                    console.log(message);
                } else{
                    console.log(`time left ${time}`);
                    console.warn('not enough time, lets sleep');

                    sleepOrAnime(phoneCharge, (err, message) => {
                        if (!err) {
                            console.log(message);
                            console.warn('go sleep!');
                        } else{
                            console.log(err);
                        }
                    })

                }
            })
        }
    }, 1500)
}

function programming(time, cb) {
    setTimeout(() => {
        if (time >= 100) {
            cb(null, 'Im programming...')
        } else{
            cb('i have no enough time')
        }
    }, 1500)
}

function sleepOrAnime(phoneCharge, cb) {
    setTimeout(() => {
        if (phoneCharge > 20) {
            cb(null, 'watching anime')
        } else{
            cb('no anime today, phone is almost dead, go sleep')
            console.log('phonecharge = ' + phoneCharge); 
        }
    }, 1500)
}

