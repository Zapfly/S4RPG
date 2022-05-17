

let s4rpg = {

    testWord: function () {
        return "hello World"
    },

    Creature: class {
        super() {}
        constructor (strength, speed, stealth, surveilance, name) {
            if(arguments.length === 1) {
                for(var prop in arguments[0]) {
                    this[prop] = arguments[0][prop];
                }
            } else {
                this.strength = strength,
                this.speed = speed,
                this.stealth = stealth,
                this.surveilance = surveilance,
                this.name = name
            }
        }

        calcDamage() {
            return this.strength;
        }


    },

    // Creature: function (strength, speed, stealth, surveilance, name) {
    //     if(arguments.length === 1) {
    //         for(var prop in arguments[0]) {
    //             this[prop] = arguments[0][prop];
    //         }
    //     } else {
    //         this.name = name;
    //         this.strengh = strength,
    //         this.speed = speed,
    //         this.stealth = stealth,
    //         this.surveilance = surveilance
    //     }
    // },

    

}

export default s4rpg;