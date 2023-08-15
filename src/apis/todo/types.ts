export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type TodoPostRequest = {
  todo: string;
};

export type TodoDeleteRequest = {
  id: number;
};

export type TodoUpdateRequest = {
  id: number;
  todo: string;
  isCompleted: boolean;
};
