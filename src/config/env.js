let baseUrl="";
if (process.env.NODE_ENV == 'development'){
    baseUrl="/apis"
} else if (process.env.NODE_ENV == 'production'){
    baseUrl = "http://www.hengyipack.com"
}
export{
    baseUrl
}