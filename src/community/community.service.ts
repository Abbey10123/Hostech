import { Injectable } from '@nestjs/common';
import { CreateCommunityDto } from './dto/create-community.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Community } from './entities/community.entity';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private userRepo: Repository<Community>
  ){}
  create(user) {
    const aUser = this.userRepo.create({...user});
    return this.userRepo.save(aUser);
  }

  findAll() {
    return `This action returns all community`;
  }

  findOne(id: number) {
    return this.userRepo.findOne({where: {id: id}});
  }

  update(id: number, updateCommunityDto: UpdateCommunityDto) {
    return `This action updates a #${id} community`;
  }

  remove(id: number) {
    return `This action removes a #${id} community`;
  }
}
