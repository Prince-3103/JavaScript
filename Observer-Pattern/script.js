class YoutubeChannel{
    constructor(){
        this.subscriber = [];
        this.count = 0;
    }

    subscribe(user){
        this.subscriber.push(user);
        user.update(`You have subscribed the channel.`);
        this.count++;
    }
    numOfSub(){
        console.log(this.count);
    }
    unsubscribe(user){
        if(this.count === 0){
            console.error("0 subscriber")
        }
        else{
            if(this.subscriber.includes(user)){
                this.subscriber = this.subscriber.filter((sub) => sub !== user);
                user.update(`You unsubscribed this channel.`);
                this.count--;
            }
            else{
                console.error(`${user.name} you are not an user`)
            }
        }
    }
    notify(msg){
        this.subscriber.forEach((sub) => sub.update(msg));
    }

}

class User{
    constructor(name){
        this.name = name;
    }
    update(msg){
        console.log(`${this.name}, ${msg}`);
    }
}

let user1 = new User("Prince");
let user2 = new User("Jon Snow");
let user3 = new User("Arya");

let r2h = new YoutubeChannel();

r2h.subscribe(user1);
r2h.subscribe(user2);
r2h.subscribe(user3);

r2h.unsubscribe(user2);
r2h.unsubscribe(user2);


r2h.notify("No video today")

r2h.numOfSub()