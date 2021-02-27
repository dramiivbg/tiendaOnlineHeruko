import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chat: Chat;
  constructor() { }


  setChat(chat: Chat){

    this.chat = chat;


  }

  getChat(){

    return this.chat;
  }
}
