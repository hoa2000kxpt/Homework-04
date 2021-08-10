export class User {
    id: string="";
    gender: string="";
    username: string="";
    email: string;
    fullname: string="";
    phoneNumber: string="";
    dob: string="";
    password: string;
    role: string="";
    status: string="";

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }
}
