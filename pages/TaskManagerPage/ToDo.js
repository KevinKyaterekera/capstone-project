export default function Todo({ task }) {
  return (
    <>
      <p>{task.task}</p>
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
}
