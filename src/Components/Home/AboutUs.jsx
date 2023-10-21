const AboutUs = () => {
   
    return (
    <div className="">
      <div>
      <h2 className="px-12 pt-36 text-center text-6xl font-bold">Who We are</h2>
      </div>
        <div className="flex px-12 max-w-screen-2xl mx-auto h-auto items-center">
        <div className="mx-auto items-center">
        
          <div className="mt-12 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="tania andrew"
                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tania Andrew
                  </h5>
                
                </div>
                <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                 CEO
                </p>
              </div>
            </div>
            <div className="mb-6 p-0">
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                
              </p>
              <h2 className="mt-8 text-xl font-semibold">Our Goal</h2>
              <p>
              To successfully organize and manage 100 corporate events in the next fiscal year, achieving at least a 95% client satisfaction rate.
              </p>
              <h2 className="mt-8 text-xl font-semibold">Our Mission</h2>
              <p>
              To deliver unparalleled event experiences that capture the essence and objectives of our corporate clients. Through a blend of creativity, precision, and a deep understanding of our clients' brands, we strive to make every event a memorable milestone..
              </p>
              <h2 className="mt-8 text-xl font-semibold">Our Vission</h2>
              <p>
              To be the worlds most trusted partner in corporate event management. Our vision is to redefine the way businesses experience events, pushing the boundaries of creativity and precision, and setting a global standard for excellence in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default AboutUs;
  