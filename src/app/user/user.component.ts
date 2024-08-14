import { Component, computed, EventEmitter, input, Input, output, Output} from '@angular/core';

interface User{
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //@Input({required: true}) id!: string;
  //@Output() select = new EventEmitter();
  // @Input({required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };

  user = input.required<User>();
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });
  
  onSelectUser()
  {
    this.select.emit(this.user().id);
  }
}
