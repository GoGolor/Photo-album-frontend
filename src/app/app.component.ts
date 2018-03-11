import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ru');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ru');

    translate.setTranslation('ru', {
      LOGIN: 'Логин',
      PASSWORD: 'Пароль',
      ENTER: 'Вход',
      REQUIRED_FIELD: 'Обязательное поле',
      SHORT_NAME: 'Сокращеное наименование',
      INN: 'ИНН',
      CLIENT: 'Заказчик',
      SAVE: 'Сохранить',
      CANCEL: 'Отмена',
      CLIENT_SHORT_NAME: 'Наименование заказчика сокращеное',
      CLIENT_NAME: 'Наименование заказчика',
      ENTRY_HAS_BEEN_SAVED: 'Запись сохранена',
      ADD_CLIENT: 'Добавить заказчика',
      SEARCH: 'Поиск',
      ITEM_HAS_BEEN_SAVED: 'Запись была сохранена'
    });
  }
}
