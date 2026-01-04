import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Todo } from './todo.model';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // userCollection!: AngularFirestoreCollection;
  collection: any;
  constructor(  
    private db: AngularFirestore
  ) { }

//    fetchAvaliableExercises
fetchTodo() {
      this.db.collection('todo').valueChanges().subscribe(todo => {
      console.log('t',todo);  
    })
        
    }

   /*  getItems(): Observable<Todo[]> {
    const itemsCollection = collection(this.firestore, 'todo');
    // collectionData streams the documents as an array of JSON objects
    return collectionData(itemsCollection, { idField: 'id' }) as Observable<Todo[]>;
  } */
    
}
