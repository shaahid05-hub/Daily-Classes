export async function product() {
    let data = await fetch('https://dummyjson.com/products?limit=194')
    let {products} = await data.json()
    // console.log(carts);
    return products
}
// cart()
