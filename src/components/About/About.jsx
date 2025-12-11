import logo from "../../assets/Images/logo.png";
export const About = () => (
  <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold">About TECHSPIRE</h2>
        <p className="mt-4 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          fugiat amet error, eveniet hic fuga incidunt quae laudantium neque
          sint, accusamus praesentium? Inventore porro voluptas distinctio
          voluptatibus corporis nihil autem, odit veritatis blanditiis. Officia
          cupiditate perferendis excepturi iste necessitatibus! Eveniet voluptas
          praesentium error id nulla eius tempora assumenda autem et provident
          nemo vitae voluptatibus, alias officia repellat harum vel fugiat, sunt
          expedita obcaecati libero? Ullam magni ut aliquid sit facere?
        </p>
        <ul className="mt-6 space-y-3 text-white">
          <li> Lorem ipsum dolor sit.</li>
          <li> Lorem ipsum dolor sit.</li>
          <li> Lorem ipsum dolor sit.</li>
        </ul>
      </div>
      <div className="w-full flex justify-center lg:justify-end">
        <img src={logo} alt="" className="max-w-xs w-full" />
      </div>
    </div>
  </section>
);
