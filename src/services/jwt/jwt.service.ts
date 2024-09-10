import { Global, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  signToken(id: string, email: string, name: string, imageUrl: string): string {
    return jwt.sign(
      {
        id,
        email,
        name,
        imageUrl
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 30 * 60 * 60 * 60
      }
    );
  }

  verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}
