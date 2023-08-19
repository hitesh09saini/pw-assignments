class UserInformation {
    constructor() {
        this.userMap = new Map();
    }

    addUser(name, age, email) {
        if (!this.userMap.has(name)) {
            this.userMap.set(name, { age, email });
            console.log("User added successfully.");
        } else {
            console.log("User already exists.");
        }
    }

    updateUser(name, age, email) {
        if (this.userMap.has(name)) {
            const user = this.userMap.get(name);
            if (age !== undefined) {
                user.age = age;
            }
            if (email !== undefined) {
                user.email = email;
            }
            console.log("User updated successfully.");
        } else {
            console.log("User not found.");
        }
    }

    deleteUser(name) {
        if (this.userMap.has(name)) {
            this.userMap.delete(name);
            console.log("User deleted successfully.");
        } else {
            console.log("User not found.");
        }
    }

    displayUsers() {
        console.log("User Information:");
        this.userMap.forEach((info, name) => {
            console.log(`Name: ${name}, Age: ${info.age}, Email: ${info.email}`);
        });
    }
}

