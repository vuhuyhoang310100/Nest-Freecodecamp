import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    //  Post: auth/signup
    @Post('signup')
    login(){
        return this.authService.signup();
    }

    //  Post: auth/signin
    @Post('signin')
    signup(){
        return this.authService.login();
    }
}