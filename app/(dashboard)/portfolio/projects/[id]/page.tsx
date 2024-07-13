import Image from 'next/image'
import React from 'react'

const Page = async ({
    params,
  }: {
    params: { id: string }
  }) => {

    const {id} = params


    const data = [
        {
            id: id,
            title: "BeaconPulseWave",
            description: "DEcentantalized application built with javascript and html using nextjs and mongoose",
            projectNotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam beatae, harum rem quis accusamus laboriosam debitis nobis molestiae earum praesentium cum quod repellat, tempore eos, repellendus ullam minus aut fugiat ipsa excepturi nesciunt aliquid. Illo nihil minus expedita numquam nisi minima, nobis hic suscipit commodi, quae ipsam totam aut.",
            images: ["/beaconlnight.png","",""],
            ProjectRequirment: "",
            github: "/",
            websiteLink: "/"
        },
        {
            id: crypto.randomUUID(),
            title: "photunelightway",
            description: "DEcentantalized application built with javascript and html using nextjs and mongoose",
            projectNotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam beatae, harum rem quis accusamus laboriosam debitis nobis molestiae earum praesentium cum quod repellat, tempore eos, repellendus ullam minus aut fugiat ipsa excepturi nesciunt aliquid. Illo nihil minus expedita numquam nisi minima, nobis hic suscipit commodi, quae ipsam totam aut.",
            images: ["","",""],
            ProjectRequirment: "",
            github: "/",
            websiteLink: "/"
        }
    ]


    const GatherPorfolioDetails = async function (proftolios: any){
        return (
            <section>
                {
                    proftolios.map((item:any) => (
                        <article key={crypto.randomUUID()}>

                            <header>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className='w-[300px] h-[300px] relative'>
                                    {
                                        item.images.map((item:any) => <Image key={crypto.randomUUID()} src={item} alt="imgage" fill />)
                                    }
                                </div>
                            </header>



                            <div>

                                <p>
                                    {item.projectNotes}
                                </p>


                                <div>

                                </div>


                            </div>





                        </article>
                    ))
                }
            </section>
        )
    }




  return (
    <main className='w-full min-h-screen'>

        
        <GatherPorfolioDetails proftolios={data} />
    

    </main>
  )
}

export default Page