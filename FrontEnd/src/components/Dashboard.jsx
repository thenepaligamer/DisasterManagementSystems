import SevenDaysSummary from "./summary/sevendaysummary";

export default function Dashboard (){
    return (
        <>
            <div className="grid grid-cols-3 px-2 gap-3 mt-4 ">
                {/*/!*<div>Incident summary </div> Todo: most recent incident summary*!/*/}
                {/*<div>*/}
                {/*    <SevenDaysSummary />*/}
                {/*</div>*/}
                {/*<div>Relief (Last week)</div>*/}

                <div className="col-span-2">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus labore perferendis porro quae! A commodi consequuntur dolorem, error eum facilis fuga fugit illum ipsam iste iusto laboriosam laudantium maiores officia optio placeat possimus provident quaerat qui recusandae reiciendis repellat reprehenderit rerum sint tenetur veniam vitae. Aspernatur assumenda autem dignissimos dolores ipsa ipsum, officia perspiciatis quibusdam repellat sunt! Asperiores blanditiis consequatur cumque deleniti doloribus dolorum eaque eius ex, excepturi illum impedit inventore maxime nam nemo nihil numquam officia optio perferendis provident quod saepe ullam velit voluptatem. Aliquid aperiam cupiditate harum itaque quaerat quia reiciendis sed sit sunt voluptates. Assumenda, voluptatem?
                </div>
                <div className="">

                    <SevenDaysSummary />
                </div>
            </div>
        </>
    )
}
