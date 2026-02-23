import { NextRequest, NextResponse } from "next/server";

function Middleware_Task_1(req: NextRequest) {
        return NextResponse.redirect(
            new URL('/lab_22/pagination/1', req.nextUrl)
        )
}

function Middleware_Task_2_3(req: NextRequest) {
    const tokenCookie = req.cookies.get("token");

    if (!tokenCookie?.value)
        return NextResponse.redirect(
            new URL('/lab_24', req.nextUrl)
        )

    let tokenData
    try {
        tokenData = JSON.parse(tokenCookie.value);
    } catch {
        return NextResponse.redirect(
            new URL('/lab_24', req.nextUrl)
        );
    }

    const now = Date.now();

    if (!tokenData.expiry || tokenData.expiry < now) 
        return NextResponse.redirect(
            new URL('/lab_24', req.nextUrl)
        );

    return NextResponse.next();
}


export async function middleware(req: NextRequest) {
    const url = req.nextUrl;

    if (url.pathname === '/lab_22/pagination')
        return Middleware_Task_1(req)

    if (url.pathname === '/lab_24/dashboard')
        return Middleware_Task_2_3(req);

    return NextResponse.next();
}

