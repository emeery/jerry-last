import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Todo } from './todo.model';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoCollection!: AngularFirestoreCollection;
  constructor(
    private db: AngularFirestore
  ) { }

  //    fetchAvaliableExercises
  fetchTodo() {
    this.todoCollection = this.db.collection<Todo>('todo');
    this.todoCollection.valueChanges({ idField: 'id' })
      .subscribe((todo) => {
        console.log(todo);
      })

  }

  /*  getItems(): Observable<Todo[]> {
   const itemsCollection = collection(this.firestore, 'todo');
   // collectionData streams the documents as an array of JSON objects
   return collectionData(itemsCollection, { idField: 'id' }) as Observable<Todo[]>;
 } */

}
