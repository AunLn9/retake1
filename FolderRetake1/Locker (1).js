class Locker {
    constructor(password) {
        this.locked = true;
        this.password = password;
    }

    setPassword(oldPassword, newPassword) {
        if (oldPassword === this.password) {
            this.password = newPassword;
            return "success";
        } else {
            return "unsuccess";
        }
    }

    unlock(password) {
        if (password === this.password) {
            this.locked = false;
            return "correct";
        } else {
            return "incorrect";
        }
    }

    lock() {
        this.locked = true;
    }

    isLocked() {
        return this.locked ? "locked" : "unlocked";
    }

    tryMultiplePasswords(passwordsArray) {
        for (let pass of passwordsArray) {
            if (pass === this.password) {
                this.locked = false;
                return "unlocked";
            }
        }
        return "still locked";
    }
}

const myLocker = new Locker("1234");
console.log(myLocker.unlock("1111"));
console.log(myLocker.unlock("1234"));
console.log(myLocker.isLocked());

myLocker.lock(); 
console.log(myLocker.isLocked()); 

console.log(myLocker.tryMultiplePasswords(["1111", "2222", "1234"]));
