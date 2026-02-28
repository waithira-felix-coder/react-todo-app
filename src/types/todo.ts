export interface Todo {
  id: string; 
  text: string;
  completed: boolean;
  createdAt: number;
}


//Ensure that the Todo interface is exported so it can be used in other parts of the application, such as in components or services that manage todo items.