import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/app')
    getRootRoute() {
        return 'hi there!';
    }
}
