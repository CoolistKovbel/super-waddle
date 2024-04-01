const Page = async () => {
  const projects = [
    {
      title: "deG4ntl4m4n",
      type: "Blog",
      category:  "LIFE",
      profojetImage: "/banner-test.png",
      desription:
        "Tail shankle turkey pork chop, prosciutto ground round andouille leberkas capicola chicken pork loin. Tri-tip picanha pig, alcatra tongue bresaola pork belly corned beef. Cow sirloin burgdoggen, rump picanha tri-tip turkey kielbasa ham ribeye boudin shank chislic. Pancetta chuck frankfurter swine jerky strip steak tongue alcatra. Tenderloin pastrami pancetta strip steak, cow jowl doner pork. Pastrami ground round tri-tip, chuck salami swine buffalo. Tri-tip hamburger short loin andouille.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <header>
        <h2>Portfolio page</h2>
      </header>

      <section>
        <h2>Recent Project:</h2>
        
      </section>
    </main>
  );
};

export default Page;
