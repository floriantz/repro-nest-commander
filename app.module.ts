import {BasicCommand} from "./command-runner";
import {Module} from "@nestjs/common";

@Module({
    providers: [BasicCommand]
})
export class AppModule {}