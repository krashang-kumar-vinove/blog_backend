import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private svc;
    constructor(svc: UsersService);
    create(dto: CreateUserDto): Promise<import("./entities/user.entity").User[]>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    findByEmail(email: string): Promise<import("./entities/user.entity").User>;
}
