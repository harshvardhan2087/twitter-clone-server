import JWT from 'jsonwebtoken';
import { prismaClient } from "../app/clients/db";
import { User } from '@prisma/client';


const JWT_Secret = "oiwsioudh";

class JWTServices {

    public static generateTokenForUser(user: User){
        const payload = {
            id: user?.id,
            email: user?.email
        };
        const token = JWT.sign(payload, JWT_Secret);
        return token;
    }
}

export default JWTServices;