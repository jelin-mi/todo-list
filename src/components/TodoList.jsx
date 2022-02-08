import { useState } from 'react';
import { initialTasks } from '../data';
import Input from './Input';
import Summary from './Summary';
import Task from './Task';

function TodoList() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleComplete = id => {
    const newTasks = tasks.map(task => {
      if (task._id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return { ...task };
    });

    setTasks(newTasks);
  };

  const handleAdd = form => {
    console.log('form', form);
    setTasks(prev => {
      return [
        ...prev,
        {
          _id: `${prev.length + 1}`,
          name: form.name,
          description: form.description,
          isDone: false, // <== ADD
        },
      ];
    });
  };

  const tasksCompleted = tasks.filter(task => task.isDone).length;

  // console.log('render TodoList');

  return (
    <div className="border border-red-600 p-4">
      <h1>TodoList</h1>
      <Input onAdd={handleAdd} />
      <Summary tasksCompleted={tasksCompleted} />
      <div className="flex flex-col gap-y-1">
        {tasks.map(task => (
          <Task
            id={task._id}
            key={task._id}
            name={task.name}
            description={task.description}
            isDone={task.isDone}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
