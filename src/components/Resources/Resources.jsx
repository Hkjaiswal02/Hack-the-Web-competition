export const Resources = () => (
  <section className="py-20 bg-gray-950 text-white px-6">
    <h2 className="text-4xl font-bold text-center mb-10">Resources</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {["React", "Python", "Cloud"].map((res) => (
        <div
          key={res}
          className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform text-center"
        >
          <h3 className="text-xl font-semibold text-teal-300 mb-2">{res}</h3>
          <p className="text-gray-400">
            Handpicked tutorials, guides & tools to grow faster.
          </p>
        </div>
      ))}
    </div>
  </section>
);
