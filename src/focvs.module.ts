import { Module, Provider } from "@nestjs/common";
import { JwtService } from "./services";
import { AuthGuard } from "./guards";
import { Reflector } from "@nestjs/core";

@Module({
    providers: [JwtService, {
        provide: AuthGuard,
        useFactory: (jwtService: JwtService) => {
            return new AuthGuard(jwtService, new Reflector())
        },
        inject: [JwtService]
    }],
    exports: [JwtService, AuthGuard]
})
export class FocvsSharedStuffModule {} {}