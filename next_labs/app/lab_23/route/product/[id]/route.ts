import { NextRequest, NextResponse } from "next/server";
import products from '@/Data/Product.json'; 


export async function GET(req: NextRequest, { params } : { params : Promise<{ id : string }> }) {
    const { id } = await params;
    const product = products.find(pro => pro.id === id);

    if (!product)
        return NextResponse.json(
            {
                success: false,
                message: "Product not found",
            },
            { status: 404}
        );

    return NextResponse.json(
        {
            success: true,
            message: "Student fetch successfully",
            data: product
        }, 
        { status: 200 }
    )
}

export async function PUT(req: NextRequest, { params } : { params : Promise<{ id : string }>}) {
    const { id } =  await params;
    const index = products.findIndex(pro => pro.id === id);
    const data = await req.json()

    if (index === -1)
        return NextResponse.json(
            {
                success: false,
                message: "Product not found",
            },
            { status: 404}
        );

    products[index] = {...products[index] , ...data};

    return NextResponse.json(
        {
            success: true,
            message: "product updated successfully",
            data
        }, 
        { status: 200 }
    )
}

export async function DELETE(req: NextRequest, { params } : { params : Promise<{ id : string }>}) {
    const { id } = await params;
    const index = products.findIndex(pro => pro.id === id);
    console.log(index)

    if (index === -1)
        return NextResponse.json(
            {
                success: false,
                message: "Product not found",
            },
            { status: 404}
        );

    const [deleteProduct] = products.splice(index, 1);

    return NextResponse.json(
        {
            success: true,
            message: "producnt deleted successfully",
            data: deleteProduct,
        },
        { status: 200 }
    )
}
