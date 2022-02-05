import clsx from 'clsx';

function Task({ id, name, description, isDone, onComplete }) {
  const style = isDone ? 'border-green-600 bg-green-200 text-green-600' : 'border-gray-500 bg-gray-200';

  const handleClick = event => {
    onComplete(id);
  };

  return (
    <div
      className={clsx('rounded-md border border-green-600 bg-green-200  p-2 hover:cursor-pointer', style)}
      onClick={handleClick}
    >
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Task;
