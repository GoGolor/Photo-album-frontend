import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

interface Link {
  name: string;
  url: string;
  isAviable?: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  journals: Link[];
  dictionaryurls: Link[];
  constructor(private authService: AuthService) {
    const currentUser = authService.currentUser;
    this.journals = [
      { name: 'Журнал', url: '/journal' },
      { name: 'Принятие СИ в поверку', url: '/acceptances', isAviable: currentUser.isAdmin || currentUser.acceptanceOfficer },
      { name: 'Поверка СИ', url: '/verifications', isAviable: currentUser.isAdmin || currentUser.verificationOfficer },
      { name: 'Выдача СИ заказчику', url: '/delivery', isAviable: currentUser.isAdmin || currentUser.acceptanceOfficer },
      { name: 'Экспорт', url: '/export' }
    ]
      .filter(isLinkAviable);
    this.dictionaryurls = [
      { name: 'Заказчики', url: '/clients' },
      { name: 'Тип СИ', url: '/mi-types' },
      { name: 'Средства поверки', url: '/verification-means' },
      { name: 'Пользователи', url: '/users', isAviable: currentUser.isAdmin }
    ]
      .filter(isLinkAviable);
  }
}

const isLinkAviable = ({ isAviable = true }: Link): boolean => isAviable;
