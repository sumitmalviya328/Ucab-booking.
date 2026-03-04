export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-10 text-yellow-400">
        Our Team
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold">Sumit Malviya</h2>
          <p className="text-yellow-400">Team Lead – Project Execution</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold">Vaibhavi Sinha</h2>
          <p className="text-yellow-400">Frontend Developer, Database</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold">Swangi Dubey</h2>
          <p className="text-yellow-400">Backend Development, Database</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold">Vibhor Saxena</h2>
          <p className="text-yellow-400">Project Architecture</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold">Sunny Sunny</h2>
          <p className="text-yellow-400">Project Setup and Configuration</p>
        </div>

      </div>

    </div>
  );
}