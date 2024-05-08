
//* Libraries imports

//* Components imports
import { Form } from "./_components";

export default function Login() {
  return (
    <div className="w-full min-h-svh bg-gradient-to-br from-rose-600 to-purple-600 flex justify-center items-center">
      <main className="flex justify-center items-center flex-col gap-4 p-4 rounded-lg bg-white shadow-lg shadow-neutral-800/30">
        <h1 className="text-2xl font-bold">Login</h1>

        <div>
          <Form />
        </div>
      </main>
    </div>
  );
}