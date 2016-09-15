import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let todos = [
            {id: 1, title: 'Изучить TypeScript', done: false},
            {id: 2, title: 'Изучить Angular2', done: false},
            {id: 3, title: 'Изучить ES6', done: false}
        ];
        return {todos};
    }
}