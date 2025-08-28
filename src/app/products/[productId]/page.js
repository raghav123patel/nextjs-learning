export default async function Products ({params}) {
    const {productId} = await params; 
    console.log(params);
    return(
        <div>
    <h1> welcome to the nested dynamic routing page</h1>
    <h4> the product Id is: {productId}</h4>
    </div>
    )
}                                                                 
         