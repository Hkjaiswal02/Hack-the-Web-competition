import logo from "../../assets/Images/logo.png";
export const About = () => (
  <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold">About TECHSPIRE</h2>
        <p className="mt-4 text-white ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          dolorum nemo provident laborum quaerat numquam est eveniet, maxime
          commodi temporibus tempore modi atque reiciendis! Non itaque
          praesentium voluptatibus libero, dolore dolor repellendus aliquid
          neque nostrum, earum, repudiandae sequi. Provident aliquam quae
          voluptates deserunt nam a ex illum, excepturi dicta natus praesentium
          qui officiis obcaecati, assumenda ipsam fuga magnam molestiae,
          perferendis quibusdam corporis! Consequatur suscipit eos nesciunt
          quasi odit id officiis ducimus delectus, perferendis perspiciatis.
          Laborum veritatis quidem provident nisi placeat.
        </p>
        <ul className="mt-6 space-y-3 text-white">
          <li>• Lorem, ipsum dolor.</li>
          <li>• Project sprints and open-source contributions</li>
          <li>• Mentorship and career prep</li>
        </ul>
      </div>
      <div className="w-full flex justify-center lg:justify-end">
        <img src={logo} alt="" className="max-w-xs w-full" />
      </div>
    </div>
  </section>
);
