import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];

  constructor(private dataService:DataService) {
    console.log('construc ran...');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.name = "John Doe";
    this.email = "test@test.ch";
    this.age = 40;
    this.address = {
      street:'zeughausgasse 6',
      city:'thun',
      state:'bern'
    }
    this.hobbies = ['Write code','Watch movies','listen to music'];
    this.dataService.getPosts().subscribe((posts) => {
        this.posts = posts;
    });
  }

  onClick()
  {
    this.hobbies.push('new Hobby');
  }

  addHobby(hobby)
  {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby)
  {
    for(let i = 0; i <this.hobbies.length;i++)
    {
      if(this.hobbies[i] == hobby)
      {
        this.hobbies.splice(i,1);
      }
    }
  }

  changeValue(name)
  {
    console.log('intro');
    console.log(name);
  }
}

interface Address{
    street:string,
    city:string,
    state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
