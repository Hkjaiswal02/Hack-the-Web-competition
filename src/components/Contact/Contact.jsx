export const Contact = () => (
  <section className="py-20 bg-gray-900 text-white px-6">
    <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
    <form className="max-w-xl mx-auto grid gap-4">
      <input
        className="p-3 rounded bg-gray-800 text-white"
        placeholder="Your Name"
      />
      <input
        className="p-3 rounded bg-gray-800 text-white"
        placeholder="Email"
      />
      <textarea
        className="p-3 rounded bg-gray-800 text-white"
        placeholder="Message"
      ></textarea>
      <button className="py-3 bg-teal-500 text-black font-semibold rounded hover:bg-teal-400 transition">
        Send
      </button>
    </form>
  </section>
);
