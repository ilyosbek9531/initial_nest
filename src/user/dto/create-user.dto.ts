import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @ApiProperty({
    example: 'ilyosbek',
    required: true,
  })
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'ilyosbek003',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have at least 3 characters' })
  @IsAlphanumeric(null, {
    message: 'Username does not allow other that alpha numeric chars',
  })
  username: string;

  @ApiProperty({
    example: 'ilyosbek@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail(null, {
    message: 'Please provide valid email',
  })
  email: string;

  @ApiProperty({
    example: 20,
    required: false,
  })
  @IsInt()
  age: number;

  @ApiProperty({
    example: 'm',
    required: false,
  })
  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string;

  @ApiProperty({
    example: 'Bek@123',
    required: true,
  })
  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and Maximum 20 characters,
    at least one uppercase letter,
    one lowercase letter,
    one number and
    one special character`,
  })
  password: string;
}
