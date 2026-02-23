import { NextRequest, NextResponse } from "next/server";
import products from '@/Data/Product.json'


export async function GET() {
    return NextResponse.json(
        {  
            success: true, 
            message: "All products fetch succefully", 
            data: products 
        },
        { status: 200 }
    )
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    if (!data.name || !data.price)
        return NextResponse.json(
            { success: false, message: "Name and price are required" },
            { status: 400 }
        );
    

    const maxId = products.length ? Math.max(...products.map((pro) => parseInt(pro.id))) : 0

    const newProduct = {
        id: String(maxId + 1),
        name: data.name,
        price: data.price,
        detailes: data.detailes,
        image: data.image,
    }
    products.push(newProduct)

    return NextResponse.json(
        { 
            success: true, 
            message: "Product added successfully", 
            data: newProduct 
        },
        { status: 201}
    )
}
