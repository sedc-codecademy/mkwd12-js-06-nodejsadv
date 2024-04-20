import { Injectable } from '@nestjs/common';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from './entities/user-address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddress)
    private userAdressRepo: Repository<UserAddress>,
  ) {}

  async create(createUserAddressDto: CreateUserAddressDto) {
    console.log(createUserAddressDto);

    const newAddress = this.userAdressRepo.create({
      ...createUserAddressDto,
      user: { id: createUserAddressDto.user },
    });

    await this.userAdressRepo.save(newAddress);
  }

  findAll() {
    return `This action returns all userAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAddress`;
  }

  update(id: number, updateUserAddressDto: UpdateUserAddressDto) {
    return `This action updates a #${id} userAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAddress`;
  }
}
